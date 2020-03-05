import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import CardSection from './CardSection';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Complete from './Complete';
import { connect } from 'react-redux';

class PaymentForm extends React.Component {

    //cannot figure out how to process customer information into stripe call in backend but all information is correctly being passed to backend******************
    //from newest article
    state ={
        complete: false,
        name: '',
        email: '',
        phone: ''
    }

    handleChange = (event) => {
        // console.log(event.target.id)
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    submit = async () => {
    
        console.log(this.props.orderId)
        console.log(this.state.name)
        let {token} = await this.props.stripe.createToken({name: 'Name'});
        console.log(token)
        const tokenId = localStorage.token;
        let response = await fetch('https://sweet-spot-back-end.herokuapp.com/charges', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${tokenId}`
            },
            body: JSON.stringify({
                token: token.id,
                orderId: this.props.orderId.data.id,
                amount: this.props.orderId.data.attributes.total,
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
            })
        })
        console.log(response)
        if(response.ok) {
            this.setState({
                complete: true
            })
        }
    }

    render() {
        if (this.state.complete) return <Complete />

        
        return (
            <center>
            <div id="checkout">
                <div>
                    <img src="https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" style={{width: '100%', height: '100%', objectFit: 'cover', }} />
                </div>
                <div>
                    <br></br><br></br>
                    <h2 style={{color: '#6A6C6E'}}>Checkout</h2>
                    <br></br>
                    <label id="checkout-label">
                        <h3>Customer Information</h3>
                    </label>
                    
                    <form id="customer">
                    <TextField type="text" id="name" label="Full Name" 
                    style={{width: '50%', color: '#32325D'}} 
                    value={this.state.name}
                    onChange={this.handleChange} ></TextField>
                    
                    <br></br>
                    <TextField type="text" id="email" label="Email" 
                    value={this.state.email} 
                    onChange={this.handleChange}
                    style={{width: '50%', color: '#D3D3D3'}} ></TextField>
                    <br></br>
                    <TextField type="text" id="phone" label="Phone" 
                    value={this.state.phone} 
                    onChange={this.handleChange}
                    style={{width: '50%', color: '#D3D3D3'}} ></TextField>

                    <br></br><br></br><br></br><br></br>
                    <CardSection />
                    <br></br><br></br><br></br>
                    <div id="payment">
                        <div>
                            {(this.props.orderId).length !== 0 ? 
                            <h2>Total: ${this.props.total}</h2>
                            : console.log('not cool')}
                        </div>
                        <div>
                            <Button onClick={this.submit} 
                            style={{ radius: '3',
                            border: '0.6px solid #D3D3D3',
                            backgroundColor: '#dcead9',
                            color: '#3e4e60',
                            fontWeight: 'bold',
                            padding: '10px 25px',
                            fontFamily: 'Montserrat',}}
                            >Confirm Purchase</Button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
            </center>
        )
        
    }
}

const mapStateToProps = state => {
    return {
        total: state.orderTotal
    }
}

export default connect(mapStateToProps, null)(injectStripe(PaymentForm));