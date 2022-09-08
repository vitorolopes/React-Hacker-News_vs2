const reducer = (prevState, action) => {

    switch(action.type){
        case "SET_NEWS": {
            const newState = {
                ...prevState,
                news: action.payload
            }
            return newState
        }

        case "SET_LOADING" : {
            const newState = {
                ...prevState,
                loading: action.payload
            }
            return newState
        }

        case "SET_SEARCH-TERM" : {
            const newState = {
                ...prevState,
                searchTerm: action.payload
            }
            return newState
        }

        case "REMOVE_ARTICLE" : {
            const newState = {
                ...prevState,
                news: prevState.news.filter( element => element.objectID !== action.payload)
            }
            return newState
        }

        default:
            return prevState
    }
}

export default reducer