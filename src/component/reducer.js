export default function reducers(toDoList, action) {
  let newToDoList = [...toDoList];
  switch (action.type) {
    case "ADD":
      newToDoList.push(action.newEvent);
      break;

    case "DEL":
      newToDoList = newToDoList.filter((msg) => msg !== action.delMsg);
      break;

    default:
      break;
  }

  localStorage.setItem("toDoList", newToDoList);
  return newToDoList;
}
