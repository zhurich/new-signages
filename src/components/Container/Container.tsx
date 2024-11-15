import React, { FC, ReactNode } from "react";
import block from "bem-cn";
import "./Container.scss";

export interface Props {
  className?: string;
  style?: {};
  children?: ReactNode;
}

const b = block("container");

export const Container: FC<Props> = ({ className = "", style, children }) => (
  <div className={`${b()} ${className}`.trim()} style={style}>
    {children}
  </div>
);
