import "./App.css";
import BodyContent from "./components/Body/BodyContent";
import Header from "./components/Head/Header";
import HeaderSlide from "./components/Head/HeaderSlide";
import Calculator from "./components/Header/Calculator";
import StateEX from "./components/StateEX";
import HandingEventEx from "./components/HandingEventEx";
import UseEffect from "./components/Hook/UseEffect";
import React, { useState, useEffect } from "react";
import Pagination from "./components/Body/Pagination";
import MyProvider from "./components/Context/MyProvider";
import Child1 from "./components/Context/Child1";
import Child2 from "./components/Context/Child2";
import Count1 from "./components/hoc/Count1";
import Count2 from "./components/hoc/Count2";
import App2 from "./components/Context/csCon";
import Child from "./components/Context/Child";
import ToastExmp from "./components/Body/ToastExmp";
import { ToastProvider } from "./components/Context/Toast/ToastProvider";
const axios = require("axios");

function App() {
  const [list, setList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 5,
    _totalRows: 10,
  });
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8000/api/user",
      data: null,
    })
      .then((res) => {
        
        setList(res.data)
       
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  // useEffect(() => {
  //   const getTasks = async () => {
  //     const taskFromServe = await fetchTasks();
  //     setList(taskFromServe);

  //   };
  //   getTasks();
  // }, []);
  // function handlePageChange(newPage) {
  //   console.log(newPage);
  // }
  // const fetchTasks = async () => {
  //   const res = await fetch("http://localhost:8000/api/user");
  //   const data = await res.json();
  //   console.log(list)
  //   return data;

  // };
  // function handleTodoFormSubmit(formValues) {
  //   console.log("Form submit: ", formValues);
  //   const newTask = {
  //     id: taskList.length + 1,
  //     ...formValues,
  //   };
  //   const newTaskList = [...taskList];
  //   newTaskList.push(newTask);
  //   setTaskList(newTaskList);
  //   // add new todo to current todo
  // }
  // const addTask = async (taskLists) => {
  //   const res = await fetch("http://localhost:8000/api/user", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(taskLists),
  //   });
  //   const data = await res.json();
  //   setList([...list, data]);
  // };
  // function handleDelete(task){
  //   console.log(task);
  //   const index = taskList.findIndex(x => x.id === task.id)
  //   const newTaskList = [...taskList];
  //   newTaskList.splice(index, 1);
  //   setTaskList(newTaskList);
  // }
  // const handleDelete = async (id) => {
  //   await fetch(`http://localhost:8000/api/user/${id}`, {
  //     method: "DELETE",
  //   });
  //   setList(list.filter((taskList) => taskList.id !== id));
  // };

  return (
    <div className="container">
      <Header />

      <HeaderSlide />
      <ToastProvider>
        <BodyContent
          taskLists={list}
          // onTaskListClick={handleDelete}
        />
      </ToastProvider>

      {/* <div className="row">
        <div className="col-md-4">
          <MyProvider>
            <Child />
            <Child1 />
            <Child2 />
          </MyProvider>
        </div>
        <div className="col-md-4">
          <App2 />
        </div>
        <div className="col-md-4">
          <div>
            <Count1 />
            <Count2 />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <Pagination pagination={pagination} onPageChange={handlePageChange} />
        </div>
        <div className="col-md-4">
          <div>
            <Calculator />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <StateEX />
        </div>
        <div className="col-md-4">
          <HandingEventEx />
        </div>
        <div className="col-md-4">
          <div>
            <UseEffect />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <ToastExmp />
        </div>
        <div className="col-md-6"></div>
      </div> */}
    </div>
  );
}

export default App;
