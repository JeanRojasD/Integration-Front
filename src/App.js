import React, { Component } from 'react';
import api from './api';



class App extends Component {

  state = {
    test: [],
  }

  async componentDidMount() {

    const response = await api.get('');

    console.log(response);

  }


  render() {

    return (
      <div>
        <h1>Resposta no console</h1>
      </div>
    );
  }
}

export default App;
