import React, { FC, ReactNode, useEffect } from "react";
import block from "bem-cn";
import { useNavigate } from "react-router-dom";

// import { Sidebar } from '@components';
import { Header } from "../";

import "./MainLayout.scss";

interface Props {
  title: string;
  description?: string;
  footer?: ReactNode;
  children?: ReactNode;
}

const b = block("main-layout");

export const MainLayout: FC<Props> = ({
  title,
  description = "",
  footer,
  children,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = title;

    const selector = 'meta[name="description"]';
    const meta = document.querySelector<HTMLMetaElement>(selector);
    if (meta) {
      meta.content = description;
    }
  }, [title, description]);

  return (
    <div className={b()}>
      <Header
      // handleClickLogo={() => navigate(Path.MainPage)}
      />
      <main className={b("main")}>
        <div className={b("content")}>{children}</div>
      </main>
      {footer && <footer className={b("footer")}>{footer}</footer>}
    </div>
  );
};
