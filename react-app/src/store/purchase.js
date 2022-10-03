// const GET_ALL_PURCHASES = 'listings/getAllListings'
// const GET_PURCHASE = 'listing/getListings'
const GET_CURR_PURCHASE = 'purchase/getCurrPurchases'
const CREATE_PURCHASE = 'purchases/createPurchases'
const UPDATE_PURCHASE = 'purchases/updatePurchases'
const DELETE_PURCHASE = 'purchases/deletePurchases'

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


export const createPurchaseThunk = (id, payload) => async dispatch => {

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



export const editPurchaseThunk = (id, payload) => async dispatch => {
    const response = await fetch(`/api/purchase/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const purchase = await response.json()
        dispatch(update(purchase))
    }
}




export const deletePurchaseThunk = (id) => async dispatch => {
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
