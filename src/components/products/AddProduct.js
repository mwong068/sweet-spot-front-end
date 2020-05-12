import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';
import { FormLabel } from '@material-ui/core';
import createNewProduct from '../../actions/products/createNewProduct';
// import postNewUser from '../actions/postNewUser';

class AddProduct extends React.Component {

    state = {
        name: '',
        price: '',
        quantity: '',
        rating: '',
        description: '',
        ingredients: '',
        image: ''
    }

    handleChange = (e) => {
        console.log(e.target.id)
      this.setState({
          [e.target.id]: e.target.value
      })
    }


    componentDidMount() {

    }


    render() {
        return (
            <center>
            <div id="add-a-product-container" >
                
                <div style={{backgroundColor: 'white',}}>
                    <br></br>
                    <h1 style={{color: 'black'}}>Add a Product</h1>
                    <br></br>
                    {/* <div> */}
                    <form noValidate autoComplete="off" id="add-product" 
                    onSubmit={ (e) => {this.props.createNewProduct(e, this.state, this.props.history)} }
                    >            
                        <TextField
                        required
                        id="name"
                        label="Name"
                        // variant="outlined"
                        value={this.state.name} 
                        onChange={this.handleChange}
                        style={{width: '500px', }}
                        />
                        <br></br><br></br>
                        <TextField
                        required
                        id="price"
                        label="Price"
                        // variant="outlined"
                        value={this.state.price} 
                        onChange={this.handleChange}
                        style={{width: '500px', }}
                        />
                        <br></br><br></br>
                        <TextField
                        id="quantity"
                        label="Quantity"
                        // select
                        // variant="outlined"
                        value={this.state.quantity} 
                        onChange={this.handleChange}
                        style={{width: '500px', }}
                        /> 
                        <br></br><br></br>
                        <TextField
                        id="rating"
                        label="Rating"
                        // select
                        // type="integer"
                        // variant="outlined"
                        value={this.state.rating} 
                        onChange={this.handleChange}
                        style={{width: '500px', }}
                        /> 
                        <br></br><br></br>
                        <TextField
                        id="description"
                        label="Description"
                        type="textarea"
                        // helperText="Some important text"
                        // variant="outlined"
                        value={this.state.description} 
                        onChange={this.handleChange}
                        style={{width: '500px', }}
                        /> 
                        <br></br><br></br>
                        <TextField
                        id="ingredients"
                        label="Ingredients"
                        type="textarea"
                        // helperText="Some important text"
                        // variant="outlined"
                        value={this.state.ingredients} 
                        onChange={this.handleChange}
                        style={{width: '500px', }}
                        /> 
                        <br></br><br></br>
                        <TextField
                        id="image"
                        label="Image URL"
                        // variant="outlined"
                        value={this.state.image} 
                        onChange={this.handleChange}
                        style={{width: '500px', }}
                        /> 
                        <br></br><br></br><br></br><br></br>  
                        <Button variant="contained" type="submit"
                        style={{
                            radius: '3',
                            border: '0.6px solid #D3D3D3',
                            backgroundColor: '#dcead9',
                            color: '#3e4e60',
                            fontWeight: 'bold',
                            padding: '6px 25px',

                        }}>Add</Button>
                        <br></br><br></br>
                        
                    </form>
                    {/* </div> */}
                    <br></br>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" style={{width: '100%', height: '100%'}}></img>
                </div>
            </div>
            </center>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        createNewProduct: (event, productData, history) => { dispatch(createNewProduct(event, productData, history));
        }
    }
}


export default connect(null, mapDispatchToProps)(AddProduct);