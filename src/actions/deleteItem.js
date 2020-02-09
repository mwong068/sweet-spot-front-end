
const deleteItem = (event, product) => {
    console.log(product)
    return (dispatch) => {
        const token = localStorage.token;
        dispatch({type: 'DELETING_ITEM'})
        return fetch('http://127.0.0.1:3000/order_items/' + `${product}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(resp => resp.json())
        .then(data => {
            if(data.error){
                console.log(data.error)
            }
            else {
                console.log(data)
                dispatch({type: 'ITEM_DELETED', cart: data})
            }
        })
        
    }
}

export default deleteItem