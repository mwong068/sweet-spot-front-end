// this container was not serving any purpose - originally thought it was necessary for passing down routerProps from app to product page

// import React from 'react';
// import { connect } from 'react-redux';
// import getProducts from '../actions/getProducts';
// import checkUser from '../actions/checkUser';
// import ProductList from './ProductList';
// import ProductPage from './ProductPage';
// import { Route } from 'react-router-dom';


// function ProductContainer({ match, product }) {

//         return (
//             <div>
//                 {console.log(match)}
//                 {console.log(product)}
//                 <Route path={`${match.url}/:product`} render={routerProps => <ProductPage {...routerProps} product={product} />} />
//                 {/* <ProductList /> */}
//             </div>
//         )
// }


// export default ProductContainer;