
//string fetches to first get all of favorite_reviews and then find which one using productid and userid and then fetch to delete that particular
//one using the id of it
const deleteReview = (event, productId, user)  => {
    return (dispatch) => {
       const token = localStorage.token;
       dispatch({type: 'ADDING_REVIEW', loading: true})
       return fetch('http://127.0.0.1:3000/favorite_reviews', {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json',
           Accept: 'application/json',
           'Authorization': `Bearer ${token}`
       },
    //    body: JSON.stringify({
    //        product_id: productId,
    //        user_id: user.id,
    //        review: review
    //    })
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

export default deleteReview

