import React, { useState, FC, useEffect, useMemo } from "react";
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
  const [selectedPointerItem, setSelectedPointerItem] = useState<string>();
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
            <Button>К выбору знака</Button>
            <Button>Сохранить</Button>
          </div>
          <div className={b("constructor")}>
            <div className={b("constructor-canvas")}>
              <PreliminaryPointer objects={objects} setObjects={setObjects} />
              <Button onClick={() => setIsObjectAddModalOpen(true)}>
                Добавить объект
              </Button>
            </div>
            <div className={b("constructor-menu")}>
              <div className={b("params")}>
                <h1 className={b("params-title")}>Параметры</h1>
                <div className={b("param-item")}>
                  <div className={b("param-title")}>Цвет указателя</div>
                  <div className={b("param-value")}></div>
                </div>
                <div className={b("param-item")}>
                  <div className={b("param-title")}>Размер</div>
                  <div className={b("param-value")}></div>
                </div>
              </div>
              <div className={b("legend")}>
                <h1 className={b("legend-title")}>Легенда</h1>
                {objects?.map((signItem: any) => (
                  <div className={b("param-item")}>
                    {signItem?.type === "text" ? (
                      <div className={b("param-value")}>
                        <input
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
