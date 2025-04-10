import React, { useEffect, useRef, useState } from "react";
import { Group, Path, Transformer, Circle, Text } from "react-konva";
import Konva from "konva";

interface ResizableArrowPathProps {
  pathData: string;
  onDelete: () => void;
	obj?: any
}

export const ResizableArrowPath: React.FC<ResizableArrowPathProps> = ({
  pathData,
  onDelete,
	obj,
}) => {
  const shapeRef = useRef<Konva.Path>(null);
  const trRef = useRef<Konva.Transformer>(null);

  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (isSelected && shapeRef.current && trRef.current) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer()?.batchDraw();
    }
  }, [isSelected]);

  const rect = shapeRef.current?.getClientRect();

  return (
    <>
      <Group
        draggable
        onClick={() => setIsSelected(true)}
        onTap={() => setIsSelected(true)}
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
            onClick={onDelete}
            onTap={onDelete}
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
