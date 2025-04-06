import React, { useState, FC, useEffect, useMemo } from "react";
import block from "bem-cn";
import { Stage, Layer, Text, Rect, Path } from "react-konva";

const b = block("pointer-constructor");

export const PreliminaryPointer = (pointerParams: any) => {
  const { height, width, bgColor, objects, setObjects, stageRef } = pointerParams;

  const renderObjects = () => {
    return objects.map((obj: any) => {
      if (obj.type === "text") {
        return (
          <Text
            key={obj.id}
            x={obj.x}
            y={obj.y}
            text={obj.text}
            fontSize={obj.fontSize}
            fontStyle={"bold"}
            fontFamily={"AliveFont"}
            fill={obj.color}
            draggable
          />
        );
      } else if (
        obj.type === "arrow-s" ||
        obj.type === "arrow-m" ||
        obj.type === "arrow-l"
      ) {
        return (
          <Path
            key={obj.id}
            data={obj.data}
            fill={obj.color}
            scale={{ x: 0.05, y: 0.05 }}
            x={obj.x}
            y={obj.y}
            draggable
            rotation={180}
          />
        );
      } else if (obj.type === "arrow-curved-right") {
        return (
          <Path
            key={obj.id}
            data={obj.data}
            fill={obj.color}
            scale={{ x: -0.05, y: 0.05 }}
            x={obj.x}
            y={obj.y}
            draggable
            rotation={180}
          />
        );
      }
      return null;
    });
  };

  console.log(objects);

  return (
    <div>
      {/* Stage для рисования объектов */}
      <Stage width={width*1.05} height={height*1.1} ref={stageRef}>
        <Layer>
          <Rect
            x={10}
            y={10}
						height={height}
            width={width}
            fill={bgColor}
            stroke="black"
            strokeWidth={3}
            cornerRadius={10}
          />
          {renderObjects()}
        </Layer>
      </Stage>
    </div>
  );
};
