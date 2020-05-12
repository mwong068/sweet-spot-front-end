

const checkOrders = (event, history) => {
    console.log('checking existing orders!')
    return (dispatch) => {
        const token = localStorage.token;
        dispatch({type: 'CHECKING_FOR_CART'})
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
                console.log('cute')
                //   }
                // user.push(data.user.data.attributes)
                // console.log(data.user.data)
                // dispatch({type: "SET_CURRENT_USER", currentUser: data.user.data})
                // history.push("/");
                // return data.user.data.attributes.username
            }
        })
    }
}

export default checkOrders
