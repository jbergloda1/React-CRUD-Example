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

function App() {
  const [taskList, setTaskList] = useState([
    // {
    //   id: 1,
    //   name: "Tran Nhat Linh",
    //   team: "DG3 Ext",
    //   task: "Form React",
    //   status: "Ongoing",
    // },
    // {
    //   id: 2,
    //   name: "Lee Zet",
    //   team: "DG3 Ext",
    //   task: "Context React",
    //   status: "Ongoing",
    // },
    // {
    //   id: 3,
    //   name: "Tan Doan",
    //   team: "DG3 Ext",
    //   task: "Laravel ORM",
    //   status: "Done",
    // },
    // {
    //   id: 4,
    //   name: "Phap Dinh",
    //   team: "DG3 Ext",
    //   task: "Vuex",
    //   status: "Ongoing",
    // },
  ]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 5,
    _totalRows: 10,
  });
  useEffect(() => {
    const getTasks = async () => {
      const taskFromServe = await fetchTasks();
      setTaskList(taskFromServe);
    };
    getTasks();
  }, []);
  function handlePageChange(newPage) {
    console.log(newPage);
  }
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/taskList");
    const data = await res.json();
    return data;
  };
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
  const addTask = async (taskLists) => {
    const res = await fetch("http://localhost:5000/taskList", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(taskLists),
    });
    const data = await res.json();
    console.log(data);
    setTaskList([...taskList, data]);
  };
  // function handleDelete(task){
  //   console.log(task);
  //   const index = taskList.findIndex(x => x.id === task.id)
  //   const newTaskList = [...taskList];
  //   newTaskList.splice(index, 1);
  //   setTaskList(newTaskList);
  // }
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/taskList/${id}`, {
      method: "DELETE",
    });
    setTaskList(taskList.filter((taskList) => taskList.id !== id));
  };

  return (
    <div className="container">
      <Header />

      <HeaderSlide />
      <ToastProvider>
        <BodyContent
          taskLists={taskList}
          onTaskListClick={handleDelete}
          onAdd={addTask}
        />
      </ToastProvider>

      <div className="row">
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
        <div className="col-md-4">
          
        </div>
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
        <div className="col-md-6">
          
        </div>
      </div>
    </div>
  );
}

export default App;
