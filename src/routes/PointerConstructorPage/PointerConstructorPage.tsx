import React, { useState, FC, useEffect, useMemo, useRef } from "react";
import { Stage, Layer, Image, Rect, Group } from "react-konva";
import { v4 as uuid } from "uuid";
import useImage from "use-image";
import { useNavigate } from "react-router-dom";
import block from "bem-cn";
import { MainLayout, Container } from "../../components";
import { PreliminaryPointer } from "../../components/ConstructorTemplates/PreliminaryPointer";
import { ObjectAddModal } from "../../components/ObjectsModal/ObjectAddModal";
import { AddressAssistantModal } from "../../components/AddressAssistantModal/AddressAssistantModal";
import { Button } from "../../components";
import { ReactComponent as Trash } from "../../assets/icons/trash.svg";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import RightArrowIcon from "../../assets/icons/right-arrow.png";
import SaveIcon from "../../assets/icons/save.png";
import UploadIcon from "../../assets/icons/upload.png";
import AiIcon from "../../assets/icons/ai.png";
import HistoryLeftIcon from "../../assets/icons/history-left.png";
import HistoryRightIcon from "../../assets/icons/history-right.png";
import {
  PICTOGRAMS,
  ROAD_ARROWS,
  ROAD_STRIPS,
  SVG_ROAD_ARROWS,
  TRAFFIC_SIGNS,
} from "./constants";
import "./PointerConstructorPage.scss";
import { useSelector } from "react-redux";
import { title } from "process";

const b = block("pointer-constructor");

const FILM_TYPES = [
  { id: "type-a", title: "Тип А" },
  { id: "type-b", title: "Тип Б" },
  { id: "type-c", title: "Тип В" },
];

export const PointerConstructorPage: FC = () => {
  const navigate = useNavigate();
  const [pointerParams, setPointerParams] = useState({
    height: 450,
    width: 700,
    bgColor: "white",
    borderRadius: 15,
    filmType: FILM_TYPES[0].id,
  });
  const [visualParams, setVisualParams] = useState({
    height: 428,
    width: 615,
  });
  const [isObjectAddModalOpen, setIsObjectAddModalOpen] = useState(false);
  const { pointerKey } = useSelector((state: any) => state.pointerConstructor);
  const [objects, setObjects] = useState<any>([]);
  const [visualOpacity, setVisualOpacity] = useState<number>(0.5);
  console.log(objects);
  const [background] = useImage(
    "https://sun9-53.userapi.com/impg/rM7AdFHDaOEI3gkCnbNe3J2wsUoybcRBQD2rQQ/LM6Y8ZjK22c.jpg?size=1015x777&quality=95&sign=530862bfddf28d0bf09a874f536ec4f8&type=album"
  );

  const stageRef: any = useRef(null);
  const [exportedImage, setExportedImage] = useState("");
  const [canvasImage] = useImage(exportedImage);
  const handleExport = () => {
    if (stageRef.current) {
      const dataURL = stageRef?.current?.toDataURL();
      setExportedImage(dataURL);
    }
  };

  const distances = ["5 км", "500 м"]; // Заготовка для массива расстояний

  const [isFilmTypeOpen, setIsFilmTypeOpen] = useState(false);
  const [isAddressAssistantOpen, setIsAddressAssistantOpen] = useState(false);

  const handleFilmTypeSelect = (filmType: string) => {
    setPointerParams((prev) => ({
      ...prev,
      filmType,
    }));
    setIsFilmTypeOpen(false);
  };

  return (
    <MainLayout title="Указатели">
      <ObjectAddModal
        isOpen={isObjectAddModalOpen}
        setOpen={setIsObjectAddModalOpen}
        objects={objects}
        setObjects={setObjects}
      />
      <AddressAssistantModal
        isOpen={isAddressAssistantOpen}
        setOpen={setIsAddressAssistantOpen}
        onSubmit={(data) => {
          // Здесь будет логика создания указателя на основе данных из ассистента
          console.log(data);
        }}
      />
      <div className={b()}>
        <div className={b("content")}>
          <div className={b("sidebar")}>
            <div className={b("sidebar-buttons")}>
              <button className={b("sidebar-button")} />
              <button className={b("sidebar-button")} />
              <button className={b("sidebar-button")} />
              <button className={b("sidebar-button")} />
              <button className={b("sidebar-button")} />
              <button className={b("sidebar-button")} />
            </div>
            <button className={b("sidebar-add")}>
              <Plus />
            </button>
          </div>
          <div className={b("constructor")}>
            <div className={b("constructor-canvas")}>
              <div className={b("params-wrapper")}>
                <h1 className={b("params-title")}>Проектирование указателя</h1>
                <Button
                  endIcon={{
                    type: "image",
                    content: RightArrowIcon,
                    width: 45,
                    height: 30,
                  }}
                >
                  Оформить заказ
                </Button>
              </div>

              <div className={b("buttons-wrapper")}>
                <div className={b("history-buttons")}>
                  <button className={b("history-button")}>
                    <img
                      src={HistoryLeftIcon}
                      className={b("history-button-image")}
                      width={40}
                      height={40}
                    />
                  </button>
                  <button className={b("history-button")}>
                    <img
                      src={HistoryRightIcon}
                      className={b("history-button-image")}
                      width={40}
                      height={40}
                    />
                  </button>
                </div>
                <div className={b("action-buttons")}>
                  <Button
                    endIcon={{
                      type: "image",
                      content: AiIcon,
                      width: 30,
                      height: 30,
                    }}
                    onClick={() => setIsAddressAssistantOpen(true)}
                  >
                    По адресу
                  </Button>
                  <Button
                    endIcon={{
                      type: "image",
                      content: SaveIcon,
                      width: 30,
                      height: 30,
                    }}
                  >
                    Сохранить
                  </Button>
                  <Button
                    endIcon={{
                      type: "image",
                      content: UploadIcon,
                      width: 30,
                      height: 30,
                    }}
                  >
                    Выгрузить
                  </Button>
                </div>
              </div>

              <PreliminaryPointer
                stageRef={stageRef}
                objects={objects}
                setObjects={setObjects}
                {...pointerParams}
              />
              {/* <Button onClick={() => setIsObjectAddModalOpen(true)}>
                Добавить объект
              </Button> */}
            </div>
            <div className={b("constructor-visualize")}>
              <h1 className={b("legend-title")}>Визуализация</h1>
              <div className={b("visual-buttons")}>
                <Button onClick={handleExport}>Визуализировать</Button>
                <input
                  style={{ marginLeft: "16px" }}
                  type="range"
                  min="0"
                  step="0.01"
                  max="1"
                  value={visualOpacity}
                  onChange={(e) => setVisualOpacity(Number(e?.target?.value))}
                />
              </div>
              <div className="vis">
                <Stage
                  width={visualParams?.width + 20}
                  height={visualParams?.height + 20}
                >
                  <Layer>
                    <Group
                      x={10}
                      y={10}
                      clipWidth={visualParams?.width}
                      clipHeight={visualParams?.height}
                      clipFunc={(ctx) => {
                        const width = visualParams?.width;
                        const height = visualParams?.height;
                        const radius = 10;

                        ctx.beginPath();
                        ctx.moveTo(radius, 0);
                        ctx.lineTo(width - radius, 0);
                        ctx.quadraticCurveTo(width, 0, width, radius);
                        ctx.lineTo(width, height - radius);
                        ctx.quadraticCurveTo(
                          width,
                          height,
                          width - radius,
                          height
                        );
                        ctx.lineTo(radius, height);
                        ctx.quadraticCurveTo(0, height, 0, height - radius);
                        ctx.lineTo(0, radius);
                        ctx.quadraticCurveTo(0, 0, radius, 0);
                        ctx.closePath();
                      }}
                    >
                      <Image
                        image={background}
                        width={visualParams?.width}
                        height={visualParams?.height}
                        x={0}
                        y={0}
                      />
                    </Group>
                    <Rect
                      x={10}
                      y={10}
                      width={visualParams?.width}
                      height={visualParams?.height}
                      stroke="black"
                      strokeWidth={3}
                      cornerRadius={10}
                    />
                    {canvasImage && (
                      <Image
                        draggable
                        image={canvasImage}
                        x={150}
                        y={10}
                        opacity={visualOpacity}
                        width={pointerParams?.width / 2}
                        height={pointerParams?.height / 2}
                      />
                    )}
                  </Layer>
                </Stage>
              </div>
            </div>
            <div className={b("constructor-params")}>
              <h1 className={b("params-title")}>Параметры</h1>
              <div className={b("param-items")}>
                <div className={b("param-items-row")}>
                  <div className={b("param-item")}>
                    <div className={b("param-title")}>Размер:</div>
                    <div className={b("param-value")}>
                      <input
                        className={b("param-value-size")}
                        type="text"
                        value={pointerParams?.height}
                        onChange={(e) => {
                          setPointerParams((state: any) => ({
                            ...state,
                            height: e?.target?.value,
                          }));
                        }}
                      />
                      X&nbsp;
                      <input
                        className={b("param-value-size")}
                        type="text"
                        value={pointerParams?.width}
                        onChange={(e) => {
                          setPointerParams((state: any) => ({
                            ...state,
                            width: e?.target?.value,
                          }));
                        }}
                      />
                    </div>
                  </div>
                  <div className={b("param-item")}>
                    <div className={b("param-title")} style={{ width: "10em" }}>
                      Тип пленки:
                    </div>
                    <div className={b("param-value")}>
                      <div className={b("film-type-selector")}>
                        <Button
                          onClick={() => setIsFilmTypeOpen(!isFilmTypeOpen)}
                        >
                          {FILM_TYPES.find(
                            (type) => type.id === pointerParams.filmType
                          )?.title || "Выберите тип"}
                        </Button>
                        {isFilmTypeOpen && (
                          <div className={b("film-type-dropdown")}>
                            {FILM_TYPES.map((type) => (
                              <button
                                key={type.id}
                                className={b("film-type-option", {
                                  selected: type.id === pointerParams.filmType,
                                })}
                                onClick={() => handleFilmTypeSelect(type.id)}
                              >
                                {type.title}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={b("param-items-row")}>
                  <div className={b("param-item")}>
                    <div className={b("param-title")}>Цвет:</div>
                    <div className={b("param-value")}>
                      <input
                        type="color"
                        value={pointerParams?.bgColor}
                        onChange={(e) => {
                          setPointerParams((state: any) => ({
                            ...state,
                            bgColor: e?.target?.value,
                          }));
                        }}
                      />
                    </div>
                  </div>
                  <div className={b("param-item")}>
                    <div className={b("param-title")} style={{ width: "10em" }}>
                      Скругление углов:
                    </div>
                    <div className={b("param-value")}>
                      <input
                        className={b("param-value-size")}
                        type="text"
                        value={pointerParams?.borderRadius}
                        onChange={(e) => {
                          console.log(e?.target?.value);
                          setPointerParams((state: any) => ({
                            ...state,
                            borderRadius: e?.target?.value,
                          }));
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <h1 className={b("params-title")}>Вставка</h1>
              <div className={b("insert")}>
                <div className={b("insert-actions")}>
                  <Button onClick={() => setIsObjectAddModalOpen(true)}>
                    Добавить объект
                  </Button>
                  {/* <button
                    className={b("insert-item")}
                    onClick={() => {
                      setObjects((state: any) => [
                        ...state,
                        {
                          id: `${uuid()}`,
                          type: "road-strip-3",
                        },
                      ]);
                    }}
                  ></button> */}
                </div>

                <div className={b("insert-section")}>
                  <div className={b("insert-title")}>Стрелки</div>
                  <div className={b("insert-grid")}>
                    {ROAD_ARROWS.map((arrow) => (
                      <button
                        key={arrow.key}
                        className={b("insert-item")}
                        title={arrow.title}
                        onClick={() => {
                          setObjects((state: any) => [
                            ...state,
                            {
                              id: `${arrow.id}-${uuid()}`,
                              type: "arrow",
                              title: arrow.title,
                              data: SVG_ROAD_ARROWS[arrow.key],
                              color: "black",
                              x: 300,
                              y: 200,
                            },
                          ]);
                        }}
                      >
                        <arrow.image
                          className={b("insert-item-image")}
                          width={32}
                          height={32}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className={b("insert-section")}>
                  <div className={b("insert-title")}>Полосы</div>
                  <div className={b("insert-grid")}>
                    {ROAD_STRIPS.map((strip) => (
                      <button
                        className={b("insert-item")}
                        title={strip.title}
                        onClick={() => {
                          setObjects((state: any) => [
                            ...state,
                            {
                              id: `${strip.id}-${uuid()}`,
                              type: "strip",
                              title: strip.title,
                              imgUrl: strip.imgUrl,
                              color: "black",
                              x: 300,
                              y: 200,
                            },
                          ]);
                        }}
                      >
                        <img
                          src={strip.image}
                          alt={strip.title}
                          className={b("insert-item-image")}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div className={b("insert-section")}>
                  <div className={b("insert-title")}>Текст</div>
                  <div className={b("insert-grid")}>
                    <button
                      key={`text`}
                      className={b("insert-item", { outlined: true })}
                      onClick={() => {
                        setObjects((state: any) => [
                          ...state,
                          {
                            id: `text-${uuid()}`,
                            type: "text",
                            text: "Улица Берзарина",
                            color: "black",
                            fontSize: 40,
                            x: 100,
                            y: 100,
                          },
                        ]);
                      }}
                    >
                      Текст
                    </button>
                    {distances.map((distance, index) => (
                      <button
                        key={`distance-${index}`}
                        className={b("insert-item", { outlined: true })}
                      >
                        {distance}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={b("insert-section")}>
                  <div className={b("insert-title")}>Дорожные знаки</div>
                  <div className={b("insert-grid")}>
                    {TRAFFIC_SIGNS.map((sign) => (
                      <button
                        className={b("insert-item")}
                        title={sign.title}
                        onClick={() => {
                          setObjects((state: any) => [
                            ...state,
                            {
                              id: `${sign.id}-${uuid()}`,
                              type: "strip",
                              title: sign.title,
                              imgUrl: sign.imgUrl,
                              color: "black",
                              x: 300,
                              y: 200,
                            },
                          ]);
                        }}
                      >
                        <img
                          src={sign.image}
                          alt={sign.title}
                          className={b("insert-item-image")}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className={b("insert-section")}>
                  <div className={b("insert-title")}>Пиктограммы</div>
                  <div className={b("insert-grid")}>
                    {PICTOGRAMS.map((pictogram) => (
                      <button
                        className={b("insert-item")}
                        title={pictogram.title}
                        onClick={() => {
                          setObjects((state: any) => [
                            ...state,
                            {
                              id: `${pictogram.id}-${uuid()}`,
                              type: "strip",
                              title: pictogram.title,
                              imgUrl: pictogram.imgUrl,
                              color: "black",
                              x: 300,
                              y: 200,
                            },
                          ]);
                        }}
                      >
                        <img
                          src={pictogram.image}
                          alt={pictogram.title}
                          className={b("insert-item-image")}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className={b("constructor-legend")}>
              <h1 className={b("legend-title")}>Элементы на указателе</h1>
              {objects?.map((signItem: any) => (
                <div className={b("legend-item")}>
                  {signItem?.type === "text" ? (
                    <div className={b("legend-value")}>
                      <input
                        className={b("legend-value-text")}
                        type="text"
                        value={signItem?.text}
                        onChange={(e) => {
                          const elementIndex = objects.findIndex(
                            (item: any) => item?.id === signItem?.id
                          );
                          const data = [
                            ...objects?.slice(0, elementIndex),
                            {
                              ...signItem,
                              text: e?.target?.value,
                            },
                            ...objects?.slice(elementIndex + 1),
                          ];
                          setObjects(data);
                        }}
                      />
                    </div>
                  ) : (
                    <div className={b("legend-item-title")}>
                      {signItem?.title}
                    </div>
                  )}
                  {(signItem?.type === "text" ||
                    signItem?.type === "arrow-s" ||
                    signItem?.type === "arrow-m" ||
                    signItem?.type === "arrow-l" ||
                    signItem?.type === "arrow-curved-right") && (
                    <div className={b("param-value")}>
                      <input
                        className={b("legend-value-color")}
                        type="color"
                        value={signItem?.color}
                        onChange={(e) => {
                          const elementIndex = objects.findIndex(
                            (item: any) => item?.id === signItem?.id
                          );
                          const data = [
                            ...objects?.slice(0, elementIndex),
                            {
                              ...signItem,
                              color: e?.target?.value,
                            },
                            ...objects?.slice(elementIndex + 1),
                          ];
                          setObjects(data);
                        }}
                      />
                    </div>
                  )}
                  {signItem?.type === "text" && (
                    <div className={b("param-value")}>
                      <div className={b("legend-value-title")}>FZ:</div>
                      <input
                        className={b("param-value-fz")}
                        type="text"
                        value={signItem?.fontSize}
                        onChange={(e) => {
                          const elementIndex = objects.findIndex(
                            (item: any) => item?.id === signItem?.id
                          );
                          const data = [
                            ...objects?.slice(0, elementIndex),
                            {
                              ...signItem,
                              fontSize: e?.target?.value,
                            },
                            ...objects?.slice(elementIndex + 1),
                          ];
                          setObjects(data);
                        }}
                      />
                    </div>
                  )}
                  <Trash
                    className={b("param-delete")}
                    onClick={() => {
                      const elementIndex = objects.findIndex(
                        (item: any) => item?.id === signItem?.id
                      );
                      const data = [
                        ...objects?.slice(0, elementIndex),
                        ...objects?.slice(elementIndex + 1),
                      ];
                      setObjects(data);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
