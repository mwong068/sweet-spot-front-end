import React from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';


class ProductList extends React.Component {

removeList = (event) => {
    React.unmountComponentAtNode(document.getElementById('product-list'));  
}

    render() {
        return (
            <div>
                <h2>Filter Sort by</h2><br></br>
            
                <div id="product-list">
                    {/* {console.log(this.props.products)} */}
                    {Object.keys(this.props.products).length !== 0 ? this.props.products.data.map(function (product) { return <div id="products"><Link key={product.id} to={`/products/${product.id}`} ><Product {...product} /></Link></div>}) : null }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products
})

export default connect(mapStateToProps, null)(ProductList);