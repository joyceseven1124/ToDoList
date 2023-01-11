import React, { useState } from "react";
import styles from "/public/css/home.module.css";

import { useNavigate } from "react-router-dom"; // react-router-dom v6 version

const StartButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <button className={styles.button} onClick={() => navigate("/ToDoApp")}>
        點此開始
      </button>
    </>
  );
};

export default StartButton;
