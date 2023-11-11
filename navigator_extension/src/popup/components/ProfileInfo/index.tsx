import React from "react";
import styles from "./profile_info.module.css";
import { Box, H2, Icons } from "../";

const ProfileInfo = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileInfo}>
        <div className={styles.image}>
          <img
            src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
            alt="Profile"
          />
        </div>
        <div className={styles.textContainer}>
          <H2>RICARDO ORELLANA</H2>
          <p>Frontend engineer +3y | React.js | TypeScri... </p>
        </div>
      </div>
      <Box boxType="icon" containerMode>
        <Icons iconType="itemMenu" />
      </Box>
    </div>
  );
};

export default ProfileInfo;
