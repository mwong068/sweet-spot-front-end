// import { useHistory } from 'react-router-dom';

const getProducts = (event) => {
    return (dispatch) => {
        dispatch({type: 'GETTING_PRODUCTS'})
        return fetch('http://127.0.0.1:3000/products')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
                dispatch({type: "SET_PRODUCTS", products: data})
                // useHistory().push("/profile");
            })
    }
}

export default getProducts