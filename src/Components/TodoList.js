import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const TodoList = () => {
  const [value, setValue] = useState();
  const todos = useSelector((state) => state.todo.todos);
  console.log(todos);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "10px",
        }}
      >
        <Button
          style={{ borderRadius: "5px 0 0 5px" }}
          onClick={() => setValue()}
          value={value}
        >
          ALL
        </Button>
        <Button
          style={{ borderRadius: "0" }}
          onClick={() => setValue(true)}
          value={value}
        >
          Complit
        </Button>
        <Button
          style={{ borderRadius: "0 5px 5px 0" }}
          onClick={() => setValue(false)}
          value={value}
        >
          Is Not Complit
        </Button>
      </div>
      {todos
        .filter((todo) => todo.isComplit == value || value == undefined)
        .map((el) => (
          <TodoCard key={el.id} el={el} />
        ))}
    </div>
  );
};

export default TodoList;
