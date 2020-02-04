import React from 'react';
import { connect } from 'react-redux';
import getProducts from '../actions/getProducts';
import checkUser from '../actions/checkUser';
import ProductList from './ProductList';


class ProductContainer extends React.Component {

    // fetch to all products and display them

    componentDidMount () {
        // this.props.checkUser();
        // this.props.getProducts();
    }

    render() {
        return (
            <div>
                <ProductList />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // checkUser: (event, history) => { dispatch(checkUser(event, history)) },
        // getProducts: (event) => { dispatch(getProducts(event)) }
    }
}

export default connect(null, mapDispatchToProps)(ProductContainer);