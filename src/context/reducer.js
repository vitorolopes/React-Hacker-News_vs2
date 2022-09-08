const reducer = (prevState, action) => {

    switch(action.type){
        case "SET_NEWS": {
            const newState = {
                ...prevState,
                news: action.payload.news,
                nbPages: action.payload.nbPages
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

        case "HANDLE_PAGE-NUMBER" : {
            if(action.payload === "prev" && prevState.pageNumber === 0){
                const newState = {
                    ...prevState,
                    pageNumber: prevState.nbPages - 1
                }
                return newState
            } else if(action.payload === "next" && prevState.pageNumber === prevState.nbPages - 1){
                const newState = {
                    ...prevState,
                    pageNumber: 0
                }
                return newState
            } else {
                const newState = {
                    ...prevState,
                    pageNumber : action.payload === "next" ? prevState.pageNumber + 1 : prevState.pageNumber - 1
                }
                return newState
            }
        }
        default:
            return prevState
    }
}

export default reducer