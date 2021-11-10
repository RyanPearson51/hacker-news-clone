import React, {useEffect, useState} from 'react';

import SearchForm from './components/SearchForm';
import Articles from './components/Articles';

import './App.css';

const URL = 'https://api.punkapi.com/v2/beers'
function App () {

  //I went for generic state, setState, 
  //bc I'm hoping we will only need to do this once?
  const [state, setState] = useState([])

  useEffect(() => {
    console.log('I mounted')
    fetch(URL)
    .then((res)=>res.json())
    .then((data)=> setState(data))
  }, [])

  //this is connected
  //and I think it sets the state or holds the data
  //for the author and date fields
  //but I'm not sure how to adjust this
  //using functional programming
  const search = (event) => {
    event.preventDefault();
    console.log('I am searching')

    // const author = this.state.authorInput;
    //   const date = this.state.dateInSeconds;
    //   let url = '';
  }

  
    return  (
      <div className="App">
        <header className="App-header">
          <h1>News Feed!</h1>
          {/* I think, instead of mapping over data here
          this will just be the Search Form object
          e.g., < SearchForm/>
          with state passed as a prop?
          bc on the Search Form, we don't need to loop over data
          the loop only happens when something is searched for
          which will be the Articles component */}
      
          <p>This is search form
            <SearchForm state={state} search={search}/>
            {/* This is just copy-pasted from the OOP version
              <SearchForm 
            search={this.search} 
            handleChange={this.handleChange} 
            authorInput={this.state.authorInput} 
            dateInput={this.state.dateInput} 
            />
            <Articles relatedArticles={this.state.relatedArticles} /> */}
          </p>
    
        </header>
      </div> 
    )
  //this works with the beer API :)
  // useEffect(()=> {
  //   console.log('I updated')
  //   console.log("state in testing useEffect: ", state)
  // }, [state])

  //I think the FP equivalent is 
  //const [state, setState] = useState([])
  //but I'm not certain
  //so I'm saving this for reference:
  // state = {
  //       keywordInput: '',
  //       authorInput: '',
  //       dateInput: '',
  //       dateInSeconds: '',
  //       relatedArticles: []
  // }


  // handleChange = (event) => {
  //   const epochDate = new Date(event.target.value).getTime();
  //   const searchDate = epochDate.toString().slice(0,10);
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //     dateInSeconds: searchDate
  //   })
  // }


  //   if(author) {
  //     url = `https://hn.algolia.com/api/v1/search?tags=story,author_${author}`;
  //   } else if(date) {
  //     url=`http://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i>${date}`
  //   } else {
  //     alert("Please enter search criteria in at least one input");
  //   } 
}


//----------------OOP version of App.js pg------------------------------
// class App extends React.Component {
//   state = {
//         keywordInput: '',
//         authorInput: '',
//         dateInput: '',
//         dateInSeconds: '',
//         relatedArticles: []
//   }


//   handleChange = (event) => {
//     const epochDate = new Date(event.target.value).getTime();
//     const searchDate = epochDate.toString().slice(0,10);
//     this.setState({
//       [event.target.name]: event.target.value,
//       dateInSeconds: searchDate
//     })
//   }

//   search = (event) => {
//     event.preventDefault();
//     const author = this.state.authorInput;
//     const date = this.state.dateInSeconds;
//     let url = '';

//     if(author) {
//       url = `https://hn.algolia.com/api/v1/search?tags=story,author_${author}`;
//     } else if(date) {
//       url=`http://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i>${date}`
//     } else {
//       alert("Please enter search criteria in at least one input");
//     }

//     fetch(url)
//         .then(response => response.json())
//         .then(data => this.setState({
//           relatedArticles: data.hits,
//           authorInput: '',
//         }))
//         .catch(error => console.log(`Error, ${error}`))
//   }


//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1>News Feed</h1>
//           <SearchForm 
//             search={this.search} 
//             handleChange={this.handleChange} 
//             authorInput={this.state.authorInput} 
//             dateInput={this.state.dateInput} 
//           />
//           <Articles relatedArticles={this.state.relatedArticles} />
//         </header>
//       </div>
//     )
//   }
// }

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