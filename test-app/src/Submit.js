import React, { Component } from 'react';
import './App.css';

class Submit extends Component {
	render() {
		return (
			<button onClick={this.props.actionOnClick} className="submit">Submit</button>
		);
	}
}

export default Submit;