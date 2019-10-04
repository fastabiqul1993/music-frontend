import React, { Fragment } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import Swal from "sweetalert2";

function CategoryCard(props) {
  const categoryList = props.categoryList;
  const isLoading = props.isLoading;

  const handleCategory = id => {
    props.history.push(`/category/${id}`);
  };

  return (
    <Fragment>
      <Row>
        {categoryList.map((category, index) => (
          <Col onClick={() => handleCategory(category.id)} key={index} sm={3}>
            <Card
              className="shadow"
              style={{
                backgroundColor: "#F5D372",
                border: "none",
                padding: "16px",
                width: "100%",
                height: "100%",
                marginTop: "20px"
              }}
            >
              <div
                style={{
                  top: "40%",
                  position: "absolute",
                  marginLeft: "10px"
                }}
              >
                <h3>{category.name}</h3>
              </div>
              <Card.Img
                style={{
                  width: "100px",
                  height: "150px",
                  display: "block",
                  marginLeft: "80px",
                  marginTop: "10px"
                }}
                variant="top"
                src={category.img}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.category.isLoading,
    categoryList: state.category.categoryList
  };
};

export default connect(mapStateToProps)(CategoryCard);
