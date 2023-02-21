import Button from "react-bootstrap/Button";
import React from "react";
import { Card, Container, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ADD_INCREMENT } from "../redux/actionTypes/actionType";
import { decrement, increment } from "../redux/counterAction/counterAction";

const Counter = () => {
    const counttext  = useSelector((state)=>state)
    const dispatch = useDispatch()
    console.log(counttext);
  return (
    <Container>
      <Card className="text-center">
        <Card.Header>Project To Counter application using redux </Card.Header>
        <Card.Body>
          <Card.Title className="text-center mb-3">count :{counttext} </Card.Title>
          <Stack direction="horizontal" gap={4} className="col-md-2 mx-auto mt-2">
          <Button variant="primary mr-1" onClick={()=>dispatch(increment())}>Increment</Button>
          <Button variant="danger" onClick={()=>dispatch(decrement())}>Decrement</Button>
    </Stack>
         
        </Card.Body>
        <Card.Footer className="text-muted">@copyright reserved Golam hakakni mim</Card.Footer>
      </Card>
    </Container>
  );
};

export default Counter;
