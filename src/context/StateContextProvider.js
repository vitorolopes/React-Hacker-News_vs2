import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from './reducer'

const StateContext = createContext()

const initialState = {
    news: [],
    loading: false,
    searchTerm: "REACT"
}

export const StateContextProvider = ({children}) => { 

    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchNews = async () => {
        dispatch({type: "SET_LOADING", payload: true})
        const res = await fetch(`http://hn.algolia.com/api/v1/search?query=${state.searchTerm}`)
        const data = await res.json()
        console.log(data)
        dispatch({type: "SET_NEWS", payload: data.hits})
        dispatch({type: "SET_LOADING", payload: false})
    }

    useEffect(() => {
      fetchNews()
    }, [state.searchTerm])
    
    const setSearchTerm = (newSearchTerm) => { 
        dispatch({type: "SET_SEARCH-TERM", payload: newSearchTerm})
    }

    const removeArticle = (id) => {
        dispatch({type: "REMOVE_ARTICLE", payload: id})
    }

    return(
        <StateContext.Provider
            value={{
                ...state,
                setSearchTerm,
                removeArticle
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)