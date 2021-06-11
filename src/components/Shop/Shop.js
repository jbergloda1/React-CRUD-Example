import { Button, Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "./Style.css";
const axios = require("axios");

export default function Shop() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8000/api/product",
      data: null,
    })
      .then((res) => {
        
        setProductList(res.data.data)
       
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
  // const fetchLists = async () => {
  //   const res = await fetch("http://localhost:8000/api/product");
  //   const data = await res.json();
  //   return data.data;
  // };
  // useEffect(() => {
  //   const getList = async () => {
  //     const productFormServe = await fetchLists();
  //     setProductList(productFormServe);
  //   };
  //   getList();
  // }, []);
  console.log(productList);
  return (
    <div>
      <div className="row">
        {productList.map((item) => (
          <div key={item.id} className="col-md-2">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={ 'http://127.0.0.1:8000/uploads/product/' + item.img} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.supplier_id}</Card.Text>
                <Card.Text>{item.category_id}</Card.Text>
                <Card.Text>{item.import_price}</Card.Text>
                <Card.Text>{item.export_price}</Card.Text>
                <Button variant="primary">Chi tiet</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
 