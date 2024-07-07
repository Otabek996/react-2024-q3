import { Component } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import SearchButton from '../SearchButton/SearchButton';
import './Navbar.css';

interface NavbarState {
  inputValue: string;
}

class Navbar extends Component<object, NavbarState> {
  constructor(props: object) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  handleButtonClick = () => {
    console.log(this.state.inputValue);
  };

  render() {
    return (
      <nav className="navbar">
        <SearchInput
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <SearchButton onClick={this.handleButtonClick} />
      </nav>
    );
  }
}

export default Navbar;
