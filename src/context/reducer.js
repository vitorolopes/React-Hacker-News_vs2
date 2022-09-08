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

        default:
            return prevState
    }
}

export default reducer