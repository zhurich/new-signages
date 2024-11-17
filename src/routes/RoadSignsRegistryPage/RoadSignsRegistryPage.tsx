import React, { useState, FC, useEffect, useMemo } from "react";
import block from "bem-cn";
// import { Container, MainLayout } from "components";
// import { MainLayout, Container } from "@components";
import { MainLayout, Container } from "../../components";
import { ALL_SIGNS, CATEGORIES } from "./constants";
import "./RoadSignsRegistryPage.scss";

const b = block("road-signs-registry");

export const RoadSignsRegistryPage: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("warning");
  const [selectedSign, setSelectedSign] = useState<string | null>(null);
  const [searchInput, setSearchInput] = useState("");

  const ALL_SIGNS_ARRAY = useMemo(
    () => Object.values(ALL_SIGNS)?.flat(),
    [ALL_SIGNS]
  );

  return (
    <MainLayout title="Дорожные знаки">
      <div className={b("search-wrapper")}>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Искать знаки по номеру или названию..."
          className={b("search-input")}
        />
      </div>
      <Container className={b()}>
        <div className={b("content")}>
          <aside className={b("sidebar")}>
            <div className={b("categories")}>
              {CATEGORIES.map((category) => (
                <button
                  key={category?.key}
                  className={b("category-button", {
                    active: selectedCategory === category?.key,
                  })}
                  onClick={() => setSelectedCategory(category?.key)}
                >
                  {category?.title}
                </button>
              ))}
            </div>
          </aside>
          <main className={b("main-content")}>
            <table className={b("signs-table")}>
              <tbody>
                {(searchInput?.length > 0
                  ? ALL_SIGNS_ARRAY?.filter((signItem) =>
                      signItem?.title
                        ?.toLowerCase()
                        ?.includes(searchInput.toLowerCase())
                    )
                  : ALL_SIGNS?.[selectedCategory]
                )?.map((sign) => (
                  <tr
                    key={sign?.code}
                    className={b("sign-row", {
                      active: selectedSign === sign?.code,
                    })}
                    onClick={() => setSelectedSign(sign?.code)}
                  >
                    <td className={b("sign-icon")}>🚩</td>
                    <td className={b("sign-id")}>{sign?.code}</td>
                    <td className={b("sign-name")}>{sign?.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </main>
          <section className={b("details-section")}>
            {selectedSign ? (
              <>
                <h2>Железнодорожный переезд без шлагбаума</h2>
                <img
                  src="/path/to/sign-image.png"
                  alt="Железнодорожный переезд без шлагбаума"
                />
                <div className={b("buttons")}>
                  <button className={b("button")}>Описание</button>
                  <button className={b("button")}>Редактировать</button>
                  <button className={b("button")}>Увеличить</button>
                  <button className={b("button")}>В избранное</button>
                  <button className={b("button")}>
                    Скачать файл для производства
                  </button>
                </div>
              </>
            ) : (
              <p>Выберите знак для просмотра деталей</p>
            )}
          </section>
        </div>
      </Container>
    </MainLayout>
  );
};
