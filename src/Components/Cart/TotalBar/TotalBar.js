import React, { Component, Fragment, useState } from "react";
import { Row, Col, Button, Modal, Table } from "react-bootstrap";
import ReactToPrint from "react-to-print";

function TotalBar(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let total = 0;
  props.cartList.map(cart => {
    total += cart.Product.price * cart.qty;
  });

  return (
    <Fragment>
      <Row>
        <Col sm={12}>
          <h6>Total: </h6>
        </Col>
        <Col sm={12}>
          <h4>Rp. {total}</h4>
        </Col>
        <Col sm={12}>
          <Button onClick={handleShow} variant="primary" block>
            Checkout
          </Button>
        </Col>
      </Row>
    </Fragment>
  );
}

class TotalTable extends Component {
  render() {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Product name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cartList.map((cart, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{cart.Product.name}</td>
              <td>{cart.qty}</td>
              <td>{cart.Product.price}</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>Total</td>
            <td></td>
            <td>{this.props.total}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

class Printing extends Component {
  render() {
    return (
      <div>
        {/* <TotalBar /> */}
        <ReactToPrint
          trigger={() => <Button variant="primary">Checkout</Button>}
          content={() => this.componentRef}
        />
        <TotalTable
          cartList={this.props.cartList}
          ref={el => (this.componentRef = el)}
        />
      </div>
    );
  }
}

export default Printing;
