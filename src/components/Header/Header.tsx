import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

export const Header: FC = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header__logo">AliveSigns Engineer Конструктор</div>
      <div className="header__nav">
        <a
          className="header__link"
          onClick={() => {
            navigate("/pointers");
          }}
        >
          Выйти
        </a>
      </div>
    </header>
  );
};
