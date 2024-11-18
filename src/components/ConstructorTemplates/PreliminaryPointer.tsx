import React, { useState, FC, useEffect, useMemo } from "react";
import block from "bem-cn";
import { Stage, Layer, Text, Arrow, Rect } from "react-konva";

const b = block("pointer-constructor");

export const PreliminaryPointer = (pointerParams: any) => {
  const { height, width, bgColor, objects, setObjects } = pointerParams;

  const initial = [];

  const addArrow = () => {
    setObjects([
      ...objects,
      {
        type: "arrow",
        id: `arrow-${objects.length}`,
        x: 50,
        y: 50,
        points: [0, 0, 50, 0],
        color: "red",
      },
    ]);
  };

  const addText = () => {
    setObjects([
      ...objects,
      {
        type: "text",
        id: `text-${objects.length}`,
        x: 100,
        y: 100,
        text: "Улица Берзарина",
        color: "black",
      },
    ]);
  };

  const addSign = () => {
    setObjects([
      ...objects,
      {
        type: "sign",
        id: `sign-${objects.length}`,
        x: 150,
        y: 150,
        width: 50,
        height: 50,
        color: "green",
      },
    ]);
  };

  const renderObjects = () => {
    return objects.map((obj: any) => {
      if (obj.type === "arrow") {
        return (
          <Arrow
            key={obj.id}
            x={obj.x}
            y={obj.y}
            points={obj.points}
            pointerLength={10}
            pointerWidth={10}
            fill={obj.color}
            stroke={obj.color}
            draggable
          />
        );
      } else if (obj.type === "text") {
        return (
          <Text
            key={obj.id}
            x={obj.x}
            y={obj.y}
            text={obj.text}
            fontSize={32}
						fontStyle={'bold'}
						fontFamily={'AliveFont'}
            fill={obj.color}
            draggable
          />
        );
      } else if (obj.type === "sign") {
        return (
          <Rect
            key={obj.id}
            x={obj.x}
            y={obj.y}
            width={obj.width}
            height={obj.height}
            fill={obj.color}
            draggable
          />
        );
      }
      return null;
    });
  };

  return (
    <div>
      {/* Stage для рисования объектов */}
      <Stage width={1000} height={500}>
        <Layer>
          <Rect
            x={50}
            y={20}
            width={800}
            height={400}
            fill="white"
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
