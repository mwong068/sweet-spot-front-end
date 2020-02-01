const initialState = {
    currentUser: null,
    loading: false
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNING_UP':
            return {...state, loading: true}
        case 'LOGGING_IN':
            return {...state, loading: true}
        case 'SET_CURRENT_USER':
            return {...state, currentUser: action.currentUser, loading: false}
        default:
            return state;
    }
}

export default rootReducer;