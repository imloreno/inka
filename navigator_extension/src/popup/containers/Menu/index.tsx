import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Box } from "../../components";
import styles from "./menu.module.css";
import useMenu from "./hooks/useMenu";
import { routes } from "../../routes/Router";

const Menu = () => {
  const { picked, width, left } = useMenu();

  const classBuilder = ({ isActive }) => {
    // if (picked === null) {
    //   const left =
    //     defaultItem.current.getBoundingClientRect().left -
    //     defaultItem.current.parentNode.getBoundingClientRect().left;
    //   setPicked({
    //     width: defaultItem.current.offsetWidth,
    //     left,
    //     picked: 0,
    //   });
    // }
    return `${styles.menuLink} ${
      isActive ? styles.menuLinkActive : styles.menuLink
    }`;
  };

  return (
    <Box
      className={styles.menuList}
      containerMode
      id="menuContainer"
    >
      {routes.map(({ path, label }, index) => (
        <Box key={path + index}>
          <NavLink className={classBuilder} to={path}>
            {label}
          </NavLink>
        </Box>
      ))}
      <Box style={{ width, left }} />
    </Box>
  );
};

export default Menu;
