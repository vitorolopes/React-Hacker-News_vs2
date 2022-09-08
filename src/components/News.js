import React from 'react';
import { useStateContext } from '../context/StateContextProvider';


const News = () => {

  const {news, loading} = useStateContext()
  
  if(loading) return (<div className='loading'></div>)

  return (
    <article className='stories'>
        <div className="story">
            <h4 className="title"> story1</h4>
            <p className="info">info1</p>
            <div>
                <a className="read-link" href='/'>read more</a>
                <button className="remove-btn">remove</button>
            </div>
        </div>

        <div className="story">story2</div>
        <div className="story">story3</div>

    </article>
  )
}

export default News