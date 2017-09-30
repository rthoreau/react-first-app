import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Textarea from './Textarea';
import Submit from './Submit';
import Article from './Article';

class App extends Component {

  constructor() {
	super();
	this.state = {
		textareaText: '',
		articles: []
  }

  this.actionOnClickFunction = this.actionOnClickFunction.bind(this);
  this.handleTextChange = this.handleTextChange.bind(this);
  this.removeItem = this.removeItem.bind(this);

}

handleTextChange(event) {
	this.setState({textareaText : event});
};

actionOnClickFunction(){
	console.log(this.state.textareaText);
	var id = Math.floor(Math.random() * 99999);
	this.setState({
		articles: this.state.articles.concat({value:this.state.textareaText, id:id})
	});
}

removeItem(itemId){
	console.log(itemId);

	var array = this.state.articles.filter(function(item) {
		return item.id !== itemId
	});

	this.setState({
		articles: array
	});

};

render() {
	return (
	  <div className="App">
	  <div className="App-header">
	  <img src={logo} className="App-logo" alt="logo" />
	  <h2>Welcome to React</h2>
	  </div>
	  <Textarea value={this.state.textareaText} onTextChange={this.handleTextChange}></Textarea>
	  <Submit actionOnClick={ this.actionOnClickFunction }></Submit>
	  {
		  this.state.articles.map((item) => (
			  <Article key={item.id} id={item.id} value={item.value} actionOnClick={this.removeItem}/>
		  ))
	  }
	  </div>
	  );
}
}

export default App;