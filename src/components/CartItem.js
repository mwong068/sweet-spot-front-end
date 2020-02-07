import React from 'react';
import Button from '@material-ui/core/Button';


export default function CartItem() {
    return(
        <div id="item-3">
            <div>
                <img src={ require('../assets/chocolatecake.jpg') } style={{width: '150px', height: '250x'}}></img>
            </div>
                <h3>$40.00</h3>
                <h4>Chocolate cake</h4>
                <p>delicious, rich chocolate cake perfect for a party or celebration</p>
                <h4>Quantity: <select></select></h4>
                <Button style={{
                borderRadius: 5,
                backgroundColor: 'white',
                // padding: "9px 27px",
                fontSize: "14px",
                color: 'black',
                border: '3px solid #f3e4b7',
                fontFamily: 'Montserrat',
                }}>Delete</Button>
            
        </div>
)
}