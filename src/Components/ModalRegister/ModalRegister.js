import React, { Fragment, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";
import Swal from "sweetalert2";

import { register } from "../../Redux/Action/user";

function ModalRegister(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const handleClose = () => {
    setName("");
    setEmail("");
    setPassword("");
    setShow(false);
    setValidated();
  };
  const handleShow = () => setShow(true);
  const handleRegister = async () => {
    await props
      .dispatch(register(name, email, password))
      .then(() => {
        Swal.fire({
          type: "success",
          title: "Success",
          text: "Register success!"
        });
        setName();
        setEmail();
        setPassword();
        handleClose();
      })
      .catch(() => {
        Swal.fire({
          type: "error",
          title: "Ops...",
          text: "Register failed"
        });
      });
  };
  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Fragment>
      <Button variant="success" style={{ color: "#FFF" }} onClick={handleShow}>
        Register
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Check your name!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Check your email!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Check your password!
              </Form.Control.Feedback>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="success" onClick={handleRegister}>
              Register
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Fragment>
  );
}

export default connect(null)(ModalRegister);
