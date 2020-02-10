
import React from 'react';
import {CardElement} from 'react-stripe-elements';

const style = {
  base: {
    color: "#32325d",
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: "antialiased",
    fontSize: "16px",
    width: '100px',
    "::placeholder": {
      color: "#aab7c4"
    }
  },
  invalid: {
    color: "#fa755a",
    iconColor: "#fa755a"
  }
};

const CardSection = () => {
  return (
    <center>
        <label>
        Card details
            <CardElement className="MyCardElement" style={style} />
        </label>
    </center>
  );
};

export default CardSection;