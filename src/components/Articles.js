import React  from 'react'
import Article from './Article'

export default function Articles(props) {
    return (
        <div>
        <ul>
            {props.articles.map((article) => {

                return(
                    <Article article={article}/>
                )
            })}
        </ul>
        </div>
    )
}
