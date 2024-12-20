import React, { useState, FC, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import block from "bem-cn";
import { MainLayout, Container } from "../../components";
import { PreliminaryPointer } from "../../components/ConstructorTemplates/PreliminaryPointer";
import { ObjectAddModal } from "../../components/ObjectsModal/ObjectAddModal";
import { Button } from "../../components";
import { ReactComponent as Trash } from "../../assets/icons/trash.svg";
import "./PointerConstructorPage.scss";
import { useSelector } from "react-redux";

const b = block("pointer-constructor");

export const PointerConstructorPage: FC = () => {
  const navigate = useNavigate();
  const [pointerParams, setPointerParams] = useState({
    height: 400,
    width: 800,
    bgColor: "white",
  });
  const [isObjectAddModalOpen, setIsObjectAddModalOpen] = useState(false);
  const { pointerKey } = useSelector((state: any) => state.pointerConstructor);
  const [objects, setObjects] = useState<any>([]);
  console.log(objects);

  return (
    <MainLayout title="Указатели">
      <ObjectAddModal
        isOpen={isObjectAddModalOpen}
        setOpen={setIsObjectAddModalOpen}
        objects={objects}
        setObjects={setObjects}
      />
      <Container className={b()}>
        <div className={b("content")}>
          <div className={b("buttons-wrapper")}>
            <Button onClick={() => navigate("/pointers")}>
              К выбору знака
            </Button>
            <Button>Сохранить</Button>
          </div>
          <div className={b("constructor")}>
            <div className={b("constructor-canvas")}>
              <PreliminaryPointer
                objects={objects}
                setObjects={setObjects}
                {...pointerParams}
              />
              <Button onClick={() => setIsObjectAddModalOpen(true)}>
                Добавить объект
              </Button>
            </div>
            <div className={b("constructor-menu")}>
              <div className={b("params")}>
                <h1 className={b("params-title")}>Параметры</h1>
                <div className={b("param-item")}>
                  <div className={b("param-title")}>Цвет указателя</div>
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
                  <div className={b("param-title")}>Размер</div>
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
              </div>
              <div className={b("legend")}>
                <h1 className={b("legend-title")}>Легенда</h1>
                {objects?.map((signItem: any) => (
                  <div className={b("param-item")}>
                    {signItem?.type === "text" ? (
                      <div className={b("param-value")}>
                        <input
                          className={b("param-value-text")}
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
                      <div className={b("param-title")}>{signItem?.title}</div>
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
                    {(signItem?.type === "text" ||
                      signItem?.type === "arrow-s" ||
                      signItem?.type === "arrow-m" ||
                      signItem?.type === "arrow-l" ||
                      signItem?.type === "arrow-curved-right") && (
                      <div className={b("param-value")}>
                        <input
                          className={b("param-value-color")}
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
                        <div className={b("param-value-title")}>FZ:</div>
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};
