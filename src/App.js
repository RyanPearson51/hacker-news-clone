import React, {useEffect, useState} from 'react';

import SearchForm from './components/SearchForm';
import Articles from './components/Articles';

import './App.css';

let url = ''
let authorInput = ""
let dateInput = ""

function App () {

  // const epochDate = new Date("20031980").getTime()
  // console.log(epochDate)

  //this is for author, even though it's called state
  const [state, setState] = useState([])
  //date data/ state
  const [searchDate, setSearchDate] = useState([])
  //data that are sent to Articles.js to be rendered
  //as a results list
  const [articleData, setArticleData] = useState([])
  
 
 
  
   const search = (event) => {
    event.preventDefault();
    //if dateInput exists, search by date URL
    //if authorInput exists, search by author URL
    //NEED TO: deal with errors?
    if (dateInput){
      //convert date input into a date in seconds
      const dateToSeconds = new Date(dateInput).getTime()
      console.log("dateToSeconds: ", dateToSeconds)

      //reduce date in seconds to string of 10
      //to match api db
      //this is labeled startOfDay because it has the date in seconds
      //for only the date, not the date and a time
      const startOfDay = dateToSeconds.toString().slice(0,10);

      //because the API db has the exact date and time in seconds
      //and we only have the start of the day
      //this calculates the end of the day
      const endOfDay = (startOfDay + 86400)

      //search for dates between the start and end of the date input
      url = `http://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i>=${startOfDay}&&<${endOfDay}`
      //reset the input to blank
      // dateInput = ''
    }else if(authorInput){
      url = `https://hn.algolia.com/api/v1/search?tags=story,author_${state}`
    }
    
    //fetch all stories that match the criteria
    //based on the url
    fetch(url)
   .then((res)=>res.json())
   .then((data)=> setArticleData(data))
   console.log("articleData in search(): ", articleData)
   }
  
  const handleChange = (event) => {
    event.preventDefault();
    //set the state for the data
    //based on which input has data
    if (event.target.name === "authorInput") {
      setState(event.target.value)
      console.log("the input is authorInput")
      authorInput = event.target.value
      console.log("authorInput in handleChange()", authorInput)
    } else if (event.target.name === "dateInput") {
      setSearchDate(event.target.value)
      console.log("the input is dateInput")
      dateInput = event.target.value
    }
  }
  
    return  (
      <div className="App">
        <header className="App-header">
          <h1>Search for Hacker News</h1>
          <p>This is search form
            <SearchForm state={state} authorInput ={authorInput} searchDate={searchDate} handleChange={handleChange}  search={search} url={url}/>
            <Articles articleData={articleData} /> 
          </p>
    
        </header>
      </div> 
    )
  
}
//crap I don't think we need, taken out of context so it's probably useless, anyway, but I hate to delete things:
 // useEffect(() => {
  //   console.log('I mounted')
  //   fetch(url)
  //   .then((res)=>res.json())
  //   .then((data)=> setState(data))
  // }, [])
  //this works with the beer API :)
  // useEffect(()=> {
  //   console.log('I updated')
  //   console.log("state in testing useEffect: ", state)
  // }, [state])


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