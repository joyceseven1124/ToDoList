import React from "react";
import StartButton from "../component/StartButton";
import styles from "/public/css/home.module.css";

const ToDoHome = () => (
  <div className={styles.home_content}>
    <h1 className={styles.title}>React 練習專案</h1>
    <p className={styles.context}>歡迎光臨我的頁面</p>
    <StartButton />
  </div>
);

export default ToDoHome;
