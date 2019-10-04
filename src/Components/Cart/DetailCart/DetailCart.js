import React, { Fragment } from "react";
import { Card, Row, Col, ButtonGroup, Button } from "react-bootstrap";

import guitar from "../../../Assets/guitar.png";

function DetailCart(props) {
  console.log("detail cart", props);
  return (
    <Fragment>
      {props.cartList.map((cart, index) => (
        <Card key={index}>
          <Card.Body>
            <Row>
              <Col xs={3}>
                <img
                  style={{
                    maxHeight: "50px",
                    marginLeft: "30px",
                    marginTop: "6px"
                  }}
                  src={cart.Product.img}
                  alt="img-product"
                ></img>
              </Col>
              <Col xs={6}>
                <h5>{cart.Product.name}</h5>
                <h6>Rp. {cart.Product.price}</h6>
              </Col>
              <Col xs={3}>
                <ButtonGroup
                  style={{ padding: "5px" }}
                  aria-label="Basic example"
                >
                  <Button>-</Button>
                  <Button variant="outline-primary" disabled>
                    {cart.qty}
                  </Button>
                  <Button>+</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Fragment>
  );
}

export default DetailCart;
