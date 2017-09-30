import React, { Component } from 'react';
import './App.css';

class Textarea extends Component {
	constructor() {
		super();
		this.state = {
		  	value : "",
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({value : event.target.value});
		this.props.onTextChange(event.target.value);
	};

	render() {
		return (
			<textarea placeholder="Text here..." value={this.state.value} onChange={this.handleChange}></textarea>
		);
	}
}

export default Textarea;