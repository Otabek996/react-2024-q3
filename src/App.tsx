import { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <Navbar />
        </header>

        <body></body>
      </div>
    );
  }
}

export default App;
