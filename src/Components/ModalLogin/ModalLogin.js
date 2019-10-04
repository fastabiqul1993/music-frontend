import React, { useState, Fragment } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";

import { login } from "../../Redux/Action/user";

function ModalLogin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [isRedirect, setRedirect] = useState(false);

  const handleClose = () => {
    setEmail();
    setPassword();
    setShow(false);
    setValidated();
  };

  const handleShow = () => setShow(true);

  const handleLogin = async () => {
    await props
      .dispatch(login(email, password))
      .then(() => {
        Swal.fire({
          type: "success",
          title: "Success",
          text: "Login success!"
        });
        setEmail();
        setPassword();
        // setRedirect(true);
        window.location.reload();
        handleClose();
      })
      .catch(() => {
        Swal.fire({
          type: "error",
          title: "Ops...",
          text: "Check your email or password!"
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

  if (isRedirect) {
    return <Redirect to={`/`} />;
  }

  return (
    <Fragment>
      <Button
        variant="link"
        style={{
          marginRight: "10px",
          textDecoration: "none",
          color: "#2c3e50"
        }}
        onClick={handleShow}
      >
        Login
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                onChange={e => setEmail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Check your email!
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
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
            <Button variant="success" onClick={handleLogin}>
              Login
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Fragment>
  );
}

export default connect(null)(ModalLogin);
