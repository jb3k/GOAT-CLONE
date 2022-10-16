const SEARCH_ALL_APPAREL = 'search/searchAllApparel'



const getAll = (payload) => {
    return {
        type: SEARCH_ALL_APPAREL,
        payload
    }
}

//thunks
export const searchAllApparelThunk = () => async dispatch => {
    const response = await fetch('/api/apparel/')
    if (response.ok) {
        let apparel = await response.json()
        dispatch(getAll(apparel))
        return apparel
    }
}



const initialState = {}
const searchReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case SEARCH_ALL_APPAREL: {
            newState = {}
            action.payload.apparels.forEach(item => newState[item.id] = item)
            return newState
        }
        default:
            return state
    }
}

export default searchReducer
