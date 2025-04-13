import React, { useEffect, useRef } from "react";
import { Group, Path, Transformer, Circle, Text } from "react-konva";
import Konva from "konva";

interface ResizableArrowPathProps {
  pathData: string;
  onDelete: () => void;
  obj?: any;
  onDeselect?: () => void;
  isSelected?: boolean;
  onSelect?: () => void;
}

export const ResizableArrowPath: React.FC<ResizableArrowPathProps> = ({
  pathData,
  onDelete,
  obj,
  onDeselect,
  isSelected = false,
  onSelect,
}) => {
  const shapeRef = useRef<Konva.Path>(null);
  const trRef = useRef<Konva.Transformer>(null);

  useEffect(() => {
    if (isSelected && shapeRef.current && trRef.current) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer()?.batchDraw();
    }
  }, [isSelected]);

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

  const rect = shapeRef.current?.getClientRect();

  return (
    <>
      <Group
        draggable
        onClick={handleClick}
        onTap={handleTap}
      >
        <Path
          ref={shapeRef}
          data={pathData}
          fill={obj?.color}
          scale={{ x: 0.05, y: 0.05 }}
          x={obj?.x}
          y={obj?.y}
          draggable
          rotation={180}
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
        />
      )}
    </>
  );
};
