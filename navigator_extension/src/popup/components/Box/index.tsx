import React, { PropsWithChildren } from "react";
import styles from "./box.module.css";
import { CustomizableComponent } from "../../models/default.components";

interface iProps extends CustomizableComponent {
  children?: React.ReactNode;
  containerMode?: boolean;
  boxType?: "button" | "input" | "icon" | "";
}

const Box: PropsWithChildren<iProps> = (props: iProps) => {
  const { children, boxType = "", className, containerMode } = props;

  //Class builder
  let classBuilder = styles.box;
  if (!!className) classBuilder += ` ${className}`;
  if (!!containerMode) classBuilder += ` ${styles.isContainer}`;
  if (boxType === "icon") classBuilder += ` ${styles.isIcon}`;

  switch (boxType) {
    case "button":
      return <button className={classBuilder}>{children}</button>;
    case "input":
      return <input className={classBuilder} />;
    case "icon":
      return <div className={classBuilder}>{children}</div>;
    default:
      return <div className={classBuilder}>{children}</div>;
  }
};

export default Box;
