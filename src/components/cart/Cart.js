import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CartItem from './CartItem';
import getCartItems from '../../actions/cart/getCartItems';
import closeOrder from '../../actions/cart/closeOrder';
import setTotal from '../../actions/cart/setTotal';
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

    componentDidUpdate () {
        // this.props.getCartItems(this.props.order)
    }


    calculateSubtotal = (items) => {
        // console.log(items)
        if(items.length !== 0){
        let prices = items.map(item => (item.attributes.product.price) * (item.attributes.quantity))
        let total = prices.reduce((a, b) => a + b, 0)
        return(total.toFixed(2))
        }
        else {
            return(0)
        }
    }
    
    calculateFinalTotal = (items) => {
        // console.log(items)
        if(items !== undefined){
            if(items.length !== 0){
                let prices = items.map(item => ((item.attributes.product.price) * (item.attributes.quantity)))
                let total = prices.reduce((a, b) => a + b, 0)
                this.props.setTotal((total+7).toFixed(2))
                return((total+7).toFixed(2))
            }
            else{
                return(7)
            }
        }
        else {
            return null
        }
    }

    handleCheckout = (event, total, order) => {
        // console.log(order)
        this.props.closeOrder(event, total, order)
    }

    displayEmpty = (cart) => {
        // console.log(cart)
        if(Object.keys(cart).length !== 0){
            if(cart.data.length === 0)
            return <h1>Your cart is currently empty! :(<br></br><br></br>Why don't you go find something in the shop?</h1> 
            }
            else{
                return <h1>Your cart is currently empty! :(<br></br><br></br>Why don't you go find something in the shop?</h1> 
            }
    }

    render () {
        return (
            <div>
                {/* {Object.keys(this.props.order).length !==0 ? this.props.getCartItems(this.props.order) : null} */}
                <center>
                <h1 style={{color: '#6A6C6E'}}>{Object.keys(this.props.cart).length !== 0 ? (this.props.cart.data.length) : 0} item(s) currently in your Cart</h1>
                <div id="cart-container">
                    <div id="item-1">
                        <div id="cart-refresh">
                            <div>
                                <h2 style={{textAlign: 'left', fontSize: '30px'}}>My Cart</h2>
                            </div>
                            <div>
                                <br></br>
                                <Button onClick={() => this.props.getCartItems(this.props.order)}
                                style={{borderRadius: 5,
                                    backgroundColor: 'white',
                                    padding: "9px 27px",
                                    fontSize: "14px",
                                    color: 'black',
                                    border: '3px solid #f3e4b7',
                                    fontFamily: 'Montserrat',}}>Refresh</Button>
                            </div>
                        </div>
                        <hr></hr>
                        <div id="item-list">

                        {/* {console.log((this.props.cart))} */}
                        {(Object.keys(this.props.cart).length !== 0) ? 
                        this.props.cart.data.map(item => <CartItem {...item} />) 
                        : null}
                        
                        {this.displayEmpty(this.props.cart)}
                        
                        </div>
                    </div>
                    {/* <hr style={{height: '450px'}}></hr> */}
                    <div id="item-2">
                        <h2 style={{textAlign: 'left', fontSize: '30px'}}>Total</h2>
                        <hr></hr>
                        <div id="total-list">
                            <div>
                                <h4>Subtotal</h4>
                            </div>
                            <div>
                            <p style={{padding: '5px 0 0 0'}}>${Object.keys(this.props.cart).length !== 0 ? 
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
                                <p style={{padding: '5px 0 0 0'}}>$7.00</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div id="total-list">
                            <div>
                                <h3 style={{fontSize: '25px'}}>Final Total</h3>
                            </div>
                            <div>
                                
                                <p style={{fontSize: '22px', padding: '5px 0 0 0'}}>${Object.keys(this.props.cart).length !== 0 ? 
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
                        >
                        {/* {console.log(Object.keys(this.props.order).length !== 0)} */}
                        {Object.keys(this.props.order).length !== 0 ? 
                        <Link to ='/checkout' style={{textDecoration: 'none', color: '#3e4e60'}}>continue to checkout</Link> :
                        <p>continue to checkout</p> }
                    
                        </Button>
                        <br></br><br></br><br></br>
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
        closeOrder: (event, total, order) => { dispatch(closeOrder(event, total, order))},
        setTotal: (total) => { dispatch(setTotal(total))}
      }
    }



export default connect(mapStateToProps, mapDispatchToProps)(Cart);