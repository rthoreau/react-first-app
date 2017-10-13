import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';
import Article from './Article';
import dummy from './dummy';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      articles: [],
      data: dummy,
      filteredData: dummy,
      saved:
        localStorage.getItem('pictureSaved') != undefined
          ? localStorage.getItem('saved')
          : [],
    };
    console.log(dummy);
    this.save = this.save.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(event) {
    this.setState({ searchValue: event });

    if (event === '') {
      this.setState({ filteredData: this.state.data });
    } else {
      var tempData = [];

      for (var i = 0; i < this.state.data.length; i++) {
        if (
          this.state.data[i].username
            .toLowerCase()
            .indexOf(event.toLowerCase()) >= 0
        ) {
          tempData.push(this.state.data[i]);
        }
      }
      this.setState({ filteredData: tempData });
    }
  }

  save(id) {
    var temp = localStorage.getItem('pictureSaved')
      ? localStorage.getItem('pictureSaved')
      : [];
    temp.push(id);
    localStorage.setItem('pictureSaved', temp);

    this.setState({ saved: localStorage.getItem('pictureSaved') });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Search
          value={this.state.searchValue}
          onTextChange={this.handleTextChange}
        />
        {this.state.filteredData.map(item => (
          //Pour le onClick react l'appel au render, il faut donc se baser sur un callback grâce à une fonction anonyme
          <Article
            key={item.id}
            id={item.id}
            value={item.username}
            picture={item.picture}
            save={this.save}
            saved={this.state.saved.indexOf(item.id) >= 0 ? true : false}
          />
        ))}
      </div>
    );
  }
}

export default App;
