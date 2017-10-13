import React, { Component } from 'react';
import './App.css';

class Article extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.save(this.props.id);
  }

  render() {
    return (
      <article
        data-id={this.props.id}
        className={this.props.saved ? 'saved' : ''}
        onClick={this.handleClick}
      >
        <img src={this.props.picture} alt="" />
        <p>{this.props.value}</p>
      </article>
    );
  }
}

export default Article;
