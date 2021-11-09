import React from 'react';
import SearchForm from './components/SearchForm';
import Articles from './components/Articles';
import './App.css';

class App extends React.Component {
  state = {
        keywordInput: '',
        authorInput: '',
        dateInput: '',
        dateInSeconds: '',
        relatedArticles: []
  }


  handleChange = (event) => {
    const epochDate = new Date(event.target.value).getTime();
    const searchDate = epochDate.toString().slice(0,10);
    this.setState({
      [event.target.name]: event.target.value,
      dateInSeconds: searchDate
    })
  }

  search = (event) => {
    event.preventDefault();
    const author = this.state.authorInput;
    const date = this.state.dateInSeconds;
    let url = '';

    if(author) {
      url = `https://hn.algolia.com/api/v1/search?tags=story,author_${author}`;
    } else if(date) {
      url=`http://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i>${date}`
    } else {
      alert("Please enter search criteria in at least one input");
    }

    fetch(url)
        .then(response => response.json())
        .then(data => this.setState({
          relatedArticles: data.hits,
          authorInput: '',
        }))
        .catch(error => console.log(`Error, ${error}`))
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>News Feed</h1>
          <SearchForm 
            search={this.search} 
            handleChange={this.handleChange} 
            authorInput={this.state.authorInput} 
            dateInput={this.state.dateInput} 
          />
          <Articles relatedArticles={this.state.relatedArticles} />
        </header>
      </div>
    )
  }
}

export default App;









/*import React, {useState, useEffect} from "react";
import Articles from './components/Articles'

//need to add api link
const API_URL = ``

function App() {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setArticles(data));
      console.log('i mounted')
  }, [])


  return (
    <div className="App">
      <Articles articles={articles}/>
    </div>
  );
}

export default App;
*/