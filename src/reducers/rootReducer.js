const initialState = {
    currentUser: [],
    loading: false,
    products: [],
    displayProducts: [],
    cart: [],
    currentOrder: [],
    completedOrder: [],
    favorites: [],
    reviews: [],
    orderTotal: 0
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
            return {...state, products: action.products, displayProducts: action.products, loading: false}
        case 'MAKING_NEW_ORDER':
            return {...state, loading: true}
        case 'CREATE_NEW_ORDER':
            return {...state, currentOrder: action.currentOrder, loading: false}
        case 'ADDING_PRODUCT_TO_CART':
            return {...state, loading: true}
        case 'ADDED_TO_CART':
            return {...state, loading: false}
        case 'FETCHING_ITEMS':
            return {...state, loading: true}
        case 'SHOW_CART_ITEMS':
            return {...state, cart: action.cart, loading: false}
        case 'DELETING_ITEMS':
            return {...state, loading: true}
        case 'ITEM_DELETED':
            return {...state, cart: action.cart, loading: false}
        case 'CLOSING_ORDER':
            return {...state, loading: true}
        case 'ORDER_COMPLETED':
            return {...state, completedOrder: action.order, loading: false}
        case 'CHECKING_FOR_FAVORITES':
            return {...state, loading: true}
        case 'NO_FAVORITES':
            return {...state, favorites: action.favorites, loading: false}
        case 'DISPLAY_FAVORITES':
            return {...state, favorites: action.favorites, loading: false}
        case 'CHECKING_FOR_REVIEWS':
            return {...state, loading: true}
        case 'NO_REVIEWS':
            return {...state, reviews: action.reviews, loading: false}
        case 'DISPLAY_REVIEWS':
            return {...state, reviews: action.reviews, loading: false}
        case 'ADDING_REVIEW':
            return {...state, loading: true}
        case 'ADDED_REVIEW':
            return {...state, loading: false}
        case 'DELETING_REVIEW':
            return {...state, loading: true}
        case 'DELETED_REVIEW':
            return {...state, loading: false}
        case 'FILTERED_PRODUCTS':
            return {...state, displayProducts: action.products}
        case 'SET_TOTAL':
            return {...state, orderTotal: action.total}
        default:
            return state;
    }
}

export default rootReducer;