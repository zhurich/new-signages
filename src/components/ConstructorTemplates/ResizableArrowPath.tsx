import React, { useEffect, useRef, useState } from "react";
import { Group, Path, Transformer, Circle, Text } from "react-konva";
import Konva from "konva";

interface ResizableArrowPathProps {
  pathData: string;
  onDelete: () => void;
  obj?: any;
  onDeselect?: () => void;
  isSelected?: boolean;
  onSelect?: () => void;
  onTransform?: (newProps: any) => void;
}

export const ResizableArrowPath: React.FC<ResizableArrowPathProps> = ({
  pathData,
  onDelete,
  obj,
  onDeselect,
  isSelected = false,
  onSelect,
  onTransform,
}) => {
  const shapeRef = useRef<Konva.Path>(null);
  const trRef = useRef<Konva.Transformer>(null);
  const [rect, setRect] = useState<{ x: number; y: number; width: number; height: number } | null>(null);

  useEffect(() => {
    if (isSelected && shapeRef.current && trRef.current) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer()?.batchDraw();
    }
  }, [isSelected]);

  useEffect(() => {
    if (shapeRef.current) {
      setRect(shapeRef.current.getClientRect());
    }
  }, [pathData]);

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

      setRect(node.getClientRect());

      onTransform({
        ...obj,
        scaleX: scaleX,
        scaleY: scaleY,
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
        <Path
          ref={shapeRef}
          data={pathData}
          fill={obj?.color}
          scale={{ 
            x: obj?.scaleX || 0.05, 
            y: obj?.scaleY || 0.05 
          }}
          x={obj?.x}
          y={obj?.y}
          rotation={obj?.rotation || 180}
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
