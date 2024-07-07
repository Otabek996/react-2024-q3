import { Component } from 'react';
import './SearchButton.css';

interface ButtonProps {
  onClick: () => void;
}

class SearchButton extends Component<ButtonProps> {
  render() {
    return (
      <button type="submit" onClick={this.props.onClick}>
        Search
      </button>
    );
  }
}

export default SearchButton;
