import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Ron from './components/Generate/Generate';
import Craft from './components/Craft/Craft';
import Name from './components/Cards/Name';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: []
    };
  }

  componentDidMount() {
    axios.get('/api/quotes');
  }

  render() {
    return (
      <div className='App'>
        <header>
          <Name />
        </header>

        <Ron quote={this.state.quotes} />

        <hr className='linebreak' />

        <div>
          <Craft />
        </div>
      </div>
    );
  }
}

export default App;
