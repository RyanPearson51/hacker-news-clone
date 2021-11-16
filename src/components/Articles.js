
import React  from 'react'
//import Article from './Article'


export default function Articles (props) {
  return (
    <div>
    <ul>
      {props.articleData.map((article, index) => {
          return (
              <li className="list" style ={ index % 2? { background : "silver" }:{ background : "gainsboro" }}>
                  <h5>{article.title}  <h4>Author: {article.author}</h4>  <a href={article.url} id={"url"}>{` (${article.url})`}</a>   </h5>
                  
              </li>
          )
      })}
      </ul>
      </div>
      )
}

