import React from 'react';
import { useSelector } from 'react-redux';


export default function Subscribe() {
    const user = useSelector(state => state.currentUser);

    return(
        <div>
             <div id="subscribe">
                <h1 style={{color: '#C3DBBF', fontSize: '40px'}}>Welcome to the family!</h1>
                <br></br>
                <h2 style={{textTransform: 'none', fontSize: '28px'}}>Thanks for subscribing {(Object.keys(user).length !== 0 ? (user.attributes.name) : null)}!</h2>
                <p style={{fontSize: '23px'}}>We appreciate your support.</p>
                <br></br>
                <p style={{fontSize: '18px'}}>Keep an eye on your inbox for fun newletters,</p>
                <p style={{fontSize: '18px'}}>updates on the latest sales, and information</p>
                <p style={{fontSize: '18px'}}>about new products being added everyday!</p>
            </div>
        </div>
    )
}