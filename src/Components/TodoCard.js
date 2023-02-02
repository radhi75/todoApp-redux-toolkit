import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../redux/Todos";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
const TodoCard = ({ el }) => {
  const [show, setShow] = useState(false);
  const [newtodo, setNewtodo] = useState(el.text);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const id = el.id;

  return (
    <div
      style={{
        border: "1px solid black",
        width: "fit-content",
      }}
    >
      <p>{el.text}</p>
      <Button variant="danger" onClick={() => dispatch(deleteTodo(el.id))}>
        delete
      </Button>
      <Button variant="warning" onClick={handleShow}>
        edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>edit todo </Form.Label>
              <Form.Control
                type="text"
                placeholder="edit todo"
                onChange={(e) => setNewtodo(e.target.value)}
                value={newtodo}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            // onClick={() => console.log(el.id, newtodo)}
            onClick={() => dispatch(editTodo({ id, newtodo }))}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TodoCard;
