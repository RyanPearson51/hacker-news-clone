import React,{useEffect, useState}  from 'react'


const SearchForm = (props) => {
  console.log("state passed as props to SearchForm props.state: ", props.state)
   //console.log("articleData passed as props to SearchForm props.state: ", props.articleData)
  
  
  return (
    <div>
      <form onSubmit={props.search}>
        <input 
          name="authorInput"
          type="text"
          //value={props.authorInput} 
          value={props.state}
          //onChange={props.handleChange} 
          onChange={props.handleChange}
          placeholder="Search by author"
        />
        <input 
          name="dateInput"
          type="date"
          value={props.dateInput} 
          onChange={props.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
    
  )
}

export default SearchForm;

/*import React from 'react'
export default function SearchForm() {
    return (
        <div>
            
        </div>
    )
}*/