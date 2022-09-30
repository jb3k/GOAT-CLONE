const GET_ALL_APPAREL = 'apparel/getAllApparel'
const CREATE_APPAREL = 'apparel/createApparel'



const getAll = (payload) => {
    return {
        type: GET_ALL_APPAREL,
        payload
    }
}

const create = (payload) => {
    return {
        type: CREATE_APPAREL,
        payload
    }
}


//thunks
export const getAllApparelThunk = () => async dispatch => {
    const response = await fetch('/api/apparel/')
    if (response.ok) {
        let apparel = await response.json()
        dispatch(getAll(apparel))
        return apparel
    }
}
export const createApparelThunk = (payload) => async dispatch => {
    const response = await fetch(`/api/apparel/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    if (response.ok) {
        const post = await response.json()
        dispatch(create(post))
    }
}


const initialState = {}
const apparelReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case GET_ALL_APPAREL: {
            newState = {}
            action.payload.apparels.forEach(apparel => newState[apparel.id] = apparel)
            return newState
        }
        case CREATE_APPAREL: {
            const newState = { ...state }
            newState[action.payload.id] = action.payload
            return newState
        }
        default:
            return state
    }
}

export default apparelReducer
