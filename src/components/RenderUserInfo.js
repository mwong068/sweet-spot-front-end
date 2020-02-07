import React from 'react';
import Button from '@material-ui/core/Button';



export default function RenderUserInfo(props) {

    return (
        <div>
        <div id="user-stuff">
            <div>
                <p style={{fontSize: '18px'}}><b>Name:</b></p>
            </div>
            <div>
                {Object.keys(props.info).length !== 0 ? 
                <p>{props.info.attributes.name}</p> 
                 : null} 
            </div>
        </div>
        <div id="user-stuff">
            <div>
                <p style={{fontSize: '18px'}}><b>Username:</b></p>
            </div>
            <div>
                {Object.keys(props.info).length !== 0 ? 
                <p>{props.info.attributes.username}</p> : null}
            </div>
        </div>
        <div id="user-stuff">
            <div>
                <p style={{fontSize: '18px'}}><b>Email:</b></p>
            </div>
            <div>
                {Object.keys(props.info).length !== 0 ? 
                <p>{props.info.attributes.email}</p> : null}
            </div>
        </div>
        <div id="user-stuff">
            <div>
                <p style={{fontSize: '18px'}}><b>Password:</b></p>
            </div>
            <div>
                <p>***********</p>
            </div>
        </div>
        <div id="user-stuff">
            <div>
                <p style={{fontSize: '18px'}}><b>Bio:</b></p>
            </div>
            <div>
                {Object.keys(props.info).length !== 0 ? 
                <p>{props.info.attributes.bio}</p> : null }
            </div>
        
            </div> 
        </div>
    )
}