import React, { Component } from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import { connect } from "react-redux";

import { getCart } from "../Redux/Action/cart";

import DetailCart from "../Components/Cart/DetailCart/DetailCart";
import TotalBar from "../Components/Cart/TotalBar/TotalBar";

const auth = JSON.parse(localStorage.getItem("response"));

class Cart extends Component {
  state = {
    key: "cart"
  };

  componentDidMount = async () => {
    await this.props.dispatch(getCart(auth.id));
  };

  render() {
    // console.log("cart", this.props);
    return (
      <div style={{ marginTop: "30px" }}>
        <Container>
          <Row>
            <Col>
              <Tabs id="controlled-tab-example" activeKey={this.state.key}>
                <Tab eventKey="cart" title="Item in cart">
                  <Row>
                    <Col md={8}>
                      <Row>
                        <Col style={{ marginTop: "20px" }} sm={12}>
                          <DetailCart cartList={this.props.cartList} />
                        </Col>
                      </Row>
                    </Col>
                    <Col style={{ marginTop: "20px" }} md={4}>
                      <TotalBar cartList={this.props.cartList} />
                    </Col>
                  </Row>
                </Tab>
              </Tabs>
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
    cartList: state.cart.cartList,
    user: state.user
  };
};

export default connect(mapStateToProps)(Cart);
