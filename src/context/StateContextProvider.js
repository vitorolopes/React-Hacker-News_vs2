import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from './reducer'

const StateContext = createContext()

const initialState = {
    news: [],
    loading: false
}

export const StateContextProvider = ({children}) => { 

    // const [news, setNews] = useState([])
    // const [loading, setLoading] = useState(false)

    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchNews = async () => {
        // setLoading(true)
        dispatch({type: "SET_LOADING", payload: true})
        const res = await fetch("http://hn.algolia.com/api/v1/search?query=UKRAINE")
        const data = await res.json()
        console.log(data.hits)
        // setNews(data.hits)
        dispatch({type: "SET_NEWS", payload: data.hits})
        // setLoading(false)
        dispatch({type: "SET_LOADING", payload: false})
    }

    useEffect(() => {
      fetchNews()
    }, [])
    

    return(
        <StateContext.Provider
            value={{
                ...state
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)