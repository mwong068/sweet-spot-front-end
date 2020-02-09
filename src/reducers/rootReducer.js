const initialState = {
    currentUser: [],
    loading: false,
    products: [],
    cart: [],
    currentOrder: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNING_UP':
            return {...state, loading: true}
        case 'LOGGING_IN':
            return {...state, loading: true}
        case 'AUTHENTICATING':
            return {...state, loading: true}
        case 'SET_CURRENT_USER':
            return {...state, currentUser: action.currentUser, loading: false}
        case 'UPDATING_USER':
            return {...state, loading: true}
        case 'USER_UPDATED':
            return {...state, currentUser: action.currentUser, loading: false}
        case 'LOGOUT':
            return {...state, currentUser: {}}
        case 'GETTING_PRODUCTS':
            return {...state, loading: true}
        case 'SET_PRODUCTS':
            return {...state, products: action.products, loading: false}
        case 'MAKING_NEW_ORDER':
            return {...state, loading: true}
        case 'CREATE_NEW_ORDER':
            return {...state, currentOrder: action.currentOrder, loading: false}
        case 'ADDING_PRODUCT_TO_CART':
            return {...state, loading: true}
        case 'ADDED_TO_CART':
            return {...state, cart: action.cart, loading: false}
        // case 'ADD_TO_CART':
        //     return {...state, cart: this.state.cart += action.cart}
        case 'FETCHING_ITEMS':
            return {...state, loading: true}
        case 'SHOW_CART_ITEMS':
            return {...state, cart: action.cart, loading: false}
        default:
            return state;
    }
}

export default rootReducer;