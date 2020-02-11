import React from 'react';
import Cart from './Cart';
import { connect } from 'react-redux';
import getCartItems from '../../actions/getCartItems';
import createNewOrder from '../../actions/createNewOrder';



class CartContainer extends React.Component {

    render() {
        return(
            <div>
                <div>
                    <Cart order={this.props.order} />
                    {/* {(Object.keys(this.props.user).length !== 0) ? this.props.createNewOrder(this.props.user) : null} */}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    order: state.currentOrder,
    user: state.currentUser
})

const mapDispatchToProps = (dispatch) => ({
    createNewOrder: (userInfo) => { dispatch(createNewOrder(userInfo)) }

})


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);