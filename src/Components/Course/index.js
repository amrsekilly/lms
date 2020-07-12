import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const index = (props) => {
  return (
    <Card style={{ width: "18rem" }} className="course">
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Link to={`/courses/${props.id}`}>
          <Button variant="primary">View Course</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default index;
