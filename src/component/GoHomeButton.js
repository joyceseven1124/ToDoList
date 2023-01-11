import React, { useState } from "react";
import styles from "/public/css/toDoList.module.css";
import { useNavigate } from "react-router-dom"; // react-router-dom v6 version

const GoHomeButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <button className={styles.button} onClick={() => navigate("/")}>
        返回首頁
      </button>
    </>
  );
};

export default GoHomeButton;
