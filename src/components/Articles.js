import React  from 'react'
//import Article from './Article'

 const Articles = (props) => {
//  console.log("articleData in Articles: ", props.articleData)
    return <div>
         <ul>
      {props.articleData.map((element) => {
      
          return console.log("element in map in Articles.js: ", element)
      })}
        </ul>
        
        {/* {props.relatedArticles.map(Article => (
          <div className="story-container" key={Article.objectID}>
            <h4 style={{margin: "5px"}}>{Article.title}</h4>
            <p style={{fontSize: "20px", margin: "5px"}}>Author: {Article.author}</p>
            <a href={Article.url} target="_blank" rel="noreferrer" style={{color: "white", fontSize: "18px"}}>Visit Website</a>
          </div>
        ))} */}
      </div>
  }

  export default Articles;
  
