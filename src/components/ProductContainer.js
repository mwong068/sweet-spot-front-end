import React from 'react';
import { connect } from 'react-redux';
import getProducts from '../actions/getProducts';
import checkUser from '../actions/checkUser';
import ProductList from './ProductList';
import ProductPage from './ProductPage';
import { Route } from 'react-router-dom';


function ProductContainer({ match, product }) {

        return (
            <div>
                <ProductList />
                <Route path={`${match.url}/:product`} render={routerProps => <ProductPage {...routerProps} product={product} />} />
            </div>
        )
}


export default ProductContainer;