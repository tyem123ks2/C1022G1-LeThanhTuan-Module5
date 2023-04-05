
import "./App.css";
import TodoList from "./component/TodoList";
import TodoForm from "./component/TodoForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

function App() {
  return (
      <>
        <TodoForm/>
        <TodoList/>
        <ToastContainer/>
      </>
  );
}

export default App;