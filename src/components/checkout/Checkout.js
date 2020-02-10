import React from 'react';
import { connect } from 'react-redux';
import { Elements } from 'react-stripe-elements';
import PaymentForm from './PaymentForm';


class Checkout extends React.Component {

    render () {
        return (
            <div>
                <Elements>
                    <PaymentForm orderId={this.props.order} />
                </Elements>
                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    order: state.completedOrder
    }
}

export default connect(mapStateToProps, null)(Checkout);