import { Component } from 'react';
import './SearchInput.css';

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class SearchInput extends Component<InputProps> {
  render() {
    return (
      <input
        type="text"
        value={this.props.value}
        onChange={this.props.onChange}
        placeholder="Search something..."
      />
    );
  }
}

export default SearchInput;
