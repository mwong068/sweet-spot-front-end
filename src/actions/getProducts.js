// import { useHistory } from 'react-router-dom';

const getProducts = (event) => {
    return (dispatch) => {
        const token = localStorage.token;
        dispatch({type: 'GETTING_PRODUCTS'})
        return fetch('https://sweet-spot-back-end.herokuapp.com/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(resp => resp.json())
        .then(data => {
            // console.log(data.data)
                dispatch({type: "SET_PRODUCTS", products: data})
            })
    }
}

export default getProducts