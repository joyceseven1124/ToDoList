import React, { useContext } from "react";
import { ContextStore } from "../page/toDoListPage";
import styles from "/public/css/toDoList.module.css";

function handleDelEvent(delMsg, dispatch) {
  return (e) => dispatch({ type: "DEL", delMsg: delMsg });
}

export default function Message(props) {
  const { appReducer } = useContext(ContextStore);
  const dispatch = appReducer[1];
  return (
    <div className="to_do_message">
      <div className="to_do_word">{props.msg}</div>
      <button
        className="to_do_del_button"
        onClick={handleDelEvent(props.msg, dispatch)}
      >
        {"刪除"}
      </button>
    </div>
  );
}
