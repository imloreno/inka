import React, { useState, useRef } from "react";
import styles from "../menu.module.css";

const initialState = {
  picked: null,
  width: 0,
  left: 0,
};

const useMenu = () => {
  const [{ picked, width, left }, setPicked] = useState(initialState);

  // Making reference to the first item in the menu
  const container = useRef(null);

  // Class builder
  const classBuilder = ({ isActive }) => {
    if (picked === null) {
      const left =
        container.current.getBoundingClientRect().left -
        container.current.parentNode.getBoundingClientRect().left;
      setPicked({
        width: container.current.offsetWidth,
        left,
        picked: 0,
      });
    }
    return `${styles.menuLink} ${
      isActive ? styles.menuLinkActive : styles.menuLink
    }`;
  };

  // Getting the width and left position of the active item
  const handleClick = (event, index) => {
    const element = event.currentTarget;
    const left =
      element.getBoundingClientRect().left -
      element.parentNode.getBoundingClientRect().left;

    setPicked({
      width: element.offsetWidth,
      picked: index,
      left,
    });
  };

  return {
    container,
    classBuilder,
    picked,
    width,
    left,
  };
};

export default useMenu;
