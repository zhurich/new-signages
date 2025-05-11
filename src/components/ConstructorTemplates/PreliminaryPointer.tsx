import React, { useState, FC, useEffect, useMemo, useRef } from "react";
import Konva from "konva";
import block from "bem-cn";
import { Stage, Layer, Text, Rect, Path, Image } from "react-konva";
import { ResizableArrowPath } from "./ResizableArrowPath";
import RoadStrip3 from "../../assets/icons/road-strips/RoadStrip3.png";
import useImage from "use-image";
import { ResizableImage } from "./ResizableImage";

const b = block("pointer-constructor");

export const PreliminaryPointer = (pointerParams: any) => {
  const {
    height,
    width,
    bgColor,
    objects,
    setObjects,
    stageRef,
    borderRadius,
  } = pointerParams;
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleStageClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
    const stage = e.target.getStage();
    const clickedOnEmpty =
      e.target === stage || e.target === stage?.findOne("Rect");

    if (clickedOnEmpty) {
      setSelectedId(null);
    }
  };

  const handleTransform = (newProps: any) => {
    const elementIndex = objects.findIndex(
      (item: any) => item.id === newProps.id
    );
    if (elementIndex !== -1) {
      const updatedObjects = [
        ...objects.slice(0, elementIndex),
        newProps,
        ...objects.slice(elementIndex + 1),
      ];
      setObjects(updatedObjects);
    }
  };

  const [image] = useImage(
    "https://psv4.userapi.com/s/v1/d/krg9kAuHl1Xfyn1uYtUGkF2sJ8X3GsdCgO5Yw8yCM3w0UDLTkPmwuFy7xg5xhTIPYYBbaiMp7oWwcjPJDTlisk_yC9_9kBnxfFwdumolTrM5podTPCegeQ/RoadStrip3.svg"
  );

  console.log(image);

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
        obj.type === "arrow-l" ||
        obj.type === "arrow"
      ) {
        return (
          <ResizableArrowPath
            key={obj.id}
            obj={obj}
            pathData={obj.data}
            onDelete={() => {
              setObjects((prev: any) =>
                prev.filter((item: any) => item.id !== obj.id)
              );
            }}
            onDeselect={() => setSelectedId(null)}
            onSelect={() => setSelectedId(obj.id)}
            isSelected={selectedId === obj.id}
            onTransform={handleTransform}
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
      } else if (obj.type === "strip") {
        return (
          <ResizableImage
            key={obj.id}
            imageUrl={obj.imgUrl}
            onDelete={() => {
              setObjects((prev: any) =>
                prev.filter((item: any) => item.id !== obj.id)
              );
            }}
            // obj={{
            //   x: 100,
            //   y: 100,
            //   scaleX: 1,
            //   scaleY: 1,
            //   rotation: 0,
            // }}
            onDeselect={() => setSelectedId(null)}
            onSelect={() => setSelectedId(obj.id)}
            isSelected={selectedId === obj.id}
            onTransform={handleTransform}
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
      <Stage
        ref={stageRef}
        width={width * 1.05}
        height={height * 1.05}
        onClick={handleStageClick}
        onTap={handleStageClick}
      >
        <Layer>
          <Rect
            x={10}
            y={10}
            height={height}
            width={width}
            fill={bgColor}
            stroke="black"
            strokeWidth={3}
            cornerRadius={borderRadius}
          />
          {renderObjects()}
        </Layer>
      </Stage>
    </div>
  );
};
