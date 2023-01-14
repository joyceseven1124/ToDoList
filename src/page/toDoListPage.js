import React, { useReducer, createContext, useState, useEffect } from "react";
//import reducers from "../component/reducer";
//import Input from "../component/Input";
import List from "../component/List";
import GoHomeButton from "../component/GoHomeButton";
import styles from "/public/css/toDoList.module.css";
import db from "../firebase";
import { getDocs, collection } from "firebase/firestore";

export default function ToDoApp() {
  return (
    <div className={styles.todo_list_app}>
      <div className={styles.todo_list_content}>
        <List />
        <GoHomeButton />
      </div>
    </div>
  );
}
