import React, { useState, useEffect } from "react";
import Message from "./Message";
import styles from "/public/css/toDoList.module.css";
import db from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import Input from "./Input";

export default function List() {
  let dataValueArray = [];
  const [dataIsValue, setDataValue] = useState([]);
  useEffect(() => {
    async function readAsingleDocument() {
      const querySnapshot = await getDocs(collection(db.firestore, "toDoList"));
      querySnapshot.forEach((doc) => {
        dataValueArray.push({ [doc.id]: doc.data().item });
      });
      setDataValue(dataValueArray);
    }
    readAsingleDocument();
  }, []);

  const result = dataIsValue.map((e, idx) => (
    <Message
      key={`cmd-${idx}`}
      msg={Object.values(e)}
      id={Object.keys(e)}
      set={{ setDataValue }}
      msgArray={dataIsValue}
    />
  ));

  return (
    <div>
      <Input set={{ setDataValue }} msgArray={dataIsValue} />
      <ul className={styles.all_list}>{result}</ul>
    </div>
  );
}
