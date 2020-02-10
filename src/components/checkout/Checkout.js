import React from 'react';
import { Elements } from 'react-stripe-elements';
import PaymentForm from './PaymentForm';


class Checkout extends React.Component {

    render () {
        return (
            <div>
                <Elements>
                    <PaymentForm />
                </Elements>
                </div>
        )
    }
}

export default Checkout;