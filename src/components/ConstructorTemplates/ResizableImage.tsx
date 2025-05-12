import React, { useEffect, useRef, useState } from "react";
import { Group, Image, Transformer, Circle, Text } from "react-konva";
import Konva from "konva";

interface ResizableImageProps {
  imageUrl: string;
  onDelete: () => void;
  obj?: any;
  onDeselect?: () => void;
  isSelected?: boolean;
  onSelect?: () => void;
  onTransform?: (newProps: any) => void;
}

export const ResizableImage: React.FC<ResizableImageProps> = ({
  imageUrl,
  onDelete,
  obj,
  onDeselect,
  isSelected = false,
  onSelect,
  onTransform,
}) => {
  const shapeRef = useRef<Konva.Image>(null);
  const trRef = useRef<Konva.Transformer>(null);
  const [image, setImage] = useState<CanvasImageSource | undefined>(undefined);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    scaleX: obj?.scaleX || 0.5,
    scaleY: obj?.scaleY || 0.5,
  });
  const [rect, setRect] = useState<{ x: number; y: number; width: number; height: number } | null>(null);

  useEffect(() => {
    if (isSelected && shapeRef.current && trRef.current) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer()?.batchDraw();
    }
  }, [isSelected]);

  useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = imageUrl;
    img.onload = () => {
      setImage(img);
      setDimensions(prev => ({
        ...prev,
        width: img.width,
        height: img.height,
      }));
      if (shapeRef.current) {
        setRect(shapeRef.current.getClientRect());
        shapeRef.current.getLayer()?.batchDraw();
      }
    };
    img.onerror = (e) => {
      console.error("Ошибка загрузки изображения:", e);
    };
  }, [imageUrl]);

  const handleClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
    e.cancelBubble = true;
    if (onSelect) {
      onSelect();
    }
  };

  const handleTap = (e: Konva.KonvaEventObject<Event>) => {
    e.cancelBubble = true;
    if (onSelect) {
      onSelect();
    }
  };

  const handleDelete = (e: Konva.KonvaEventObject<MouseEvent>) => {
    e.cancelBubble = true;
    onDelete();
  };

  const handleDeleteTap = (e: Konva.KonvaEventObject<Event>) => {
    e.cancelBubble = true;
    onDelete();
  };

  const handleTransformEnd = () => {
    if (shapeRef.current && onTransform) {
      const node = shapeRef.current;
      const scaleX = node.scaleX();
      const scaleY = node.scaleY();

      setDimensions(prev => ({
        ...prev,
        scaleX,
        scaleY,
      }));

      setRect(node.getClientRect());

      onTransform({
        ...obj,
        scaleX,
        scaleY,
        rotation: node.rotation(),
        x: node.x(),
        y: node.y(),
      });
    }
  };

  return (
    <>
      <Group
        draggable
        onClick={handleClick}
        onTap={handleTap}
        onDragMove={() => {
          if (shapeRef.current) {
            setRect(shapeRef.current.getClientRect());
          }
        }}
        onDragEnd={() => {
          if (shapeRef.current && onTransform) {
            const node = shapeRef.current;
            setRect(node.getClientRect());
            onTransform({
              ...obj,
              x: node.x(),
              y: node.y(),
            });
          }
        }}
      >
        <Image
          ref={shapeRef}
          image={image}
          width={dimensions.width}
          height={dimensions.height}
          scale={{
            x: dimensions.scaleX,
            y: dimensions.scaleY,
          }}
          x={obj?.x}
          y={obj?.y}
          rotation={obj?.rotation || 0}
          draggable
        />

        {/* Кнопка удаления */}
        {isSelected && rect && (
          <Group
            x={rect.x + rect.width + 5}
            y={rect.y - 5}
            onClick={handleDelete}
            onTap={handleDeleteTap}
            listening={true}
          >
            <Circle radius={10} fill="white" stroke="black" strokeWidth={1} />
            <Text text="✕" fontSize={12} x={-6} y={-7} />
          </Group>
        )}
      </Group>

      {/* Трансформер для изменения размеров */}
      {isSelected && (
        <Transformer
          ref={trRef}
          enabledAnchors={[
            "top-left",
            "top-right",
            "bottom-left",
            "bottom-right",
          ]}
          boundBoxFunc={(oldBox, newBox) => newBox}
          onTransformEnd={handleTransformEnd}
        />
      )}
    </>
  );
};
