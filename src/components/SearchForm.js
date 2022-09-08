import React, {useState} from 'react';
import { useStateContext } from '../context/StateContextProvider';


const SearchForm = () => {

  const {searchTerm, setSearchTerm} = useStateContext()

  return (
      <form className="search-form">
        <h1>Search hacker news</h1>
        <input type="text" className="form-input" placeholder='react'
               value={searchTerm}  
               onChange={e => setSearchTerm(e.target.value)}                  
        />
      </form>
  )
}

export default SearchForm