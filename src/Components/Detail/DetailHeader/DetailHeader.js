import React, { Fragment, useState } from "react";
import { Col, Row, Button, Badge } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { deleteProduct } from "../../../Redux/Action/product";
import { postCart } from "../../../Redux/Action/cart";
import ModalEdit from "../../ModalEdit/ModalEdit";

function DetailHeader(props) {
  const [isRedirect, setRedirect] = useState(false);
  const handleDelete = id => {
    props.dispatch(deleteProduct(id)).then(() => {
      alert("delete success");
      setRedirect(true);
    });
  };
  const handleCart = async () => {
    await props
      .dispatch(postCart(props.product.id))
      .then(() => {
        alert("add to cart success");
      })
      .catch(() => {
        alert("add to cart failed");
      });
  };

  const loginStatus = JSON.parse(localStorage.getItem("response"));

  if (isRedirect) {
    return <Redirect to={`/category/${props.categoryData.id}`} />;
  }
  return (
    <Fragment>
      <Col sm={4}>
        <h4>{props.product.name}</h4>
      </Col>
      <Col sm={{ span: 4, offset: 4 }}>
        {loginStatus && loginStatus.role === "admin" ? (
          <Row>
            <Col xs={6}>
              <ModalEdit
                branchData={props.branchData}
                categoryData={props.categoryData}
              />
            </Col>
            <Col xs={6}>
              <Button
                onClick={() => handleDelete(props.product.id)}
                variant="link"
                style={{
                  marginTop: "-4px",
                  marginLeft: "8px",
                  textDecoration: "none",
                  color: "#dc3545"
                }}
              >
                Delete
              </Button>
            </Col>
          </Row>
        ) : null}
        {loginStatus && loginStatus.role === "user" ? (
          <Row>
            <Col xs={{ span: 4, offset: 4 }}>
              <Button variant="link">
                <i className="fa fa-heart-o" aria-hidden="true"></i>
              </Button>
            </Col>
            <Col xs={4}>
              <Button onClick={handleCart} variant="link">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </Button>
            </Col>
          </Row>
        ) : null}
      </Col>
      <Col sm={12}>
        {props.product.qty !== 0 ? (
          <Badge pill variant="success">
            Available
          </Badge>
        ) : (
          <Badge pill variant="danger">
            Not available
          </Badge>
        )}
      </Col>
    </Fragment>
  );
}

export default connect(null)(DetailHeader);
