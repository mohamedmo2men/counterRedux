import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { increment, decrement } from "../redux/CounterSlice";

const Counter = () => {
  const countState = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className=" bg-dark">
      <Button className="m-5 h-40 bg-primary">{countState}</Button>
      <Button className="m-5  variant-primary" onClick={handleIncrement}>
        Increment
      </Button>
      <Button className="m-5  variant-primary" onClick={handleDecrement}>
        Decrement
      </Button>
    </div>
  );
};

export default Counter;
