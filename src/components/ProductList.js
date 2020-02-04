import React from 'react';
import Product from './Product';
import { connect } from 'react-redux';

class ProductList extends React.Component {


    render() {
        return (
            <div id="product-list">
                {Object.keys(this.props.products).length !== 0 ? this.props.products.data.map(function (product) { return <div id="products"><Product {...product} /></div>}) : null }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products
})

export default connect(mapStateToProps, null)(ProductList);