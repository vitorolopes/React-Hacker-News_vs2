import React from 'react';
import { useStateContext } from '../context/StateContextProvider';


const Buttons = () => {

  const {pageNumber, handlePageNumber, nbPages} = useStateContext();

  return (
    <div className='btn-container'>
      <button
              onClick={() => handlePageNumber("prev")}
      >
        prev
      </button>
      <p>{pageNumber + 1} of {nbPages}</p>
      <button
              onClick={ () => handlePageNumber("next")}
      >
        next
      </button>
    </div>
  )
}

export default Buttons