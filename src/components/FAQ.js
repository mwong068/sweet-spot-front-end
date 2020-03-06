import React from 'react';
import { useSelector } from 'react-redux';

export default function Subscribe() {
    const user = useSelector(state => state.currentUser);

    return(
        <div>
             <div id="faq">
                <h1 style={{color: '#C3DBBF'}}>Frequently Asked Questions</h1>
                <br></br>
                <h2 style={{textTransform: 'none'}}>Is this a real website?</h2>
                <p>Not yet, but with a bit more development and some funding this could be a real business in the future!</p>
                <br></br>
                <h2 style={{textTransform: 'none'}}>Why can't I check out without creating an account?</h2>
                <p>Currently, you must be logged in order to shop at Sweet Spot but in the future we may have a guest checkout option.</p>
                <br></br>
                <h2 style={{textTransform: 'none'}}>Who made this website?</h2>
                <p>My name is Megan and I'm a software engineer in the San Francisco Bay Area.</p>
                <p>You can check out my portfolio and a bit about me here at my <a rel={'external'} href={"http://www.megan-wong.com"} >personal website</a>.</p>
                <br></br>
            </div>
        </div>
    )
}