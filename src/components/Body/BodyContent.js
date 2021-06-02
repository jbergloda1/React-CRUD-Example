import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import BodyItem from "./BodyItem";
import BodyItemClass from "./BodyItemClass";
import { FaAlignCenter, FaCheck, FaEdit, FaTimes } from "react-icons/fa";

export default function BodyContent(props) {
  const { onSubmit } = props;
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("");
  const {taskLists, onTaskListClick } = props;
  function handleChangeName(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }
  function handleChangeTeam(e) {
    console.log(e.target.value);
    setTeam(e.target.value);
  }
  function handleChangeTask(e) {
    console.log(e.target.value);
    setTask(e.target.value);
  }
  function handleChangeStatus(e) {
    console.log(e.target.value);
    setStatus(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const formValues = {
      name: name,
      team: team,
      task: task,
      status: status,
    };
    onSubmit(formValues);
  }
  function handleDelete(task){
    onTaskListClick(task);
  }
 
  return (
    <div>
      <Accordion>
        <Card>
          <BodyItemClass />
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Xem Them
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <BodyItem name image="dasdas" bname="Details" />
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Form Example ReactJS (Click Here !!)
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card>
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Form Example </Card.Title>
                <Card.Text>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Nhap Ten</label>
                      <input
                        value={name}
                        onChange={handleChangeName}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Nhap Team</label>
                      <input
                        value={team}
                        onChange={handleChangeTeam}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter team"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Nhap Task</label>
                      <input
                        value={task}
                        onChange={handleChangeTask}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Task"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Trang Thai</label>
                      <input
                        value={status}
                        onChange={handleChangeStatus}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Status"
                      />
                    </div>
                    <button
                      style={{ float: "right" }}
                      type="submit"
                      className="btn btn-primary"
                    >
                      Add
                    </button>
                    <div className="form-group">
                      <Card.Title>Details List</Card.Title>
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Ten</th>
                            <th scope="col">Team</th>
                            <th scope="col">Task</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          {taskLists.map((task) => (
                            <tr key={task.id}>
                              <th scope="row">{task.id}</th>
                              <td>{task.name}</td>
                              <td>{task.team}</td>
                              <td>{task.task}</td>
                              <td>{task.ttatus}</td>
                              
                              <td>
                                <FaEdit
                                  style={{ color: "green", cursor: "pointer" }}
                                />{" "}
                                &nbsp;
                                <FaTimes onClick={() => handleDelete(task)}
                                  style={{ color: "red", cursor: "pointer" }}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Check status
                      </label>
                    </div>
                  </form>
                </Card.Text>
              </Card.Body>
            </Card>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
