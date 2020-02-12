
//string fetches to first get all of favorite_reviews and then find which one using productid and userid and then fetch to delete that particular
//one using the id of it
const deleteReview = (event, reviews, user)  => {
    let userReviews = reviews.data.filter(review => review.attributes.user.id == user.id)
    console.log(userReviews[0].id)
    return (dispatch) => {
       const token = localStorage.token;
       dispatch({type: 'DELETING_REVIEW', loading: true})
       return fetch('http://127.0.0.1:3000/favorite_reviews/' + `${userReviews[0].id}`, {
       method: 'DELETE',
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
            //    dispatch({type: 'ADDED_TO_CART', loading: false})
            //    history.push('/')
           }
       
       })
   }
}

export default deleteReview

