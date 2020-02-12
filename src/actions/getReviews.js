

const getReviews = (productId) => {
    console.log(productId)
    return (dispatch) => {
        const token = localStorage.token;
        dispatch({type: 'CHECKING_FOR_REVIEWS'})
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
                let reviews = data.data.filter(item => item.attributes.product.id == productId )
                console.log(reviews)
                let actualReviews = reviews.filter(review => review.attributes.review !== null)
                if (reviews === undefined) {
                    dispatch({type: 'NO_REVIEWS', reviews: {}})
                }
                else {
                    
                    // newItems.push(items)
                    dispatch({type: 'DISPLAY_REVIEWS', reviews: {data: actualReviews}})
                }
            }
        })
    }
}

export default getReviews
