import { Component } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import SearchButton from '../SearchButton/SearchButton';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <SearchInput />
        <SearchButton />
      </nav>
    );
  }
}

export default Navbar;
