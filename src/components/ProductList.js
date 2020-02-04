import React from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';


class ProductList extends React.Component {


    render() {
        return (
            <div id="product-list">
                {Object.keys(this.props.products).length !== 0 ? this.props.products.data.map(function (product) { return <div id="products"><Link key={product.id} to={`/products/${product.id}`}><Product {...product} /></Link></div>}) : null }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products
})

export default connect(mapStateToProps, null)(ProductList);