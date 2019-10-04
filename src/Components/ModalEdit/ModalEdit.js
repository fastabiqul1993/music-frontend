import React, { Fragment, useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import Swal from "sweetalert2";

import { updateProduct } from "../../Redux/Action/product";

function ModalEdit(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState(0);
  const [CategoryId, setCategory] = useState(0);
  const [BranchId, setBranch] = useState(0);
  const [description, setDescription] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleUpdate = async () => {
    await props
      .dispatch(
        updateProduct(
          props.product.id,
          name,
          qty,
          price,
          CategoryId,
          BranchId,
          description
        )
      )
      .then(() => {
        alert("update success");
      })
      .catch(() => {
        alert("update failed");
      });
    // await props
    //   .dispatch(
    //     updateProduct(
    //       props.product.id,
    //       name,
    //       qty,
    //       price,
    //       CategoryId,
    //       BranchId,
    //       description
    //     )
    //   )
    //   .then(() => {
    //     Swal.fire({
    //       type: "success",
    //       title: "Success",
    //       text: "Edit success!"
    //     });
    //     setName();
    //     setQty();
    //     setPrice();
    //     setCategory();
    //     setBranch();
    //     handleClose();
    //   })
    //   .catch(() => {
    //     Swal.fire({
    //       type: "error",
    //       title: "Ops...",
    //       text: "Edit failed"
    //     });
    //   });
  };
  console.log("modal edit", props.product.id);
  const product = props.product;

  return (
    <Fragment>
      <Button
        variant="link"
        style={{ marginTop: "-4px", textDecoration: "none", color: "#6c757d" }}
        onClick={handleShow}
      >
        Update
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  defaultValue={product.name}
                  onChange={e => setName(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formGridState">
              <Form.Label column sm="2">
                Category
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  as="select"
                  onChange={e => setCategory(e.target.value)}
                >
                  <option>{props.categoryData.name}</option>
                  {props.categoryList.map((category, index) => (
                    <option key={index} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Branch
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  as="select"
                  onChange={e => setBranch(e.target.value)}
                >
                  <option>{props.branchData.name}</option>
                  {props.branchList.map((branch, index) => (
                    <option key={index} value={branch.id}>
                      {branch.name}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Quantity
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  defaultValue={product.qty}
                  onChange={e => setQty(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Price
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  defaultValue={product.price}
                  onChange={e => setPrice(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Describe
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  as="textarea"
                  onChange={e => setDescription(e.target.value)}
                  defaultValue={product.description}
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    branchList: state.branch.branchList,
    categoryList: state.category.categoryList,
    product: state.product.product
  };
};

export default connect(mapStateToProps)(ModalEdit);
