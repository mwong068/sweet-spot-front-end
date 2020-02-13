const increaseQuantity = (event, product, order) => {
    console.log(product)
    return (dispatch) => {
        const token = localStorage.token;
        dispatch({type: 'DELETING_ITEM'})
        return fetch('http://127.0.0.1:3000/order_items/' + `${product}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                quantity: product.quantity + 1
            })
        })
        .then(resp => resp.json())
        .then(data => {
            if(data.error){
                console.log(data.error)
            }
            else {
                console.log(data)
                // let newItems = []
                // let items = data.data.filter(item => item.attributes.order.id == order )
                // newItems.push(items)
                // dispatch({type: 'ITEM_DELETED', cart: {data: items}})
            }
        })
        
    }
}

export default increaseQuantity