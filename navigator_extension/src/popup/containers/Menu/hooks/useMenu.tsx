import React, { useState, useEffect } from "react";
import styles from "../menu.module.css";

const initialState = {
  picked: null,
  width: 0,
  left: 0,
};

const useMenu = () => {
  const [{ picked, width, left }, setPicked] = useState(initialState);

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

  useEffect(() => {
    if (picked === null) {
      let firstChild: any = document.getElementById("menuContainer");
      firstChild = firstChild.firstElementChild;
      setPicked({
        width: firstChild.offsetWidth,
        left,
        picked: 0,
      });
    }
  }, [])

  return {
    picked,
    width,
    left,
    setPicked,
    handleClick
  };
};

export default useMenu;
