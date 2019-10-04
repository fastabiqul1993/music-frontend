import React, { Fragment } from "react";
import { Col } from "react-bootstrap";

function DetailDescription(props) {
  return (
    <Fragment>
      <Col sm={12} style={{ marginTop: "13px", textAlign: "justify" }}>
        <p>{props.description}</p>
      </Col>
    </Fragment>
  );
}

export default DetailDescription;
