import React from 'react';
import Cart from './Cart';
import { useSelector, useDispatch } from 'react-redux';
import getCartItems from '../../actions/getCartItems';



export default function CartContainer(props) {
    const order = useSelector( state => state.currentOrder);
 

    return(
        <div>
            <div>
                <Cart order={order} />
                {/* {console.log(props)}
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
                onClick={(event) => dispatch(deleteItem(event, props.id))}
                style={{
                borderRadius: 5,
                backgroundColor: 'white',
                // padding: "9px 27px",
                fontSize: "14px",
                color: 'black',
                border: '3px solid #f3e4b7',
                fontFamily: 'Montserrat',
                }}>Delete</Button> */}
            </div>
        </div>
)
}