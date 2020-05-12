const favoriteProduct = (event, product, user) => {
    // event.preventDefault();
    console.log(product)
    console.log(user)
    return (dispatch) => {
       const token = localStorage.token;
       dispatch({type: 'FAVORITING_PRODUCT', loading: true})
       return fetch('https://sweet-spot-back-end.herokuapp.com/favorite_reviews', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json',
           Accept: 'application/json',
           'Authorization': `Bearer ${token}`
       },
       body: JSON.stringify({
           favorited: true,
           user_id: user.id,
           product_id: product
       })
       })
       .then(resp => resp.json())
       .then(data => {
           if(data.message){
               console.log(data.message)
           }
           else {
               console.log(data)
               window.alert('item added to wishlist!')
            //    dispatch({type: 'ADDED_TO_PRODUCTS', products: data})
            //    history.push('/products')
           }
       
       })
   }
}

export default favoriteProduct