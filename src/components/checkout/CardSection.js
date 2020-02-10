
import React from 'react';
import {CardElement, CardNumberElement, CardExpiryElement, CardCvcElement, PaymentRequestButtonElement} from 'react-stripe-elements';

var inputs = document.querySelectorAll('.cell.example.example2 .input');
  Array.prototype.forEach.call(inputs, function(input) {
    input.addEventListener('focus', function() {
      input.classList.add('focused');
    });
    input.addEventListener('blur', function() {
      input.classList.remove('focused');
    });
    input.addEventListener('keyup', function() {
      if (input.value.length === 0) {
        input.classList.add('empty');
      } else {
        input.classList.remove('empty');
      }
    });
  });

const style = {
  // base: {
  //   color: "#32325d",
  //   fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
  //   fontSmoothing: "antialiased",
  //   fontSize: "16px",
  //   width: '100px',
  //   "::placeholder": {
  //     color: "#aab7c4"
  //   }
  // },
  // invalid: {
  //   color: "#fa755a",
  //   iconColor: "#fa755a"
  // }
  base: {
    color: '#6A6C6E',
    fontWeight: 500,
    fontFamily: 'Source Code Pro, Consolas, Menlo, monospace',
    fontSize: '16px',
    fontSmoothing: 'antialiased',

    '::placeholder': {
      color: '#6A6C6E',
    },
    ':-webkit-autofill': {
      color: '#e39f48',
    },
  },
  invalid: {
    color: '#E25950',

    '::placeholder': {
      color: '#FFCCA5',
    },
  },
};

var elementClasses = {
  focus: 'focus',
  empty: 'empty',
  invalid: 'invalid',
};

const CardSection = () => {
  return (
    <center>
        <label id="checkout-label">
        <h3>Payment Information</h3>
        </label>
        <br></br>
        <CardNumberElement className="MyCardElement" style={style} classes={elementClasses} />
       <br></br>
        <CardExpiryElement className="MyCardElement" style={style} classes={elementClasses} />
       <br></br>
        <CardCvcElement className="MyCardElement"  style={style} classes={elementClasses} />
       <br></br>
        {/* apple pay button - for later implementation */}
          {/* <PaymentRequestButtonElement className="MyCardElement" /> */}
        {/* one line card element */}
        {/* <CardElement className="MyCardElement" style={style} /> */}
        
    </center>
  );
};

export default CardSection;