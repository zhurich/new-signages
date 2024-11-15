import React, { useState, FC } from "react";
import block from "bem-cn";
// import { Container, MainLayout } from "components";
// import { MainLayout, Container } from "@components";
import { MainLayout, Container } from "../../components";
import "./RoadSignsRegistryPage.scss";

const b = block("road-signs-registry");

export const RoadSignsRegistryPage: FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Предупреждающие");
  const [selectedSign, setSelectedSign] = useState<string | null>(null);

  const categories = [
    "Предупреждающие",
    "Приоритета",
    "Запрещающие",
    "Предписывающие",
    "Особых предписаний",
    "Информационные",
    "Сервиса",
    "Дополнительной информации",
  ];

  const signs = [
    {
      id: "1.1",
      name: "Железнодорожный переезд со шлагбаумом",
      category: "Предупреждающие",
    },
    {
      id: "1.2",
      name: "Железнодорожный переезд без шлагбаума",
      category: "Предупреждающие",
    },
    // Add more signs as needed
  ];
  return (
    <MainLayout title="Дорожные знаки">
      <div className={b("search-wrapper")}>
        <input
          type="text"
          placeholder="Искать знаки по номеру или названию..."
          className={b("search-input")}
        />
      </div>
      <Container className={b()}>
        <div className={b("content")}>
          <aside className={b("sidebar")}>
            <div className={b("categories")}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={b("category-button", {
                    active: selectedCategory === category,
                  })}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </aside>
          <main className={b("main-content")}>
            <table className={b("signs-table")}>
              <tbody>
                {signs
                  .filter((sign) => sign.category === selectedCategory)
                  .map((sign) => (
                    <tr
                      key={sign.id}
                      className={b("sign-row", {
                        active: selectedSign === sign.id,
                      })}
                      onClick={() => setSelectedSign(sign.id)}
                    >
                      <td className={b("sign-icon")}>🚩</td>
                      <td className={b("sign-id")}>{sign.id}</td>
                      <td className={b("sign-name")}>{sign.name}</td>
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
