
// take in a brand that I clicked on and pass that information into my filter

//action
const ADD_FILTER = 'ADD_FILTER';
const addFilter = (payload) => {
    return {
        type: ADD_FILTER,
        payload
    }
}





const initialState = {
    data: ""
};

const browsePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FILTER:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
};


export default browsePageReducer
