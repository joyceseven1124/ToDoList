import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import ToDoHome from "./page/homePage";
import ToDoApp from "./page/toDoListPage";

import StartButton from "./component/StartButton";
import GoHomeButton from "./component/GoHomeButton";

/*const Layout = (props) => {
  return (
    <>
      <nav>
        <Link to="/">
          <StartButton />
        </Link>
        <Link to="/ToDoApp">
          <GoHomeButton />
        </Link>
      </nav>
      {props.children}
    </>
  );
};*/

const Layout = (props) => {
  return (
    <>
      <StartButton />
      {props.children}
    </>
  );
};

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact={true} path="/" element={<ToDoHome />} />
        <Route path="/ToDoApp" element={<ToDoApp />} />
      </Routes>
    </HashRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
