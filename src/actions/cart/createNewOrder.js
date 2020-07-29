// technically this action is checking for an existing order with active status and no quantity or total but also creating a new one if none such orders exist

const createNewOrder = (userInfo) => {
    console.log('making new order!')
    // console.log(userInfo)
    return (dispatch) => {
        const token = localStorage.token;
        dispatch({type: 'MAKING_NEW_ORDER'})
        return fetch('https://sweet-spot-back-end.herokuapp.com/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            user_id: userInfo.id,
            active: true,
            shipped: false,
            tracking_id: null,
            quantity: 0,
            total: 0
        })
        })
        .then(resp => resp.json())
        .then(data => {
            if(data.message){
                console.log(data.message)
            }
            else {
                // console.log(data.data)
                dispatch({type: "CREATE_NEW_ORDER", currentOrder: data.data})
                // history.push("/");
                // return data.user.data.attributes.username
            }
        })
    }
}

export default createNewOrder
