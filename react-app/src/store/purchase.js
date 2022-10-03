// const GET_ALL_PURCHASES = 'listings/getAllListings'
// const GET_PURCHASE = 'listing/getListings'
const GET_CURR_PURCHASE = 'listing/getCurrListings'
const CREATE_PURCHASE = 'listings/createListings'
const UPDATE_PURCHASE = 'listings/updateListings'
const DELETE_PURCHASE = 'listings/deleteListings'

//actions
// const getAll = (payload) => {
//     return {
//         type: GET_ALL_LISTINGS,
//         payload
//     }
// }

// const get = (payload) => {
//     return {
//         type: GET_LISTING,
//         payload
//     }
// }

const getUserPurchase = (payload) => {
    return {
        type: GET_CURR_PURCHASE,
        payload
    }
}

const create = (payload) => {
    return {
        type: CREATE_PURCHASE,
        payload
    }
}

const update = (payload) => {
    return {
        type: UPDATE_PURCHASE,
        payload
    }
}

const remove = (id) => {
    return {
        type: DELETE_PURCHASE,
        id
    }
}

//thunks

// export const getAllListingsThunk = () => async dispatch => {
//     const response = await fetch('/api/listing/')
//     if (response.ok) {
//         let listings = await response.json()
//         dispatch(getAll(listings))
//         return listings
//     }
// }

// export const getListingThunk = (id) => async dispatch => {
//     const response = await fetch(`/api/listing/${id}`)
//     if (response.ok) {
//         let listing = await response.json()
//         dispatch(get(listing))
//         return listing
//     }
// }

export const getUserPurchasesThunk = () => async dispatch => {
    const response = await fetch('/api/purchase/user')
    if (response.ok) {
        let purchases = await response.json()
        dispatch(getUserPurchase(purchases))
        return purchases
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
    const response = await fetch(`/api/purchase/${id}`, {
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
    const response = await fetch(`/api/purchase/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(id)
    })
    if (response.ok) {
        dispatch(remove(id))
    }
}



const initialState = {}
const purchaseReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        // case GET_ALL_LISTINGS: {
        //     newState = {}
        //     action.payload.listings.forEach(post => newState[post.id] = post)
        //     return newState
        // }
        // case GET_LISTING: {
        //     newState = { ...state }
        //     newState[action.payload.id] = { ...newState[action.payload.id], ...action.payload }
        //     return newState
        // }
        case GET_CURR_PURCHASE: {
            newState = {}
            action.payload.purchase.forEach(item => newState[item.id] = item)
            return newState
        }
        case CREATE_PURCHASE: {
            const newState = { ...state }
            newState[action.payload.id] = action.payload
            return newState
        }
        case UPDATE_PURCHASE: {
            const newState = { ...state }
            newState[action.payload.id] = action.payload
            return newState

        }
        case DELETE_PURCHASE: {
            const newState = { ...state }
            delete newState[action.id]
            return newState
        }

        default:
            return state
    }
}

export default purchaseReducer
