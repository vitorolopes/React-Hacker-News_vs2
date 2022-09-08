import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from './reducer'

const StateContext = createContext()

const initialState = {
    news: [],
    loading: false,
    searchTerm: "REACT",
    pageNumber: 0,
    nbPages: 0
}

const API_ENDPOINT = "http://hn.algolia.com/api/v1/search?query="

export const StateContextProvider = ({children}) => { 

    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchNews = async () => {
        dispatch({type: "SET_LOADING", payload: true})
        try {    
            const res = await fetch(`${API_ENDPOINT}${state.searchTerm}&page=${state.pageNumber}`)
            const data = await res.json()
            console.log(data)
            dispatch({type: "SET_NEWS", payload: {news: data.hits, nbPages: data.nbPages}})
            dispatch({type: "SET_LOADING", payload: false})
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      fetchNews()
    }, [state.searchTerm, state.pageNumber])
    
    const setSearchTerm = (newSearchTerm) => { 
        dispatch({type: "SET_SEARCH-TERM", payload: newSearchTerm})
    }

    const removeArticle = (id) => {
        dispatch({type: "REMOVE_ARTICLE", payload: id})
    }

    const handlePageNumber = (PrevOrNext) => { 
        dispatch({type: "HANDLE_PAGE-NUMBER", payload: PrevOrNext})
    }

    return(
        <StateContext.Provider
            value={{
                ...state,
                setSearchTerm,
                removeArticle,
                handlePageNumber
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)