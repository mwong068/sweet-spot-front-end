
const filterProducts = (value, products, history) => {
    // console.log(value)
    // console.log(products)
    // console.log(history)

    const valueCapitalized = value.charAt(0).toUpperCase() + value.slice(1)
    const filteredProducts = products.data.filter(product => ((product.attributes.name)).includes((valueCapitalized)))

    console.log(filteredProducts)

    history.push('/products')
    return { type: 'FILTERED_PRODUCTS', products: {data: filteredProducts}}
}

export default filterProducts
