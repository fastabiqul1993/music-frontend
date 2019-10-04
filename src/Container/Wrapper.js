import React, { Fragment, Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";

//redux mounting
import { getAllCategory } from "../Redux/Action/category";
import { getProductName } from "../Redux/Action/product";
import { getAllBranch } from "../Redux/Action/branch";

import SearchBar from "../Components/SearchBar/SearchBar";
import ModalAdd from "../Components/ModalAdd/ModalAdd";
import CategoryCard from "../Components/CategoryCard/CategoryCard";
import ProductCard from "../Components/ProductCard/ProductCard";

class Wrapper extends Component {
  componentDidMount = async () => {
    await this.props.dispatch(getAllCategory());
    await this.props.dispatch(getProductName());
    await this.props.dispatch(getAllBranch());
  };

  render() {
    const getMatch = this.props.match.path;
    const prop = this.props;
    const userLogin = JSON.parse(localStorage.getItem("response"));

    return (
      <Fragment>
        <Container>
          <SearchBar history={prop.history} />
          {userLogin && userLogin.role === "admin" ? <ModalAdd /> : null}
          {getMatch === "/" ? <CategoryCard history={prop.history} /> : null}
          {getMatch === "/category/:id" ? (
            <ProductCard parameter={prop} />
          ) : null}
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.product.isLoading,
    productList: state.product.productList
  };
};

export default connect(mapStateToProps)(Wrapper);
