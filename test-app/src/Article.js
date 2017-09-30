import React, { Component } from 'react';
import './App.css';

class Article extends Component {
	constructor() {
		super();
		this.removeOnClick = this.removeOnClick.bind(this);
	}

	removeOnClick(event) {
		this.props.actionOnClick(this.props.id);
	};

	render() {
		return (
			<article data-id={this.props.id}>
				<p>{this.props.value}</p>
				<button onClick={this.removeOnClick}></button>
			</article>
		);
	}
}

export default Article;