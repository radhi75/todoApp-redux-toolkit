import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Addtodo } from "../redux/Todos";
const AddTodo = () => {
  const [newtext, setNewtext] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          onChange={(e) => setNewtext(e.target.value)}
          style={{ borderRadius: "5px 0 0 5px" }}
          w="500px"
          placeholder="Add todo"
          value={newtext}
        />

        <button
          style={{ borderRadius: "0 5px 5px 0" }}
          onClick={() => dispatch(Addtodo(newtext))}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
