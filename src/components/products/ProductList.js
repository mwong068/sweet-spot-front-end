import React from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import checkOrders from '../../actions/checkOrders';
import createNewOrder from '../../actions/createNewOrder';


class ProductList extends React.Component {

// removeList = (event) => {
//     React.unmountComponentAtNode(document.getElementById('product-list'));  
// }

// handleOrders = (event, user) => {
//     console.log(user)
//     if(Object.keys(user).length !== 0){
//         if(user.attributes.orders.length === 0) {
//         this.props.createNewOrder(event, user);
//         }
//         else {
//             this.props.checkOrders(event, user);
//         }
//     }
// }


    render() {
        return (
            <div>
                <h2>Filter Sort by</h2><br></br>
            
                <div id="product-list">
                    {/* {console.log(this.props.products)} */}
                    {Object.keys(this.props.products).length !== 0 ? this.props.products.data.map((product) => { return <div id="products"><Product {...product} {...this.props} /></div>}) : null }
                </div>
                {/* {console.log(Object.keys(this.props.user))} */}
                {(Object.keys(this.props.user).length !== 0) ? this.props.createNewOrder(this.props.user) : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products,
    user: state.currentUser
})

const mapDispatchToProps = (dispatch) => ({
    // checkOrders: (userInfo) => { dispatch(checkOrders(userInfo)) },
    createNewOrder: (userInfo) => { dispatch(createNewOrder(userInfo)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);