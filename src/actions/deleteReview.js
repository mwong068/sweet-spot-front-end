import createHistory from 'history/createBrowserHistory'
const history = createHistory();

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
               dispatch({type: 'DELETED_REVIEW', loading: false})
                history.go(0)
           }
       
       })
   }
}

export default deleteReview

