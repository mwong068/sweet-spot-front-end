import createHistory from 'history/createBrowserHistory'
const history = createHistory();

const deleteFavorite = (event, product) => {
    console.log(product)
    return (dispatch) => {
        const token = localStorage.token;
        dispatch({type: 'CHECKING_FOR_FAVORITES'})
        return fetch('http://127.0.0.1:3000/favorite_reviews/' + `${product.productId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            favorited: false
        })
        })
        .then(resp => resp.json())
        .then(data => {
            if(data.message){
                console.log(data.message)
            }
            else {
                console.log(data)
                history.go(0)
    
            }
        })
    }
}

export default deleteFavorite
