import React, { Component, Fragment } from "react";
import {
  InputGroup,
  Button,
  DropdownButton,
  Dropdown,
  Row,
  Col
} from "react-bootstrap";
import { connect } from "react-redux";
import Autosuggest from "react-autosuggest";
import "./SearchBar.css";

const getSuggestions = (value, dataList) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  return inputLength === 0
    ? []
    : dataList.filter(
        data => data.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => <span>{suggestion.name}</span>;

class SearchBar extends Component {
  state = {
    value: "",
    suggestions: []
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value, this.props.productName)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  handleOnDetail = val => {
    let target = this.props.productName.find(function(target) {
      if (target.name === val) return target;
    });
    this.props.history.push(`/product/${target.id}`);
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search",
      value,
      onChange: this.onChange
    };

    return (
      <Fragment>
        <Row>
          <Col sm={12}>
            <InputGroup>
              <InputGroup.Prepend>
                <Button
                  onClick={() => this.handleOnDetail(this.state.value)}
                  variant="outline-secondary"
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                </Button>
              </InputGroup.Prepend>
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
              />
              <DropdownButton
                as={InputGroup.Append}
                variant="outline-info"
                title="Sort by"
                id="input-group-dropdown-2"
              >
                <Dropdown.Item href="#">DESC</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">ASC</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    productName: state.product.productName
  };
};

export default connect(mapStateToProps)(SearchBar);
