const createNewProduct = (event, productData, history) => {
    event.preventDefault();
    console.log(productData)
    // console.log(order)
    return (dispatch) => {
       const token = localStorage.token;
       dispatch({type: 'ADDING_TO_PRODUCTS', loading: true})
       return fetch('http://127.0.0.1:3000/products', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json',
           Accept: 'application/json',
           'Authorization': `Bearer ${token}`
       },
       body: JSON.stringify({
           name: productData.name,
           price: productData.price,
           quantity: productData.quantity,
           rating: productData.rating,
           description: productData.description,
           ingredients: productData.ingredients,
           image: productData.image
       })
       })
       .then(resp => resp.json())
       .then(data => {
           if(data.message){
               console.log(data.message)
           }
           else {
               console.log(data)
               dispatch({type: 'ADDED_TO_PRODUCTS', products: data})
               history.push('/products')
           }
       
       })
   }
}

export default createNewProduct