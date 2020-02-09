
const addToCart = (event, productData, order) => {
     console.log(productData)
     console.log(order)
     return (dispatch) => {
        const token = localStorage.token;
        dispatch({type: 'ADDING_PRODUCT_TO_CART'})
        return fetch('http://127.0.0.1:3000/order_items', {
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
                // dispatch({type: 'ADDED_TO_CART', cart: data})
                // history.push('/')
            }
        
        })
    }
}

export default addToCart