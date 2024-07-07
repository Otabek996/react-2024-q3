import { Component } from 'react';
import api from './services/api';
import SearchInput from './components/SearchInput/SearchInput';
import SearchButton from './components/SearchButton/SearchButton';
import './App.css';

interface AppState {
  inputValue: string;
  apiData: string;
}

class App extends Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      inputValue: '',
      apiData: '',
    };
  }

  getData = () => {
    api.fetchData().then((res) => {
      this.setState({ apiData: res.data.people });
    });
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  handleButtonClick = () => {
    this.getData();
    console.log(this.state.apiData);
  };

  render() {
    return (
      <div className="container">
        <header>
          <nav className="navbar">
            <SearchInput
              value={this.state.inputValue}
              onChange={this.handleInputChange}
            />
            <SearchButton onClick={this.handleButtonClick} />
          </nav>
        </header>

        <p>{ this.state.apiData }</p>
      </div>
    );
  }
}

export default App;
