const GET_ALL_APPAREL = 'apparel/getAllApparel'
const GET_APPAREL = 'apparel/getApparel'
const CREATE_APPAREL = 'apparel/createApparel'
const CREATE_IMAGE = 'image/createImage'


const getAll = (payload) => {
    return {
        type: GET_ALL_APPAREL,
        payload
    }
}


const get = (payload) => {
    return {
        type: GET_APPAREL,
        payload
    }
}


const create = (payload) => {
    return {
        type: CREATE_APPAREL,
        payload
    }
}

const createImage = (id, payload) => {
    return {
        type: CREATE_IMAGE,
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

export const getApparelThunk = (id) => async dispatch => {
    const response = await fetch(`/api/apparel/${id}`)
    if (response.ok) {
        let apparel = await response.json()
        dispatch(get(apparel))
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

export const createImageThunk = (id, payload) => async dispatch => {
    const response = await fetch(`/api/image/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    if (response.ok) {
        let image = await response.json()
        dispatch(createImage(image))
        return image
    }


}



const initialState = {}
const apparelReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case GET_ALL_APPAREL: {
            newState = {}
            action.payload.apparels.forEach(item => newState[item.id] = item)
            return newState
        }
        case GET_APPAREL: {
            newState = { ...state }
            // action.payload.apparels.forEach(item => newState[item.id] = item)
            newState[action.payload.id] = { ...action.payload }
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
