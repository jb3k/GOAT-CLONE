const GET_ALL_LISTINGS = 'listings/getAllListings'
const CREATE_LISTING = 'listings/createListings'
const UPDATE_LISTING = 'listings/updateListings'
const DELETE_LISTING = 'listings/deleteListings'

//actions
const getAll = (payload) => {
    return {
        type: GET_ALL_LISTINGS,
        payload
    }
}

const create = (payload) => {
    return {
        type: CREATE_LISTING,
        payload
    }
}

const update = (payload) => {
    return {
        type: UPDATE_LISTING,
        payload
    }
}

const remove = (id) => {
    return {
        type: DELETE_LISTING,
        id
    }
}

//thunks

export const getAllListingsThunk = () => async dispatch => {
    const response = await fetch('/api/listing/')
    if (response.ok) {
        let listings = await response.json()
        dispatch(getAll(listings))
        return listings
    }
}
export const createListingsThunk = (id, payload) => async dispatch => {
    const response = await fetch(`/api/apparel/${id}/listings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    if (response.ok) {
        const post = await response.json()
        dispatch(create(post))
    }
}

export const editListingsThunk = (id, payload) => async dispatch => {
    const response = await fetch(`/api/listing/shoe/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const listings = await response.json()
        dispatch(update(listings))
    }
}


export const deleteListingsThunk = (id) => async dispatch => {
    const response = await fetch(`/api/listing/shoe/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(id)
    })
    if (response.ok) {
        dispatch(remove(id))
    }
}



const initialState = {}
const listingReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case GET_ALL_LISTINGS: {
            newState = {}
            action.payload.listings.forEach(post => newState[post.id] = post)
            return newState
        }
        case CREATE_LISTING: {
            const newState = { ...state }
            newState[action.payload.id] = action.payload
            return newState
        }
        case UPDATE_LISTING: {
            const newState = { ...state }
            newState[action.payload.id] = action.payload
            return newState

        }
        case DELETE_LISTING: {
            const newState = { ...state }
            delete newState[action.id]
            return newState
        }

        default:
            return state
    }
}

export default listingReducer
