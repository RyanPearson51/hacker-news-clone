import React,{useEffect, useState}  from 'react'


const SearchForm = ({state, authorInput, searchDate, handleChange, search, handleClick, dateInput}) => {
  console.log("state passed as props to SearchForm state: ", state)
  console.log("searchDate passed as props to SearchForm: ", searchDate)
   //console.log("articleData passed as props to SearchForm props.state: ", props.articleData)
  
  
  return (
    <div>
      <form onSubmit={search}>
        <input 
          name="authorInput"
          type="text"
          //value={props.authorInput} 
          value={authorInput}
          //onChange={props.handleChange} 
          onChange={handleChange}
          onClick={handleClick}
          placeholder="Search by author"
        />
        <input 
          name="dateInput"
          type="date"
          // value={searchDate} 
          value={dateInput}
          onChange={handleChange}
          onClick={handleClick}
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