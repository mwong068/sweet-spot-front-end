import React from 'react';
import { Link } from 'react-router-dom';
import ProductDesc from './ProductDesc';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import addToCart from '../../actions/addToCart';
import addReview from '../../actions/addReview';
import deleteReview from '../../actions/deleteReview';
import favoriteProduct from '../../actions/favoriteProduct';
import getReviews from '../../actions/getReviews';
import TextField from '@material-ui/core/TextField';



class ProductPage extends React.Component {

    constructor() {
        super();
        this.state = {
            review: ''
        }
    }

    componentDidMount () {
        this.props.getReviews(this.props.match.params.id)
    }
    

    handleClick = (event, productData, order) => {
        // console.log(user)
        // console.log(this.props)
        if(Object.keys(this.props.products).length !== 0) {
            let item = (this.props.products.data.find(product => product.id === (productData)))
            console.log(order)
            // this.setState({
            //     item: item
            // })
            this.props.addToCart(event, item, order)
        }
        // console.log(this.state.item)    
    }

    handleReview = (event) => {
        this.setState({
            review: event.target.value
        })
    }

    handleSubmit = (event, productId, user) => {
        event.preventDefault();
        this.props.addReview(event, productId, user, this.state.review)
        // this.props.getReviews(this.props.match.params.id)
        // event.forceUpdate()
    }

    handleDelete = (event, reviews, user) => {
        this.props.deleteReview(event, reviews, user)
    }


    handleFavorite = (event, productData, user) => {
        console.log('hi')
        if(Object.keys(this.props.products).length !== 0) {
            this.props.favoriteProduct(event, productData, user)
        }
    }

    starRatings = (num) => {
        if (num === 1) {
            return (
                <div>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            </div>
            )
        }
        else if (num === 2) {
            return (
                <div>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                </div>
                )
        }
        else if (num === 3) {
            return (
                <div>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                </div>
                )
        }
        else if (num === 4) {
            return (
                <div>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                </div>
                )
        }
        else {
            return (
                <div>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                </div>
                )
        }
    }
    

    render() {

        return (
            <div id="product-page">
                <center>
                <div id="product-image">
                {/* {console.log(this.props.products)} */}
                
                    <img src={(Object.keys(this.props.products).length !== 0) ? (this.props.products.data.find(product => product.id == this.props.match.params.id).attributes.image) : null } 
                    style={{width: '40vh', height: '40vh', objectFit: 'cover'}} />
                </div>
                <div id="product-info">
                
                    {/* name */}
                    {Object.keys(this.props.products).length !== 0 ? 
                    <h1 style={{color: 'black'}}>{(this.props.products.data.find(product => product.id === this.props.match.params.id).attributes.name)}</h1>
                    : null}
                    <div id='ratings'>
                    {/* rating */}
                        <div>
                        {Object.keys(this.props.products).length !== 0 ? 
                        <p style={{fontSize: '24px',}}>{this.starRatings((this.props.products.data.find(product => product.id === this.props.match.params.id).attributes.rating))}</p>
                        : null}
                        </div>
                        <div>
                            <p style={{marginLeft: '-55px', fontSize: '15.5px'}}>({Math.floor(Math.random() * 100) + 1} reviews)</p>
                        </div>
                    </div>
                    
                    
                    {
                    Object.keys(this.props.products).length !== 0 ? 
                    <h3>${(this.props.products.data.find(product => product.id === this.props.match.params.id).attributes.price)}</h3>
                    : null}
                    {/* quantity */}
                    {Object.keys(this.props.products).length !== 0 ? 
                    <h3>{(this.props.products.data.find(product => product.id === this.props.match.params.id).attributes.quantity)} pieces per order</h3>
                    : null}
{/* 
                    {Object.keys(this.props.products).length !== 0 ? 
                    <h3>{(this.props.products.data.find(product => product.id === this.props.match.params.id).attributes.ingredients)}</h3>
                    : console.log('not cool')} */}
        
                    <p><b>Delivery estimates:</b><br/>
                    1-3 days for U.S. Residents.
                    <br/>Free delivery over $50.</p>
                    <br></br>
                    <Button variant="contained" value={this.props.match.params.id} onClick={(event) => this.handleClick(event, this.props.match.params.id, this.props.order)}
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
                    onClick={(event) => this.handleFavorite(event, this.props.match.params.id, this.props.user)}
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
                    <br></br><br></br><br></br>
                    <div id="social">
                        <div>
                            <b style={{fontSize: '17px'}}>Share</b>
                        </div>
                        <div>
                            <FacebookIcon /> <TwitterIcon /> <InstagramIcon /> <PinterestIcon /> <EmailOutlinedIcon />
                        </div>
                    </div>
                </div>
                <div id="extra-info">
        
                <ProductDesc 
                    desc={Object.keys(this.props.products).length !== 0 ? 
                    (this.props.products.data.find(product => product.id === this.props.match.params.id).attributes.description) : null}
                    ingred={Object.keys(this.props.products).length !== 0 ? 
                        (this.props.products.data.find(product => product.id === this.props.match.params.id).attributes.ingredients) : null}
                    />
              <br></br><br></br><br></br>
            
                <div>
                    <h1>Review Product</h1>
                    <p>(One review per person)</p>
                    <form onSubmit={(event) => this.handleSubmit(event, this.props.match.params.id, this.props.user)}>
                        <TextField id="standard-basic" 
                        name="review" 
                        label="Write your review here..." 
                        value={this.state.review} 
                        onChange={this.handleReview}
                        style={{width: '100%', height: '100%'}}></TextField> 
                        <br></br><br></br>
                        <Button type="submit"
                        style={{borderRadius: 5,
                            backgroundColor: 'white',
                            padding: "6px 20px",
                            fontSize: "14px",
                            color: '#808080',
                            fontWeight: 'bold',
                            border: '3px solid #ECD189',}}>Add Review</Button>
                    </form>
                    <br></br>
                    <Button type="submit"
                        onClick={(event) => this.handleDelete(event, this.props.reviews, this.props.user)}
                        style={{borderRadius: 5,
                            backgroundColor: 'white',
                            padding: "6px 20px",
                            fontSize: "14px",
                            color: '#808080',
                            fontWeight: 'bold',
                            border: '3px solid #ECD189',}}>Delete Review</Button>
                </div>
              <br></br><br></br><br></br>
                <div id="break"></div>
                <div>
                    <h1>Featured Products</h1>
                    <br></br>
                    <div id="homepage-cards">
                    <Card >
                    <CardActionArea>
                        <CardMedia
                        // className={classes.media}
                        title="Donut"
                        image={ require('../../assets/macarons.jpg') }
                        style={{width: '290px', height: '280px'}}
                        /><br></br>
                        <CardContent style={{height: '5px', textAlign: 'left', padding: '10px'}}>
                        <Typography gutterBottom variant="h5" style={{fontFamily: 'Montserrat'}}>
                            Macarons (Assorted)
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        </Typography>
                        <br/>
                        <Typography variant="body2" component="h2" style={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: 'bold'}}>
                            $30.00
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                    
                    <Card >
                    <CardActionArea>
                        <CardMedia
                        // className={classes.media}
                        image={ require('../../assets/chocolatecake.jpg') }
                        title="Donut"
                        style={{width: '290px', height: '280px'}}
                        /><br></br>
                        <CardContent style={{height: '5px', textAlign: 'left', padding: '10px'}}>
                        <Typography gutterBottom variant="h5" style={{fontFamily: 'Montserrat'}}>
                            Chocolate Raspberry C...
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" image={ require('../../assets/sweetspot.png') }>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        </Typography>
                        <br/>
                        <Typography variant="body2" component="h2" style={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: 'bold'}}>
                            $40.00
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                    
                    <Card >
                    <CardActionArea>
                    <CardMedia
                // className={classes.media}
                image={ require('../../assets/pannacotta.jpg') }
                title="Donut"
                style={{width: '290px', height: '280px'}}
                /><br></br>
                <CardContent style={{height: '5px', textAlign: 'left', padding: '10px'}}>
                <Typography gutterBottom variant="h5" style={{fontFamily: 'Montserrat'}}>
                    Strawberry Panna Cotta
                </Typography>
                <Typography variant="body2" color="textSecondary" component="h2">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                </Typography>
                <br/>
                <Typography variant="body2" component="h2" style={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: 'bold'}}>
                    $20.00
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
                    </div>
                    <br></br><br></br><br></br><br></br>
                    <center>
                    <Button variant="contained" color="primary"
                        style={{
                            borderRadius: 5,
                            backgroundColor: 'white',
                            padding: "6px 20px",
                            fontSize: "14px",
                            color: 'black',
                            border: '3px solid #f3e4b7',
                            fontFamily: 'Montserrat',
                            // boxShadow: 'none'
                        }}
                        ><Link to="/products" style={{color: 'black', textDecoration: 'none'}}>view all</Link></Button>
                        </center>
                </div>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                </div>
                </center>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products,
    user: state.currentUser,
    order: state.currentOrder,
    favorites: state.favorites,
    reviews: state.reviews
})

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (event, productData, order) => { dispatch(addToCart(event, productData, order)) },
        favoriteProduct: (event, productData, user) => { dispatch(favoriteProduct(event, productData, user)) },
        getReviews: (event, productData) => { dispatch(getReviews(event, productData)) },
        addReview: (event, productId, user, review) => { dispatch(addReview(event, productId, user, review)) },
        deleteReview: (event, reviews, user) => { dispatch(deleteReview(event, reviews, user)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);