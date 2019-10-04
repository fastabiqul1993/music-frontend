import React, { Component } from "react";
import { Card, Row, Col, Badge } from "react-bootstrap";
import { connect } from "react-redux";
import { getAllProduct } from "../../Redux/Action/product";

class ProductCard extends Component {
  componentDidMount = async () => {
    await this.props.dispatch(
      getAllProduct(this.props.parameter.match.params.id)
    );
  };

  handleDetail = id => {
    this.props.parameter.history.push(`/product/${id}`);
  };

  render() {
    const productList = this.props.productList;

    return (
      <div style={{ marginTop: "20px" }}>
        <Row>
          {productList.map((product, index) => (
            <Col
              onClick={() => this.handleDetail(product.id)}
              key={index}
              sm={3}
              style={{
                marginBottom: "20px"
              }}
            >
              <Card
                className="shadow"
                style={{
                  background: "#F5D372",
                  border: "none",
                  padding: "16px",
                  width: "100%",
                  height: "100%"
                }}
              >
                <div style={{ top: "5%", position: "absolute" }}>
                  {product.qty > 0 ? (
                    <Badge pill variant="success">
                      Available
                    </Badge>
                  ) : (
                    <Badge pill variant="danger">
                      Not available
                    </Badge>
                  )}
                </div>

                <Card.Img
                  style={{
                    width: "100px",
                    height: "150px",
                    display: "block",
                    marginTop: "20px",
                    marginRight: "auto",
                    marginLeft: "auto"
                  }}
                  variant="top"
                  src={product.img}
                />
                <div
                  style={{
                    marginTop: "18px"
                  }}
                >
                  <h5>{product.name}</h5>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.product.isLoading,
    productList: state.product.productList
  };
};

export default connect(mapStateToProps)(ProductCard);
