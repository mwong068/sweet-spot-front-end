import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import CardSection from './CardSection';

class PaymentForm extends React.Component {
    //from article
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

    handleSubmit = (ev) => {
        ev.preventDefault();

        this.props.stripe.confirmCardPayment('{PAYMENT_INTENT_CLIENT_SECRET}', {
            payment_method: {
                card: this.props.elements.getElement('card'),
                billing_details: {
                    name: 'Jenny Rosen',
                },
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <CardSection />
                <button>Confirm order</button>
            </form>
        )
    }

}

export default injectStripe(PaymentForm);