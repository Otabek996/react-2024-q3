import { Component } from 'react';
import api from './services/api';
import Navbar from './components/Navbar/Navbar';
import './App.css';

class App extends Component {
  state = {
    category: '',
  };

  getData = () => {
    api.fetchData().then((res) => {
      const category = res.data.people;
      this.setState({ category });
    });
  };

  render() {
    return (
      <div className="container">
        <header>
          <Navbar />
        </header>

        <button onClick={this.getData}>click</button>
        <p>{this.state.category}</p>
      </div>
    );
  }
}

export default App;
