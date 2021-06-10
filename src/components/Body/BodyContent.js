import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import BodyItem from "./BodyItem";
import BodyItemClass from "./BodyItemClass";
import { FaEdit, FaTimes } from "react-icons/fa";
import { useToast } from "../Context/Toast/Toast";
const axios = require("axios");

export default function BodyContent(props) {
  const { onAdd } = props;
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("");
  const { error, warn, info, success } = useToast();
  const [checked, setChecked] = useState("");
  const [list, setList] = useState([]);
  const { taskLists, onTaskListClick } = props;
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const formValues = {
  //     name: name,
  //     team: team,
  //     task: task,
  //     status: status,
  //   };
  //   onSubmit(formValues);
  // }
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8000/api/user",
      data: null,
    })
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    try {
      if (!name) {
        alert("Vui long nhap");
        return;
      }
      onAdd({ name, team, task, status });

      setName("");
      setTeam("");
      setTask("");
      setStatus("");
      success("Them Thanh Cong");
    } catch (error) {
      error("Khong the them!");
    }
  };
  function handleDelete(task) {
    try {
      onTaskListClick(task);
      error("Xoa thanh cong!");
    } catch (error) {
      error("Khong the xoa!");
    }
  }
  function handleChecked(e) {
    if (e === checked) {
      warn("Checked");
    } else {
      warn("Unchecked");
    }
  }
  const showUser = () => {
    const listUser = taskLists;
    [listUser].map((items) => <p>{items.name}</p>);
    return listUser;
  };
  return (
    <div>
      <Accordion>
        <Card>
          <BodyItemClass />
          <Card.Header>
            <Accordion.Toggle
              onClick={() => info("show")}
              as={Button}
              variant="link"
              eventKey="0"
            >
              Xem Them
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <BodyItem name image="dasdas" bname="Details" />
          </Accordion.Collapse>
        </Card>
        <Card>
          <BodyItemClass />
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Xem Them
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
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
                  <form onSubmit={onSubmit}>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Nhap Ten</label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        onChange={(e) => setTeam(e.target.value)}
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
                        onChange={(e) => setTask(e.target.value)}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Task"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Trang Thai</label>
                      <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="form-control"
                      >
                        <option selected>Started</option>
                        <option>Ongoing </option>
                      </select>
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
                          {list.map((item) => (
                            <tr>
                              <th key={item.id} scope="row">
                                {item.id}
                              </th>
                              <td>{item.name}</td>
                              <td>{item.dateofbirth}</td>
                              <td>{item.email}</td>
                              <td>{item.status}</td>
                              <td>
                                <FaEdit
                                  onClick={() =>
                                    error("chua lam chuc nang nay!")
                                  }
                                  style={{ color: "green", cursor: "pointer" }}
                                />{" "}
                                &nbsp;
                                <FaTimes
                                  onClick={() => handleDelete(item.id)}
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
                        onChange={(e) => setChecked(e.target.checked)}
                        onClick={handleChecked}
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
