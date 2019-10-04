import React, { Fragment, useState } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import ModalLogin from "../ModalLogin/ModalLogin";
import ModalRegister from "../ModalRegister/ModalRegister";

import logo from "../../Assets/aneka-musik.png";
import "./Navigation.css";

const auth = JSON.parse(localStorage.getItem("response"));

function Navigation(props) {
  const loginStatus = JSON.parse(localStorage.getItem("response"));

  const logOut = () => {
    localStorage.removeItem("response");
    window.location.replace("http://localhost:3001/");
  };

  const goToCart = () => {
    props.history.push(`/cart/${auth.id}`);
  };

  return (
    <Navbar
      style={{ background: "#F5D372", marginBottom: "30px" }}
      variant="dark"
    >
      <Container>
        <Link to={`/`}>
          <Navbar.Brand>
            <img style={{ width: "80px" }} src={logo} alt="logo"></img>
          </Navbar.Brand>
        </Link>
        <div className="user-button ml-auto">
          {loginStatus && loginStatus.role === "user" ? (
            <Fragment>
              <Button onClick={logOut} variant="link">
                <i className="fa fa-heart" aria-hidden="true"></i>
              </Button>
              <Button
                style={{ marginRight: "20px" }}
                onClick={goToCart}
                variant="link"
              >
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </Button>
            </Fragment>
          ) : null}
          {loginStatus ? (
            <Button onClick={logOut} variant="dark">
              Logout
            </Button>
          ) : (
            <Fragment>
              <ModalLogin />
              <ModalRegister />
            </Fragment>
          )}
        </div>
      </Container>
    </Navbar>
  );
}

export default Navigation;
