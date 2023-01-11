import React, { useContext } from "react";
import Message from "./Message";
import styles from "/public/css/toDoList.module.css";
import { ContextStore } from "../page/toDoListPage";

export default function List() {
  const { appReducer } = useContext(ContextStore);
  const toDoList = appReducer[0];
  const result = toDoList.map((e, idx) => (
    <Message key={`cmd-${idx}`} msg={e} />
  ));
  return <ul className={styles.all_list}>{result}</ul>;
}
