import React, { useState, FC, useEffect, useMemo } from "react";
import block from "bem-cn";
import { MainLayout, Container } from "../../components";
import preliminaryIcon from "../../assets/icons/preliminary.jpg";
import directionSignIcon from "../../assets/icons/direction_sign.jpg";
import directionPointerIcon from "../../assets/icons/direction_pointer.jpg";
import objectNameIcon from "../../assets/icons/object_name.jpg";
import distancePointerIcon from "../../assets/icons/distance_pointer.jpg";
import kmSignIcon from "../../assets/icons/km_sign.jpg";
import routeNumberIcon from "../../assets/icons/route_number.jpg";
import "./PointersRegistryPage.scss";

const b = block("pointers-registry");

export const PointersRegistryPage: FC = () => {
  const [selectedPointerItem, setSelectedPointerItem] = useState<string>();

  const pointers = [
    {
      key: "preliminary",
      title: "Предварительный указатель направления",
      icon: preliminaryIcon,
    },
    {
      key: "direction_sign",
      title: "Указатель направлений",
      icon: directionSignIcon,
    },
    {
      key: "direction_pointer",
      title: "Указатель направления",
      icon: directionPointerIcon,
    },
    { key: "object_name", title: "Наименование объекта", icon: objectNameIcon },
    {
      key: "distance_pointer",
      title: "Указатель расстояний",
      icon: distancePointerIcon,
    },
    { key: "km_sign", title: "Километровый знак", icon: kmSignIcon },
    { key: "route_number", title: "Номер маршрута", icon: routeNumberIcon },
  ];

  return (
    <MainLayout title="Указатели">
      <Container className={b()}>
        <div className={b("content")}>
          <div className={b("pointers-list")}>
            {pointers?.map((pointer) => (
              <div
                className={b("pointer-item", {
                  active: selectedPointerItem === pointer?.key,
                })}
                onClick={() => setSelectedPointerItem(pointer?.key)}
              >
                <div className={b("pointer-icon")}>
                  <img src={pointer?.icon} />
                </div>
                <div className={b("pointer-title")}>{pointer?.title}</div>
              </div>
            ))}
          </div>
          <button className={b("pointers-button")}>
            Перейти к конструктору
          </button>
        </div>
      </Container>
    </MainLayout>
  );
};
