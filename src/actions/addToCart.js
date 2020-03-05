
const addToCart = (event, productData, order) => {
     console.log(productData)
     console.log(order)
     return (dispatch) => {
        const token = localStorage.token;
        dispatch({type: 'ADDING_PRODUCT_TO_CART', loading: true})
        return fetch('https://sweet-spot-back-end.herokuapp.com/order_items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            order_id: order.id,
            product_id: productData.id,
            total: productData.attributes.price,
            price: productData.attributes.price,
            quantity: 1
        })
        })
        .then(resp => resp.json())
        .then(data => {
            if(data.message){
                console.log(data.message)
            }
            else {
                console.log(data)
                dispatch({type: 'ADDED_TO_CART', loading: false})
                window.alert('item added to cart!')
                // history.push('/')
            }
        
        })
    }
}

export default addToCart