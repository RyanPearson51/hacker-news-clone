
import React  from 'react'
//import Article from './Article'

export default function Articles (props) {
  return (
    <div>
    <ul>
      {props.articleData.map((article, index) => {
          return (
              <li className="list">
                  <h3>{props.article.hits.title}<a href={props.article.hits.url} id={"url"}>{` (${props.article.hits.url})`}</a></h3>
              </li>
          )
      })}
      </ul>
      </div>
      )
}

