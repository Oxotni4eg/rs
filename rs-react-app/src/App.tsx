// App.tsx
import React, { Component } from 'react';
import Header from './component/Header';
import CardList from './component/CardList';
import Spinner from './component/Spinner';

type SearchResult = {
  url: string;
  name: string;
  model: string;
};

type State = {
  results: SearchResult[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
};

class App extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      results: [],
      loading: false,
      error: null,
      searchTerm: localStorage.getItem('searchTerm') || '',
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    const apiUrl = `https://swapi.dev/api/vehicles/?search=${searchTerm.trim()}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        // Обработка ошибки сети
        this.setState({ error: 'Network response was not ok', loading: false });
        return; // Завершаем функцию, чтобы избежать дальнейшего выполнения
      }
      const data = await response.json();
      this.setState({ results: data.results, loading: false });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error occurred';
      this.setState({ error: errorMessage, loading: false });
    }
  };

  handleSearch = () => {
    this.setState({ results: [] });
    localStorage.setItem('searchTerm', this.state.searchTerm);
    this.fetchData();
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    const { results, loading, error, searchTerm } = this.state;

    return (
      <div>
        <Header
          searchTerm={searchTerm}
          onInputChange={this.handleInputChange}
          onSearch={this.handleSearch}
        />
        {loading && <Spinner />}
        {error && <div>Error: {error}</div>}
        <CardList results={results} />
      </div>
    );
  }
}

export default App;
