import React from 'react';
import ProductDesc from './ProductDesc';
import Button from '@material-ui/core/Button';



class ProductPage extends React.Component {
    render() {
        return (
            <div id="product-page">
                <div id="product-image">
                    {/* <img src="https://images.unsplash.com/photo-1570368112535-43e1e5b78f75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1107&q=80" styling={{width: '200px', height: '200px'}}></img> */}
                    <h1>image coming soon</h1>
                    <h1>image coming soon</h1>
                    <h1>image coming soon</h1>
                    <h1>image coming soon</h1>
                    <h1>image coming soon</h1>
                    <h1>image coming soon</h1>
                    <h1>image coming soon</h1>
                    <h1>image coming soon</h1>
                    <h1>image coming soon</h1>
                </div>
                <div id="product-info">
                    <h2>Donut</h2>
                    <h3>Deez Nuts</h3>
                    <h4>Star rating</h4>
                    <h4>$15.00</h4>
                    <h4>Quantity</h4>
                    <ProductDesc />
                    <Button
                        variant="contained"
                        color="secondary"
                        // className={classes.button}
                        // startIcon={<PeopleAltIcon />}
                    >
                        add to cart
                    </Button>
                    <span>     </span>
                    <Button
                        variant="contained"
                        color="primary"
                        // className={classes.button}
                        // startIcon={<PeopleAltIcon />}
                    >
                        add to favorites
                    </Button>
                </div>
                <div id="extra-info">
                <hr></hr>
                <h1>About</h1>
                <h4>Contains: nuts, egg, dairy Contains: nuts, egg, dairy Contains: nuts, egg, dairy Contains: nuts, egg, dairy Contains: nuts, egg, dairy Contains: nuts, egg, dairy Contains: nuts, egg, dairy Contains: nuts, egg, dairyContains: nuts, egg, dairy Contains: nuts, egg, dairy Contains: nuts, egg, dairy Contains: nuts, egg, dairy Contains: nuts, egg, dairy
                </h4>
                <hr></hr>
                <h1>Recommended</h1>
                <h4>Contains: nuts, egg, dairy Contains: nuts, egg, dairy Contains: nuts, egg, dairy Contains: nuts, egg, dairy Contains: nuts, egg, dairy Contains: nuts, egg, dairy Contains: nuts, egg, dairy Contains: nuts, egg, dairyContains: nuts, egg, dairy Contains: nuts, egg, dairy Contains: nuts, egg, dairy Contains: nuts, egg, dairy Contains: nuts, egg, dairy
                </h4>
                <hr></hr>
                <h1>Reviews</h1>
                <h4>Coming soon!
                </h4>
                </div>
            </div>
        )
    }
}

export default ProductPage;