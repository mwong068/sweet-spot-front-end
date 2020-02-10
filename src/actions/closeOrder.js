
const closeOrder = (event, total, order) => {
    console.log('closing order')
    console.log(order)
    return (dispatch) => {
        const token = localStorage.token;
        dispatch({type: 'CLOSING_ORDER'})
        return fetch('http://127.0.0.1:3000/orders/' + `${order.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            user_id: order.attributes.user.id,
            active: false,
            shipped: false,
            tracking_id: null,
            quantity: 0,
            total: total
        })
        })
        .then(resp => resp.json())
        .then(data => {
            if(data.message){
                console.log(data.message)
            }
            else {
                console.log(data)
                dispatch({type: "ORDER_COMPLETED", order: data})
                // history.push("/");
                // return data.user.data.attributes.username
            }
        })
    }
}

export default closeOrder
