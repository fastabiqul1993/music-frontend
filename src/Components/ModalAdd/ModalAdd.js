import React, { useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import Swal from "sweetalert2";

import { postProduct } from "../../Redux/Action/product";

function ModalAdd(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState(0);
  const [CategoryId, setCategory] = useState(0);
  const [BranchId, setBranch] = useState(0);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleFile = files => {
    setImage(files[0]);
  };
  const handleSubmit = async () => {
    let formData = new FormData();
    formData.append("name", name);
    formData.append("qty", qty);
    formData.append("price", price);
    formData.append("CategoryId", CategoryId);
    formData.append("BranchId", BranchId);
    formData.append("image", image);
    formData.append("description", description);

    await props
      .dispatch(postProduct(formData))
      .then(() => {
        Swal.fire({
          type: "success",
          title: "Success",
          text: "Add new success!"
        });
        setName();
        setPrice();
        setQty();
        setPrice();
        setCategory();
        setBranch();
        setImage();
        setDescription();
        handleClose();
      })
      .catch(() => {
        Swal.fire({
          type: "error",
          title: "Ops...",
          text: "Not success!"
        });
      });
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <Button variant="warning" style={{ color: "#FFF" }} onClick={handleShow}>
        Add new product
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new product</Modal.Title>
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
                  placeholder="Category name"
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
                  onChange={e => setCategory(e.target.value)}
                  as="select"
                >
                  <option>Select category</option>
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
                  onChange={e => setBranch(e.target.value)}
                  as="select"
                >
                  <option>Select branch</option>
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
                  placeholder="Qty"
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
                  placeholder="Price"
                  onChange={e => setPrice(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Image
              </Form.Label>
              <Col sm="4">
                <input
                  type="file"
                  onChange={e => handleFile(Array.from(e.target.files))}
                />
              </Col>
              <Col sm="4"></Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Describe
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  as="textarea"
                  rows="3"
                  onChange={e => setDescription(e.target.value)}
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.product.isLoading,
    categoryList: state.category.categoryList,
    branchList: state.branch.branchList
  };
};

export default connect(mapStateToProps)(ModalAdd);
