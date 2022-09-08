import React from 'react';
import { useStateContext } from '../context/StateContextProvider';


const News = () => {

  const {news, loading} = useStateContext()
  
  if(loading) return (<div className='loading'></div>)

  return (
    <article className='stories'>

        {news.map( element => {
            const {title, points, author, num_comments, url, objectID} = element
            return (
                <div className="story" key={objectID}>
                    <h4 className="title">{title}</h4>
                    <p className="info">{points} points by {author} | {num_comments} comments</p>
                    <div>
                        <a className="read-link" href={url}>read more</a>
                        <button className="remove-btn">remove</button>
                    </div>
                </div>
            )
        })}

    </article>
  )
}

export default News