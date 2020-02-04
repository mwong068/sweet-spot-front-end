import React from 'react';
import ProductDesc from './ProductDesc';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';



class ProductPage extends React.Component {

    componentDidMount () {
        
    }

    starRatings = (num) => {
        if (num === 1) {
            return (
                <div>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            </div>
            )
        }
        else if (num === 2) {
            return (
                <div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                </div>
                )
        }
        else if (num === 3) {
            return (
                <div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                </div>
                )
        }
        else if (num === 4) {
            return (
                <div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                </div>
                )
        }
        else {
            return (
                <div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                </div>
                )
        }
    }
    

    render() {
        return (
            <div id="product-page">
                <center>
                <div id="product-image">
                    {/* <img src="https://images.unsplash.com/photo-1570368112535-43e1e5b78f75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1107&q=80" styling={{width: '200px', height: '200px'}}></img> */}
                    <h1>image coming soon</h1>
                    <h1>image coming soon</h1>
                    <h1>image coming soon</h1>
                    <h1>image coming soon</h1>
                  
                </div>
                <div id="product-info">
                    {Object.keys(this.props.products).length !== 0 ? 
                    console.log(this.props.products.data.find(product => product.id === (this.props.match.params.product)))
                    : console.log('not cool')}
                    
                    {/* name */}
                    {Object.keys(this.props.products).length !== 0 ? 
                    <h1>{(this.props.products.data.find(product => product.id === (this.props.match.params.product))).attributes.name}</h1>
                    : null}
                    {/* rating */}
                    {Object.keys(this.props.products).length !== 0 ? 
                    <h3>{this.starRatings((this.props.products.data.find(product => product.id === (this.props.match.params.product))).attributes.rating)}</h3>
                    : null}
                    {/* price */}
                    {Object.keys(this.props.products).length !== 0 ? 
                    <h3>${(this.props.products.data.find(product => product.id === (this.props.match.params.product))).attributes.price}.00</h3>
                    : null}
                    {/* quantity */}
                    {Object.keys(this.props.products).length !== 0 ? 
                    <h3>{(this.props.products.data.find(product => product.id === (this.props.match.params.product))).attributes.quantity} pieces per order</h3>
                    : null}
        
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
                <ProductDesc />
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
                </center>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products
})

export default connect(mapStateToProps, null)(ProductPage);