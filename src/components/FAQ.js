import React from 'react';
import { useSelector } from 'react-redux';


export default function Subscribe() {
    const user = useSelector(state => state.currentUser);

    return(
        <div>
             <div id="faq">
                <h1 style={{color: '#C3DBBF'}}>Frequently Asked Questions:</h1>
                <br></br>
                <h2 style={{textTransform: 'none'}}>Thanks for subscribing {(Object.keys(user).length !== 0 ? (user.attributes.name) : null)}!</h2>
                <p>We appreciate your support.</p>
                <br></br>
                <p>Keep an eye on your inbox for fun newletters,</p>
                <p>updates on the latest sales, and information</p>
                <p>about new products being added everyday!</p>
            </div>
        </div>
    )
}