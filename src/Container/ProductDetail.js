import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";

//redux mounting
import { getProduct } from "../Redux/Action/product";
import { getAllBranch } from "../Redux/Action/branch";
import { getAllCategory } from "../Redux/Action/category";

import DetailInfo from "../Components/Detail/DetailInfo/DetailInfo";
import DetailDescription from "../Components/Detail/DetailDescription/DetailDescription";
import DetailHeader from "../Components/Detail/DetailHeader/DetailHeader";
import DetailImage from "../Components/Detail/DetailImage/DetailImage";
import SearchBar from "../Components/SearchBar/SearchBar";

class ProductDetail extends Component {
  state = {
    branchData: {},
    categoryData: {}
  };
  componentDidMount = async () => {
    await this.props.dispatch(getProduct(this.props.match.params.id));
    await this.props.dispatch(getAllBranch());
    await this.props.dispatch(getAllCategory());

    this.setState({
      branchData: this.props.product.Branch,
      categoryData: this.props.product.Category
    });
  };

  render() {
    const product = this.props.product;
    return (
      <div style={{ marginTop: "30px" }}>
        <Container>
          <SearchBar />
          <Row style={{ marginTop: "10px" }}>
            <Col md={4}>
              <DetailImage img={product.img} />
            </Col>
            <Col md={8}>
              <Row>
                <DetailHeader
                  product={product}
                  branchData={this.state.branchData}
                  categoryData={this.state.categoryData}
                />
                <DetailDescription description={product.description} />
                <DetailInfo
                  name={this.state.branchData.name}
                  qty={product.qty}
                  price={product.price}
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.product.isLoading,
    product: state.product.product
  };
};

export default connect(mapStateToProps)(ProductDetail);
