import React from 'react';
import Button from '@material-ui/core/Button';


export default function CartItem(props) {
    return(
        <div id="cart-item">
            <div>
                {console.log(props.attributes.product)}
                <br></br>
                <img src={ props.attributes.product.image } style={{width: '90%', height: '90%', objectFit: 'cover'}}></img>
            </div>
            <div>
                <h3>${props.attributes.product.price}</h3>
                <h4>{props.attributes.product.name}</h4>
                <p>{props.attributes.product.description}</p>
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
        </div>
)
}