import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CartItem from './CartItem';
import getCartItems from '../../actions/getCartItems';
import closeOrder from '../../actions/closeOrder';
import { Link } from 'react-router-dom';


class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            sub_total: 0,
            delivery_fee: 7,
            total_price: 0
        }
    }
    
    componentDidMount () {
        this.props.getCartItems(this.props.order)
    }


    calculateSubtotal = (items) => {
        console.log(items)
        if(items.length !== 0){
        let prices = items.map(item => (item.attributes.product.price))
        let total = prices.reduce((a, b) => a + b, 0)
        return(total.toFixed(2))
        }
        else {
            return(0)
        }
    }
    
    calculateFinalTotal = (items) => {
        console.log(items)
        if(items.length !== 0){
        let prices = items.map(item => (item.attributes.product.price))
        let total = prices.reduce((a, b) => a + b, 0)
        return((total+7).toFixed(2))
        }
        else{
            return(7)
        }
    }

    handleCheckout = (event, total, order) => {
        // console.log(total)
        // console.log(order)
        this.props.closeOrder(event, total, order)
    }

    render () {
        return (
            <div>
                {/* {Object.keys(this.props.order).length !==0 ? this.getCart(this.props.getCartItems(), this.props.order) : null} */}
                <center>
                <h1 style={{color: '#6A6C6E'}}>{Object.keys(this.props.cart).length !== 0 ? (this.props.cart.data.length) : 0} item(s) currently in your Cart</h1>
                <div id="cart-container">
                    <div id="item-1">
                        <h2 style={{textAlign: 'left'}}>My Cart</h2>
                        <hr></hr>
                        <div id="item-list">
                            {console.log(Object.keys(this.props.cart)[0])}
                        {Object.keys(this.props.cart).length !== 0 ? 
                        this.props.cart.data.map(item => <CartItem {...item} />) 
                        : <h1>Your cart is currently empty! Why don't you go find something in the shop?</h1> }
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
                            <p>${Object.keys(this.props.cart).length !== 0 ? 
                        // this.props.cart.data.map(item => console.log(item.attributes.product.attributes.price))
                        this.calculateSubtotal(this.props.cart.data)
                        : 0.00 }
                        </p>
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
                                <p>${Object.keys(this.props.cart).length !== 0 ? 
                        // this.props.cart.data.map(item => console.log(item.attributes.product.attributes.price))
                        this.calculateFinalTotal(this.props.cart.data)
                        : 7.00 }</p>
                            </div>
                        </div>
                        <br></br>
                        <center>
                        <Button variant="contained"
                        onClick={(event) => this.handleCheckout(event, this.calculateFinalTotal(this.props.cart.data), this.props.order)}
                        style={{
                            radius: '3',
                            border: '0.6px solid #D3D3D3',
                            backgroundColor: 'white',
                            color: '#3e4e60',
                            fontWeight: 'bold',
                            padding: '10px 25px',
                            fontFamily: 'Montserrat',
                        }}
                        ><Link to ='/checkout' style={{textDecoration: 'none', color: '#3e4e60'}}>continue to checkout</Link></Button>
                        </center>
                    </div>
                </div>
                </center>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        cart:  state.cart,
        order: state.currentOrder
    }
}


const mapDispatchToProps = dispatch => {
    return {
        getCartItems: (event, history) => { dispatch(getCartItems(event, history)) },
        closeOrder: (event, total, order) => { dispatch(closeOrder(event, total, order))}
      }
    }



export default connect(mapStateToProps, mapDispatchToProps)(Cart);