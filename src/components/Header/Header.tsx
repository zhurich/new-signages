import React, { FC } from "react";
import "./Header.scss";

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__logo">AliveSigns Engineer Конструктор</div>
      <div className="header__nav">
        <a href="/exit" className="header__link">
          Выйти из конструктора
        </a>
      </div>
    </header>
  );
};
