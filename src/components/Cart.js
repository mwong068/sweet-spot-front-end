import React from 'react';

class Cart extends React.Component {
    render () {
        return (
            <div>
                <center>
                <h1 style={{color: 'black'}}>Cart</h1>
                <div id="cart-container">
                    <div id="item-1">
                        <h1>Cart</h1>
                    </div>
                    <div id="item-2">
                        <h1>2</h1>
                    </div>
                </div>
                </center>
            </div>
        )
    }
}

export default Cart