import React, { Component } from 'react';
import './App.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.onTextChange(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Search here..."
        value={this.state.value}
        onClick={this.handleChange}
      />
    );
  }
}

export default Search;
