import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

export default function BodyItem(props) {
  // useState Hook
  const [count, setCount] = useState(0);
  const Users = [
    {
      id: 1,
      name: "leezet",
      level: 2,
      image: "img_avatar1",
      note: "I'm a Fullstack Developer",
    },
    {
      id: 2,
      name: "Phap Dinh",
      level: 3,
      image: "img_avatar2",
      note: "I'm a BackEnd Developer",
    },
    {
      id: 3,
      name: "Khac Huy",
      level: 1,
      image: "img_avatar3",
      note: "I'm a FrontEnd Developer",
    },
    {
      id: 4,
      name: "Tan Doan",
      level: 1,
      image: "img_avatar5",
      note: "I'm a Project Manage",
    },
  ];
  const listItems = Users.map((user) => (
    <Card.Body key={user.id} className="col-md-3">
      <Card.Img src={require("../Body/" + user.image + ".png").default} />
      <Card.Title>{user.name}</Card.Title>
      <Card.Title>Level: {user.level}</Card.Title>
      <Card.Text>{user.note}</Card.Text>
      <Button variant="primary">{props.bname}</Button>
    </Card.Body>
  ));
  return (
    <div>
      <div>
        <p> State Test With React Hook</p>
        <p> Click {count} time</p>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          {" "}
          Click Me!
        </button>
        <button
          onClick={() =>
            setTimeout(() => setCount((prevCount) => prevCount + 1),2000)
          }
        >
          {" "}
          Click Me 2!
        </button>
      </div>
      <div className="row">{listItems}</div>

    </div>
    
  );
}
