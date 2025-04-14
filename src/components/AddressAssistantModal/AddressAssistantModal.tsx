import React, { FC, useState, Dispatch, SetStateAction } from "react";
import block from "bem-cn";
import { YMaps, Map, Placemark, SearchControl } from "@pbe/react-yandex-maps";
import Modal from "../Modal/Modal";
import { Button } from "../Button/Button";
import RightArrowIcon from "../../assets/icons/right-arrow.png";
import AiIcon from "../../assets/icons/ai.png";
import "./AddressAssistantModal.scss";

interface AddressAssistantModalProps {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onSubmit?: (data: any) => void;
}

const b = block("address-assistant-modal");

const defaultMapState = {
  center: [55.762655, 37.560376],
  zoom: 16,
};

export const AddressAssistantModal: FC<AddressAssistantModalProps> = ({
  isOpen,
  setOpen,
  onSubmit,
}) => {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState("55.762655, 37.560376");
  const [mapPosition, setMapPosition] = useState(defaultMapState.center);
  const [direction, setDirection] = useState("Улица 1905 года");
  const [selectedType, setSelectedType] = useState(
    "Указатель пред. направления"
  );

  const handleMapClick = (e: any) => {
    const coords = e.get("coords");
    setMapPosition(coords);
    setCoordinates(`${coords[0].toFixed(6)}, ${coords[1].toFixed(6)}`);
  };

  return (
    <Modal
      className={b()}
      setOpen={setOpen}
      title="Ассистент создания указателя по адресу"
      isOpen={isOpen}
    >
      <div className={b("content")}>
        <div className={b("section-left")}>
          <div className={b("section")}>
            <div className={b("section-title")}>Введите адрес:</div>
            <div className={b("section-content")}>
              <input
                type="text"
                className={b("input")}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Введите адрес.."
              />
            </div>
          </div>

          <div className={b("section")}>
            <div className={b("section-title")}>Место на карте:</div>
            <div className={b("section-content")}>
              <YMaps query={{ apikey: "5ed6cc84-6aca-456c-86b4-0730aeea7fce" }}>
                <Map
                  defaultState={defaultMapState}
                  width="100%"
                  height="300px"
                  onClick={handleMapClick}
                >
                  <SearchControl options={{ float: "right" }} />
                  <Placemark
                    geometry={mapPosition}
                    options={{
                      preset: "islands#redDotIcon",
                      draggable: true,
                    }}
                  />
                </Map>
              </YMaps>
            </div>
          </div>
        </div>

        <div className={b("section-right")}>
          <div className={b("section")}>
            <div className={b("section-title")}>Тип указателя:</div>
            <div className={b("section-content")}>
              <div className={b("dropdown")}>
                <div className={b("dropdown-value")}>{selectedType}</div>
                <div className={b("dropdown-arrow")}>▼</div>
              </div>
            </div>
          </div>

          <div className={b("section")}>
            <div className={b("section-title")}>Координаты установки:</div>
            <div className={b("section-content")}>
              <input
                type="text"
                className={b("input")}
                value={coordinates}
                onChange={(e) => setCoordinates(e.target.value)}
              />
            </div>
          </div>

          <div className={b("section")}>
            <div className={b("section-title")}>Указываемое направление:</div>
            <div className={b("section-content")}>
              <input
                type="text"
                className={b("input")}
                value={direction}
                onChange={(e) => setDirection(e.target.value)}
              />
            </div>
          </div>

          <div className={b("section")}>
            <div className={b("section-title")}>Предварительный результат:</div>
            <div className={b("section-content")}>
              <div className={b("preview")}>
                <div className={b("preview-arrow")}>↑</div>
                <div className={b("preview-content")}>
                  <div className={b("preview-text")}>{direction}</div>
                  <div className={b("preview-distance")}>5 км</div>
                </div>
              </div>
            </div>
          </div>
          <div className={b("action-buttons")}>
            <Button
              endIcon={{
                type: "image",
                content: AiIcon,
                width: 30,
                height: 30,
              }}
            >
              Создать
            </Button>
            <Button
              endIcon={{
                type: "image",
                content: RightArrowIcon,
                width: 30,
                height: 30,
              }}
            >
              Продолжить
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
