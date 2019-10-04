import React, { Fragment } from "react";
import { Row, Col, Form } from "react-bootstrap";

function DetailInfo(props) {
  // console.log(props.info.name);
  return (
    <Fragment>
      <Col sm={12} style={{ marginTop: "25px" }}>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column xs={3}>
            Available in
          </Form.Label>
          <Col xs={7}>
            <Form.Control type="text" placeholder={props.name} disabled />
          </Col>
        </Form.Group>
      </Col>
      <Col sm={12}>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column xs={3}>
            Quantity
          </Form.Label>
          <Col xs={7}>
            <Form.Control type="text" placeholder={props.qty} disabled />
          </Col>
        </Form.Group>
      </Col>
      <Col sm={12}>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column xs={3}>
            Price
          </Form.Label>
          <Col xs={7}>
            <Form.Control type="text" placeholder={props.price} disabled />
          </Col>
        </Form.Group>
      </Col>
    </Fragment>
  );
}

export default DetailInfo;
