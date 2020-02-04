import React from 'react';
import ProductDesc from './ProductDesc';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';



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
                    <img src="https://images.unsplash.com/photo-1570368112535-43e1e5b78f75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1107&q=80" id="display-image"></img>
                    <br></br><br></br><br></br><br></br>
                </div>
                <div id="product-info">
                    {Object.keys(this.props.products).length !== 0 ? 
                    console.log(this.props.products.data.find(product => product.id === (this.props.match.params.product)))
                    : console.log('not cool')}
                    
                    {/* name */}
                    {Object.keys(this.props.products).length !== 0 ? 
                    <h1 style={{color: 'black'}}>{(this.props.products.data.find(product => product.id === (this.props.match.params.product))).attributes.name}</h1>
                    : null}
                    {/* rating */}
                    {Object.keys(this.props.products).length !== 0 ? 
                    <h3>{this.starRatings((this.props.products.data.find(product => product.id === (this.props.match.params.product))).attributes.rating)} ({Math.floor(Math.random() * 100) + 1} reviews)</h3>
                    : null}
                    {/* price */}
                    {Object.keys(this.props.products).length !== 0 ? 
                    <h3>${(this.props.products.data.find(product => product.id === (this.props.match.params.product))).attributes.price}.00</h3>
                    : null}
                    {/* quantity */}
                    {Object.keys(this.props.products).length !== 0 ? 
                    <h3>{(this.props.products.data.find(product => product.id === (this.props.match.params.product))).attributes.quantity} pieces per order</h3>
                    : null}
        
                    <p><b>Delivery estimates:</b><br/>
                    1-3 days for U.S. Residents.
                    <br/>Free delivery over $50.</p>
                    <br></br>
                    <Button variant="contained" type="submit"
                        style={{
                            radius: '3',
                            border: '0.6px solid #D3D3D3',
                            backgroundColor: '#dcead9',
                            color: '#3e4e60',
                            fontWeight: 'bold',
                            padding: '7.5px 30px',

                        }}>add to cart</Button>
                    <span>     </span>
                    <Button variant="contained" color="primary"
                    style={{
                    borderRadius: 5,
                    backgroundColor: 'white',
                    padding: "6px 20px",
                    fontSize: "14px",
                    color: '#808080',
                    fontWeight: 'bold',
                    border: '3px solid #ECD189',
                    }}
                    >add to wishlist</Button>
                    <br></br>
                    <span style={{padding: '1000px 10px'}}><h3>Share  </h3><FacebookIcon /> <TwitterIcon /> <InstagramIcon /> <PinterestIcon /> <EmailOutlinedIcon /></span>
                </div>
                <div id="extra-info">
                <ProductDesc />
                <hr></hr>
                <h1>Related Products</h1>
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