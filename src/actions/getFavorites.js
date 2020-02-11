

const getFavorites = (user) => {
    console.log(user)
    return (dispatch) => {
        const token = localStorage.token;
        dispatch({type: 'CHECKING_FOR_FAVORITES'})
        return fetch('http://127.0.0.1:3000/favorite_reviews', {
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
                console.log(data)
                let favorites = data.data.filter(item => item.attributes.user.id == user.id )
                if (favorites === undefined) {
                    dispatch({type: 'NO_FAVORITES', favorites: {}})
                }
                else {
                    
                    // newItems.push(items)
                    dispatch({type: 'DISPLAY_FAVORITES', favorites: {data: favorites}})
                }
            }
        })
    }
}

export default getFavorites
