import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ToDoHome from "./page/homePage";
import ToDoApp from "./page/toDoListPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact={true} path="/" element={<ToDoHome />} />
        <Route path="/ToDoApp" element={<ToDoApp />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
