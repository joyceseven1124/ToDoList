import React, { useContext, useState } from "react";
import { ContextStore } from "../page/toDoListPage";
import styles from "/public/css/toDoList.module.css";

function handleAddClick(nweMsg, dispatch, setMsg) {
  const anEvent = { type: "ADD", newEvent: nweMsg };
  return (e) => {
    setMsg("");
    dispatch(anEvent);
  };
}

export default function Input() {
  const [msg, setMsg] = useState("");
  const { appReducer } = useContext(ContextStore);
  const dispatch = appReducer[1];
  return (
    <div className={styles.to_do_content}>
      <input
        className={styles.to_do_input}
        onChange={(e) => setMsg(e.target.value)}
        value={msg}
      ></input>
      <button
        className={styles.to_do_send}
        onClick={handleAddClick(msg, dispatch, setMsg)}
      >
        {"新增紀錄"}
      </button>
    </div>
  );
}
