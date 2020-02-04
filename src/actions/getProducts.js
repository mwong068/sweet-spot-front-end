// import { useHistory } from 'react-router-dom';

const getProducts = (event) => {
    return (dispatch) => {
        const token = localStorage.token;
        dispatch({type: 'GETTING_PRODUCTS'})
        return fetch('http://127.0.0.1:3000/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(resp => resp.json())
        .then(data => {
                dispatch({type: "SET_PRODUCTS", products: data})
            })
    }
}

export default getProducts