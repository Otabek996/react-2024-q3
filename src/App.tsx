import { Component } from 'react';
import axios from 'axios';
import SearchInput from './components/SearchInput/SearchInput';
import SearchButton from './components/SearchButton/SearchButton';
import './App.css';

interface AppState {
  inputValue: string;
  data: string;
  error: string | null;
}

class App extends Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      inputValue: '',
      data: '',
      error: null,
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  api = {
    fetchData: async () => {
      let URL = `https://swapi.dev/api/`;

      if (this.state.inputValue != '') {
        URL = `https://swapi.dev/api/${this.state.inputValue}`;
      }

      return await axios
        .get(URL)
        .then((res) => res)
        .catch((err) => err);
    },
  };

  handleButtonClick = async () => {
    try {
      const response = await fetch(
        `https://swapi.dev/api/${this.state.inputValue}`,
      );
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const jsonData = await response.json();
      this.setState({ data: jsonData, error: null });
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.setState({ error: error.message, data: '' });
      } else {
        this.setState({ error: 'An unknown error occurred', data: '' });
      }
    }
  };

  render() {
    const { inputValue, data, error } = this.state;

    return (
      <div className="container">
        <header>
          <nav className="navbar">
            <SearchInput value={inputValue} onChange={this.handleInputChange} />
            <SearchButton onClick={this.handleButtonClick} />
          </nav>
        </header>

        <main>
          {error && <p>Error: {error}</p>}
          {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </main>
      </div>
    );
  }
}

export default App;
