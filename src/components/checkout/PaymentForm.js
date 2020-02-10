import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import CardSection from './CardSection';

class PaymentForm extends React.Component {
    //from first react stripe article
    // state = {
    //     email: ''    
    // }

    // async submit(event) {
    //     let chargeToken = await this.props.stripe.createToken({name: "Name"})
    //     const token = localStorage.token;

    //     let charge = {
    //         token: chargeToken.token.id
    //     }
    //     let response = await fetch('http://127.0.0.1:3000/charges', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json',
    //             'Authorization': `Bearer ${token}`
    //         }
    //         body: JSON.stringify({
    //             charge: charge
    //         })
    //     })

    //     if (response.ok) console.log("Purchase Complete!")
    // }

    // render () {
    //     return (
    //         <div>

    //         </div>
    //     )
    // }


    //from stripe
    // handleSubmit = (ev) => {
    //     ev.preventDefault();

    //     this.props.stripe.confirmCardPayment('{PAYMENT_INTENT_CLIENT_SECRET}', {
    //         payment_method: {
    //             card: this.props.elements.getElement('card'),
    //             billing_details: {
    //                 name: 'Jenny Rosen',
    //             },
    //         }
    //     })
    // }

    // render() {
    //     return (
    //         <form onSubmit={this.handleSubmit}>
    //             <CardSection />
    //             <button>Confirm order</button>
    //         </form>
    //     )
    // }


    //from newest article
    state ={
        complete: false
    }

    submit = async () => {
    
        console.log(this.props.orderId)
        let {token} = await this.props.stripe.createToken({name: 'Name'});
        console.log(token)
        const tokenId = localStorage.token;
        let response = await fetch('http://127.0.0.1:3000/charges', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${tokenId}`
            },
            body: JSON.stringify({
                token: token.id,
                orderId: this.props.orderId.data.id,
                amount: this.props.orderId.data.attributes.total
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
        if (this.state.complete) return <h1>Purchase Complete! Thanks for your order :) Please check your email shortly for a confirmation of your delivery date.</h1>

        
        return (
            <div>
                <p>Would you like to complete the purchase?</p>
                <CardSection />
                <button onClick={this.submit}>Purchase</button>
            </div>
        )
        
    }
}

export default injectStripe(PaymentForm);