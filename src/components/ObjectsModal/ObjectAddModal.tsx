import React, { useState, FC, useEffect, useMemo } from "react";
import block from "bem-cn";
import Modal from "../Modal/Modal";
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
    {
      type: "arrow",
      key: "arrow-long",
      title: "Стрелка длинная",
      // icon: preliminaryIcon,
    },
    {
      type: "arrow",
      key: "arrow-middle",
      title: "Стрелка средняя",
      // icon: directionSignIcon,
    },
    {
      type: "arrow",
      key: "arrow-short",
      title: "Стрелка короткая",
      // icon: directionPointerIcon,
    },
    {
      type: "arrow",
      key: "arrow-curved-right",
      title: "Стрелка изогнутая вправо",
      // icon: objectNameIcon,
    },
    {
      type: "arrow",
      key: "arrow-curved-right-long",
      title: "Стрелка изогнутая вправо длинная",
      // icon: distancePointerIcon,
    },
    {
      type: "text",
      key: "text-white",
      title: "Текст белый",
      // icon: kmSignIcon
    },
    {
      type: "text",
      key: "text-black",
      title: "Текст черный",
      // icon: kmSignIcon
    },
    {
      type: "pic",
      key: "pic-1",
      title: "Пиктограмма 1",
      //  icon: routeNumberIcon
    },
    {
      type: "pic",
      key: "pic-2",
      title: "Пиктограмма 2",
      // icon: routeNumberIcon
    },
    {
      type: "pic",
      key: "pic-3",
      title: "Пиктограмма 3",
      //  icon: routeNumberIcon
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
        <button
          className={b("add-button")}
          onClick={() => {
            setObjects([
              ...objects,
              {
                type: selectedObjItem?.type,
                id: `${selectedObjItem?.type}-${objects.length}`,
                x: 100,
                y: 100,
                text: "Улица Берзарина",
                color: "black",
              },
            ]);
            setOpen(false);
          }}
        >
          Добавить
        </button>
      </div>
    </Modal>
  );
};
