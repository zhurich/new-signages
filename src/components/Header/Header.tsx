import React, { FC } from "react";
import "./Header.scss";

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__logo">РОСДОРЗНАК</div>
      <nav className="header__nav">
        <a href="/support" className="header__link">
          Поддержка
        </a>
        <a href="/profile" className="header__link">
          Профиль
        </a>
        <a href="/license" className="header__link">
          Лицензия
        </a>
        <a href="/logout" className="header__link">
          Выйти
        </a>
      </nav>
    </header>
  );
};
