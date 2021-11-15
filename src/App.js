import React, {useEffect, useState} from 'react';

import SearchForm from './components/SearchForm';
import Articles from './components/Articles';

import './App.css';

let url = ''
// let author = '' 
let authorInput = false
function App () {

  //I went for generic state, setState, 
  //bc I'm hoping we will only need to do this once?
  const [state, setState] = useState([])
  
  // useEffect(() => {
  //   console.log('I mounted')
  //   fetch(url)
  //   .then((res)=>res.json())
  //   .then((data)=> setState(data))
  // }, [])

 
  
   const search = (event) => {
    
    event.preventDefault();
    console.log("state in search() upon submit: ", state)
    console.log("url in search(): ", url)
    console.log("authorInput: ", authorInput)
    if (authorInput === true ){
    url = `https://hn.algolia.com/api/v1/search?tags=story,author_${state}`
    }
    console.log("url: ", url)
    fetch(url)
   .then((res)=>res.json())
   .then((data)=> setState(data))

     //this is assigning the author input to the variable author,
     //but I haven't gotten or don't know how authorInput was obtained
     // const author = this.state.authorInput;
     //   const date = this.state.dateInSeconds;
    
     //just to test accessing the API
    //  url = 'http://hn.algolia.com/api/v1/items/1'
     //   if(author) {
     //nope, this gets error "Cannot read property "type" of undefined"
     //console.log("calling useEffect in search():  ", useEffect())
   //   } else if(date) {
   //     url=`http://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i>${date}`
   //   } else {
   //     alert("Please enter search criteria in at least one input");
   //   } 
   
   
   }
  
  const handleChange = (event) => {
    event.preventDefault();
    // console.log("event.target.name in handleChange()", event.target.name)
    setState(event.target.value)
   
    // console.log("author in handleChange: ", author)
  if (event.target.name === "authorInput") {
    console.log("the input is authorInput")
    authorInput = true
    console.log("authorInput in handleChange()", authorInput)
  }
  
    // if (event.target.name === "authorInput"){
    //   console.log("this is an author input")
    //   let authorInput = setState(event.target.value)
    //   return authorInput
    // }
    

    // console.log("event.target.value in handleChange(): ", event.target.value )
    // const epochDate = new Date(event.target.value).getTime();
    // const searchDate = epochDate.toString().slice(0,10);
    // this.setState({
    //   [event.target.name]: event.target.value,
    //   dateInSeconds: searchDate
    // })
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
            <SearchForm state={state} handleChange={handleChange}  search={search} url={url}/>
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