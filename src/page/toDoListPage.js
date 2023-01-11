import React, { useReducer, createContext } from "react";
import reducers from "../component/reducer";
import Input from "../component/Input";
import List from "../component/List";
import GoHomeButton from "../component/GoHomeButton";
import styles from "/public/css/toDoList.module.css";

export const ContextStore = createContext();

export default function ToDoApp() {
  const appReducer = useReducer(
    reducers,
    localStorage.getItem("toDoList")
      ? localStorage.getItem("toDoList").split(",")
      : []
  );

  return (
    <ContextStore.Provider value={{ appReducer: appReducer }}>
      <div className={styles.todo_list_app}>
        <Input />
        <List />
        <GoHomeButton />
      </div>
    </ContextStore.Provider>
  );
}
