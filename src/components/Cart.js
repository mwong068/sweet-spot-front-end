import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CartItem from './CartItem';
import getCartItems from '../actions/getCartItems';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            cart: []
        }
    }
    
    componentDidMount () {
        
    }

    render () {
        return (
            <div>
                <center>
                <h1 style={{color: 'black'}}>1 item currently in your Cart</h1>
                <div id="cart-container">
                    <div id="item-1">
                        <h2 style={{textAlign: 'left'}}>My Cart</h2>
                        <hr></hr>
                        <div id="item-list">
                        {/* {Object.keys(this.props.cart).length !== 0 ? {this.props.cart.map((item) => <CartItem {...item} />)} : null} */}
                        {(event) => this.props.getCartItems(event, this.props.history)}
                        {console.log(Object.keys((this.props.cart).length !== 0))}
                        </div>
                    </div>
                    {/* <hr style={{height: '450px'}}></hr> */}
                    <div id="item-2">
                        <h2 style={{textAlign: 'left'}}>Total</h2>
                        <hr></hr>
                        <div id="total-list">
                            <div>
                                <h4>Subtotal</h4>
                            </div>
                            <div>
                                <p>$40.00</p>
                            </div>
                        </div>
                        <div id="total-list">
                            <div>
                                <h4>Delivery</h4>
                            </div>
                            <div>
                                <p>$7.00</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div id="total-list">
                            <div>
                                <h3>Final Total</h3>
                            </div>
                            <div>
                                <p>$47.00</p>
                            </div>
                        </div>
                        <Button variant="contained" type="submit"
                        style={{
                            radius: '3',
                            border: '0.6px solid #D3D3D3',
                            backgroundColor: '#dcead9',
                            color: '#3e4e60',
                            fontWeight: 'bold',
                            padding: '10px 25px',
                            fontFamily: 'Montserrat',
                        }}
                        >continue to checkout</Button>
                        <p></p>
                    </div>
                </div>
                </center>
            </div>
        )
    }
}

//fetch to order items to display all of current cart
//add mapstatetoprops
const mapStateToProps = state => {
    return {
        cart:  state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
    getCartItems: (event, history) => { dispatch(getCartItems(event, history)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);