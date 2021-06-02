import "./App.css";
import BodyContent from "./components/Body/BodyContent";
import Header from "./components/Head/Header";
import HeaderSlide from "./components/Head/HeaderSlide";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Calculator from "./components/Header/Calculator";
import StateEX from "./components/StateEX";
import HandingEventEx from "./components/HandingEventEx";
import UseEffect from "./components/Hook/UseEffect";
import React, { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      name: "Tran Nhat Linh",
      team: "DG3 Ext",
      task: "Form React",
      status: "Ongoing",
    },
    {
      id: 2,
      name: "Lee Zet",
      team: "DG3 Ext",
      task: "Context React",
      status: "Ongoing",
    },
    {
      id: 3,
      name: "Tan Doan",
      team: "DG3 Ext",
      task: "Laravel ORM",
      status: "Done",
    },
    {
      id: 4,
      name: "Phap Dinh",
      team: "DG3 Ext",
      task: "Vuex",
      status: "Ongoing",
    },
  ]);
  function handleTodoFormSubmit(formValues) {
    console.log('Form submit: ', formValues);
    const newTask = {
      id: taskList.length + 1,
      ...formValues,
    };
    const newTaskList = [...taskList];
    newTaskList.push(newTask);
    setTaskList(newTaskList);
    // add new todo to current todo
  }
  function handleDelete(task){
    console.log(task);
    const index = taskList.findIndex(x => x.id === task.id)
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  }
  return (
    <div className="container">
       <BrowserRouter><Header /></BrowserRouter>
      
      <HeaderSlide />
      <BodyContent taskLists={taskList} onTaskListClick={handleDelete} onSubmit={handleTodoFormSubmit} />
      <Calculator/>
      <StateEX/>
      <HandingEventEx/>
      <UseEffect/>
    </div>
  );
}

export default App;
