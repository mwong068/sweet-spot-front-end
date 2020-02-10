import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import deleteItem from '../../actions/deleteItem';
import { Link } from 'react-router-dom';
 
export default function CartItem(props) {
    const dispatch = useDispatch();

    return(
        <div id="cart-item">
            <div>
                {console.log(props)}
                <br></br>
                <img src={ props.attributes.product.image } style={{width: '90%', height: '90%', objectFit: 'cover'}}></img>
            </div>
            <div>
                <h3>${props.attributes.product.price}</h3>
                <h4><Link to={'products/' + (props.attributes.product.id)}>
                    {props.attributes.product.name}
                    </Link></h4>
                <p>{props.attributes.product.description}</p>
                <h4>Quantity: <select></select></h4>
                <Button 
                onClick={(event) => dispatch(deleteItem(event, props.id, props.attributes.order.id))}
                style={{
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