import React, { createContext, useContext, useEffect, useState } from 'react';

const StateContext = createContext()

export const StateContextProvider = ({children}) => { 

    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchNews = async () => {
        setLoading(true)
        const res = await fetch("http://hn.algolia.com/api/v1/search?query=UKRAINE")
        const data = await res.json()
        console.log(data.hits)
        setLoading(false)
    }

    useEffect(() => {
      fetchNews()
    }, [])
    

    return(
        <StateContext.Provider
            value={{
                news,
                loading
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)