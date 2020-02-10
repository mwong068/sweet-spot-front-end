// import { useHistory } from 'react-router-dom';

const postNewUser = (event, userData, history) => {
    event.preventDefault();
    // console.log(userData)
    return (dispatch) => {
        dispatch({type: 'SIGNING_UP'})
        return fetch('http://127.0.0.1:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            user: userData
        })
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            if(data.error){
                console.log("uh-oh")
            }
            else {
                localStorage.setItem('token', data.jwt);
                dispatch({type: "SET_CURRENT_USER", currentUser: data.user.data.attributes})
                
                // return data.user.data.attributes.username
            }
        })
        .then(history.push('/profile'))
    }
}

export default postNewUser