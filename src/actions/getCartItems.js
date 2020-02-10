
const getCartItems = (order) => {
    // console.log(event)
    console.log(order.id)
    return (dispatch) => {
        const token = localStorage.token;
        dispatch({type: 'FETCHING_ITEMS'})
        return fetch('http://127.0.0.1:3000/order_items', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(resp => resp.json())
        .then(data => {
            if(data.message){
                console.log(data.message)
            }
            else {
                console.log(data.data)
                // let newItems = []
                let items = data.data.filter(item => item.attributes.order.id == order.id )
                if (items === undefined) {
                    dispatch({type: 'SHOW_CART_ITEMS', cart: {}})
                }
                else {
                    
                    // newItems.push(items)
                    dispatch({type: 'SHOW_CART_ITEMS', cart: {data: items}})
                }
            }
        })
        
    }
}

export default getCartItems