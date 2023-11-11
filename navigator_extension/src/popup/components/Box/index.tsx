import React, { PropsWithChildren } from "react";
import styles from "./box.module.css";
import { CustomizableComponent } from "../../models/default.components";
import { NavLink } from "react-router-dom";

interface iProps extends CustomizableComponent {
  children?: React.ReactNode;
  containerMode?: boolean;
  autoSize?: boolean;
  boxType?: "button" | "input" | "icon" | "navLink" | "";
  to?: string;
  id?: string;
  onClick?: React.FC;
  isActive?: React.FC;
  key?: any;
}

const Box = (props: iProps) => {
  const {
    children,
    boxType = "",
    className,
    containerMode,
    autoSize,
    id = '',
    style = {},
    to = "/",
    onClick = () => { }
  } = props;

  //Class builder
  let classBuilder = styles.box;
  if (!!className) classBuilder += ` ${className}`;
  if (!!containerMode) classBuilder += ` ${styles.isContainer}`;
  if (!!autoSize) classBuilder += ` ${styles.autoHeight}`;
  if (boxType === "icon") classBuilder += ` ${styles.isIcon}`;
  if (boxType === "navLink") classBuilder += ` ${styles.isNavLink}`;

  switch (boxType) {
    case "button":
      return <button id={id} style={style} className={classBuilder}>{children}</button>;
    case "input":
      return <input id={id} style={style} className={classBuilder} />;
    case "icon":
      return <div id={id} style={style} className={classBuilder}>{children}</div>;
    case "navLink":
      return <NavLink to={to} id={id} style={style} className={classBuilder} onClick={onClick}>{children}</NavLink>;
    default:
      return <div id={id} style={style} className={classBuilder}>{children}</div>;
  }
};

export default Box;
