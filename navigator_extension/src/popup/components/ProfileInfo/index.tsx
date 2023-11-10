import React from "react";
import styles from "./profile_info.module.css";
import { Box, Icons } from "../";

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
          <h2>Ricardo Orellana</h2>
          <p>Frontend engineer +3y | Reac... </p>
        </div>
      </div>
      <Box boxType="icon" containerMode>
        <Icons iconType="itemMenu" />
      </Box>
    </div>
  );
};

export default ProfileInfo;
