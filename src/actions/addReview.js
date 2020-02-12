
const addReview = (event, productId, user, review) => {
    console.log(productId)
    console.log(user)
    console.log(review)
    return (dispatch) => {
       const token = localStorage.token;
       dispatch({type: 'ADDING_REVIEW', loading: true})
       return fetch('http://127.0.0.1:3000/favorite_reviews', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json',
           Accept: 'application/json',
           'Authorization': `Bearer ${token}`
       },
       body: JSON.stringify({
           product_id: productId,
           user_id: user.id,
           review: review
       })
       })
       .then(resp => resp.json())
       .then(data => {
           if(data.message){
               console.log(data.message)
           }
           else {
               console.log(data)
            //    dispatch({type: 'ADDED_TO_CART', loading: false})
               // history.push('/')
           }
       
       })
   }
}

export default addReview