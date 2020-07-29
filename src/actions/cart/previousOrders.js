// technically this action is checking for an existing order with active status and no quantity or total but also creating a new one if none such orders exist

const getPreviousOrders = (userInfo) => {
    console.log('getting old orders')
    // console.log(userInfo)
    return (dispatch) => {
        const token = localStorage.token;
        dispatch({type: 'GETTING_PREVIOUS_ORDERS'})
        return fetch('https://sweet-spot-back-end.herokuapp.com/orders', {
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
                const orders = data.data.filter(order => order.attributes.user.id == userInfo.id)
                const oldOrders = (orders.filter(order => order.attributes.active == false))
                // console.log(oldOrders)
                dispatch({type: "USER_ORDERS", previousOrders: oldOrders})
                // history.push("/");
                // return data.user.data.attributes.username
            }
        })
    }
}

export default getPreviousOrders
