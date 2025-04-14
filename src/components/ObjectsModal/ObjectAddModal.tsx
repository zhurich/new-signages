import React, { useState, FC, useEffect, useMemo } from "react";
import { v4 as uuid } from "uuid";
import block from "bem-cn";
import Modal from "../Modal/Modal";
import { Button } from "../";
import { SVG_OBJECTS_DATA } from "./constants";
import "./ObjectAddModal.scss";

const b = block("object-add-modal");

export const ObjectAddModal = ({
  setOpen,
  isOpen,
  objects,
  setObjects,
}: any) => {
  const [selectedObjItem, setSelectedObjItem] = useState<any>();

  const objectsList = [
    // {
    //   type: "arrow-l",
    //   key: "arrow-l",
    //   title: "Стрелка длинная",
    //   // icon: preliminaryIcon,
    // },
    // {
    //   type: "arrow-m",
    //   key: "arrow-m",
    //   title: "Стрелка средняя",
    //   // icon: directionSignIcon,
    // },
    // {
    //   type: "arrow-s",
    //   key: "arrow-short",
    //   title: "Стрелка короткая",
    //   // icon: directionPointerIcon,
    // },
    // {
    //   type: "arrow-curved-right",
    //   key: "arrow-curved-right",
    //   title: "Стрелка изогнутая вправо",
    //   // icon: objectNameIcon,
    // },
    // {
    //   type: "arrow",
    //   key: "arrow-curved-right-long",
    //   title: "Стрелка изогнутая вправо длинная",
    //   disabled: true,
    //   // icon: distancePointerIcon,
    // },
    {
      type: "text",
      key: "text-black",
      title: "Текст черный",
      // icon: kmSignIcon
    },
  ];

  return (
    <Modal
      className={b()}
      setOpen={setOpen}
      title="Добавление объекта на знак"
      isOpen={isOpen}
    >
      <div className={b("objects-list")}>
        {objectsList?.map((obj) => (
          <div
            className={b("object-item", {
              active: selectedObjItem?.key === obj?.key,
              // disabled: obj?.disabled,
            })}
            onClick={() => setSelectedObjItem(obj)}
          >
            <div className={b("object-icon")}>
              {/* <img src={pointer?.icon} /> */}
            </div>
            <div className={b("object-title")}>{obj?.title}</div>
          </div>
        ))}
      </div>
      <div className={b("button-wrapper")}>
        <Button
          onClick={() => {
            let newObject: any = {
              type: selectedObjItem?.type,
              id: `${selectedObjItem?.type}-${uuid()}`,
            };
            if (selectedObjItem?.type === "text") {
              newObject = {
                ...newObject,
                text: "Улица Берзарина",
                color: "black",
                fontSize: 40,
                x: 100,
                y: 100,
              };
            } else if (selectedObjItem?.type === "arrow-s") {
              newObject = {
                ...newObject,
                data: SVG_OBJECTS_DATA?.[selectedObjItem?.type],
                color: "black",
                title: "Стрелка маленькая",
                x: 300,
                y: 200,
              };
            } else if (selectedObjItem?.type === "arrow-m") {
              newObject = {
                ...newObject,
                data: SVG_OBJECTS_DATA?.[selectedObjItem?.type],
                color: "black",
                title: "Стрелка средняя",
                x: 300,
                y: 300,
              };
            } else if (selectedObjItem?.type === "arrow-l") {
              newObject = {
                ...newObject,
                data: SVG_OBJECTS_DATA?.[selectedObjItem?.type],
                color: "black",
                title: "Стрелка длинная",
                x: 300,
                y: 400,
              };
            } else if (selectedObjItem?.type === "arrow-curved-right") {
              newObject = {
                ...newObject,
                data: SVG_OBJECTS_DATA?.[selectedObjItem?.type],
                color: "black",
                title: "Стрелка изогнутая вправо",
                x: 300,
                y: 200,
              };
            }
            setObjects((state: any) => [...state, newObject]);
            setOpen(false);
          }}
        >
          Добавить
        </Button>
      </div>
    </Modal>
  );
};
