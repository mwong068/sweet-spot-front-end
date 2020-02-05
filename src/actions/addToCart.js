
const addToCart = (event, productData) => {
     // console.log(history)
     return (dispatch) => {
        dispatch({type: 'ADD_TO_CART', cart: productData})
        // history.push('/')
    }
}


export default addToCart