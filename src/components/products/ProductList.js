import React from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import checkOrders from '../../actions/cart/checkOrders';
import createNewOrder from '../../actions/cart/createNewOrder';
import Button from '@material-ui/core/Button';
import getFavorites from '../../actions/favorites/getFavorites';
import getReviews from '../../actions/reviews/getReviews';
import ProductFilter from './ProductFilter';
import SortByFilter from './SortByFilter';




class ProductList extends React.Component {

    render() {
        return (
            <div>
                <div id="deal-of-the-day">
                    <div>
                        <h1 style={{color: '#343434', fontSize: '45px'}}>Deal of the Day</h1>
                        <h2>Make Your Own Candy Jar</h2>
                        <p style={{fontSize: '24px'}}>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        </p>
                        <h3 style={{textDecorationLine: 'line-through'}}>$20.00 per jar</h3>
                        <h3 style={{fontSize: '20px'}}>$17.50 per jar</h3>
                        <br></br>
                        <Button variant="contained" type="submit"
                            style={{
                                radius: '3',
                                border: '0.6px solid #D3D3D3',
                                backgroundColor: '#dcead9',
                                color: '#3e4e60',
                                fontWeight: 'bold',
                                padding: '10px 25px',
                                fontFamily: 'Montserrat',
                            }}>
                            <Link to='/products/11' style={{textDecoration: 'none', color: '#3e4e60'}}>
                            add to cart
                            </Link>
                            </Button>
                        <span style={{color: 'white'}}> ----</span>
                        
                        <Button variant="contained" color="primary"
                        // onClick={(event) => this.handleClick(event, this.props.history)}
                            style={{
                                borderRadius: 5,
                                backgroundColor: 'white',
                                padding: "9px 27px",
                                fontSize: "14px",
                                color: '#343434',
                                border: '3px solid #f3e4b7',
                                fontFamily: 'Montserrat',
                            }}
                            >
                            view more ></Button>
                    </div>
                </div>
                <div id="break"></div>
                <center>
                <div id="filters">
                    <div>
                        <h2>Filter by Ratings</h2>
                    </div>
                    <div>
                        <ProductFilter {...this.props.products} />
                    </div>
                    <div><h1 style={{color: 'white'}}>filters yay</h1></div>
                    <div>
                    <h2>Sort by Price</h2>
                    </div>
                    <div>
                        <SortByFilter {...this.props.products} />
                    </div>
                <br></br>
                </div>
                </center>

                <div id="product-list">
                    {/* {console.log(this.props.products)} */}
                    {Object.keys(this.props.products).length !== 0 ? this.props.displayProducts.data.map((product) => { return <div id="products"><Product {...product} {...this.props} /></div>}) : null }
                </div>
                {/* {console.log(Object.keys(this.props.user))} */}
                {(Object.keys(this.props.user).length !== 0) ? this.props.createNewOrder(this.props.user) : null}
                
                {(Object.keys(this.props.user).length !== 0) ? this.props.getFavorites(this.props.user) : null}
                
                {(Object.keys(this.props.user).length !== 0) ? this.props.getReviews(this.props.match.params.id) : null}

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products,
    user: state.currentUser,
    displayProducts: state.displayProducts
})

const mapDispatchToProps = (dispatch) => ({
    // checkOrders: (userInfo) => { dispatch(checkOrders(userInfo)) },
    createNewOrder: (userInfo) => { dispatch(createNewOrder(userInfo)) },
    getFavorites: (user) => { dispatch(getFavorites(user))},
    getReviews: (event, productData) => { dispatch(getReviews(event, productData)) }

})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);