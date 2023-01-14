import React, { useState } from "react";
import styles from "/public/css/toDoList.module.css";
import db from "../firebase";
import { addDoc, collection } from "firebase/firestore";

async function writeToDoList(newMsg, arrayMessage, setArrayMessage) {
  let newArrayMessage = [...arrayMessage];
  const docData = { item: newMsg };
  let docRef = await addDoc(collection(db.firestore, "toDoList"), docData);
  let result = { [docRef.id]: newMsg };
  newArrayMessage.push(result);
  setArrayMessage(newArrayMessage);
}

export default function Input(props) {
  const setArrayMessage = props.set.setDataValue;
  const arrayMessage = props.msgArray;
  const [msg, setMsg] = useState("");

  return (
    <div className={styles.to_do_content}>
      <input
        className={styles.to_do_input}
        onChange={(e) => setMsg(e.target.value)}
        value={msg}
      ></input>
      <button
        className={styles.to_do_send}
        onClick={(e) => {
          writeToDoList(msg, arrayMessage, setArrayMessage);
          setMsg("");
        }}
      >
        {"新增紀錄"}
      </button>
    </div>
  );
}
