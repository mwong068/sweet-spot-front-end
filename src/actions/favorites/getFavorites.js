

const getFavorites = (user) => {
    // console.log(user)
    return (dispatch) => {
        const token = localStorage.token;
        dispatch({type: 'CHECKING_FOR_FAVORITES'})
        return fetch('https://sweet-spot-back-end.herokuapp.com/favorite_reviews', {
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
                
                let favorites = data.data.filter(item => item.attributes.user.id == user.id )
                if (favorites === undefined) {
                    dispatch({type: 'NO_FAVORITES', favorites: {}})
                }
                else {
                    // console.log(favorites)
                    let realFavorites = favorites.filter(item => item.attributes.favorited == true)
                    // console.log(realFavorites)

                    dispatch({type: 'DISPLAY_FAVORITES', favorites: {data: realFavorites}})
                }
            }
        })
    }
}

export default getFavorites
