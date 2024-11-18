import React, { useState, FC, useEffect, useMemo } from "react";
import block from "bem-cn";
import { MainLayout, Container } from "../../components";
import { PreliminaryPointer } from "../../components/ConstructorTemplates/PreliminaryPointer";
import { ObjectAddModal } from "../../components/ObjectsModal/ObjectAddModal";
import "./PointerConstructorPage.scss";
import { useSelector } from "react-redux";

const b = block("pointer-constructor");

export const PointerConstructorPage: FC = () => {
  const [selectedPointerItem, setSelectedPointerItem] = useState<string>();
  const [isObjectAddModalOpen, setIsObjectAddModalOpen] = useState(false);
  const { pointerKey } = useSelector((state: any) => state.pointerConstructor);
  const [objects, setObjects] = useState<any>([]);
  console.log(pointerKey);

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
          <div className="constructor-section">
            <PreliminaryPointer objects={objects} setObjects={setObjects} />
            <button
              className={b("add-object-button")}
              onClick={() => setIsObjectAddModalOpen(true)}
            >
              Добавить объект
            </button>
          </div>
          <div className="constructor-menu"></div>
        </div>
      </Container>
    </MainLayout>
  );
};
