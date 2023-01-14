import React from "react";
import db from "../firebase";

export default function Message(props) {
  const setValue = props.set.setDataValue;
  const id = props.id;
  const msgArray = props.msgArray;

  return (
    <div className="to_do_message" id={id}>
      <div className="to_do_word" id={id}>
        {props.msg}
      </div>
      <button
        className="to_do_del_button"
        id={id}
        onClick={() => {
          let newDataValueArray = msgArray.filter(
            (element, index) => Object.keys(element)[0] !== id[0]
          );
          setValue(newDataValueArray);
          db.deleteToDocument(id[0]);
        }}
      >
        {"刪除"}
      </button>
    </div>
  );
}
