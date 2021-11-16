
import React  from 'react'
//import Article from './Article'


export default function Articles (props) {
  return (
    <div>
    <ul>
      {props.articleData.map((article, index) => {
          return (
              <li className="list">

                  <h3>{article.title}</h3><a href={article.url} id={"url"}>{` (${article.url})`}</a>

              </li>
          )
      })}
      </ul>
      </div>
      )
}

