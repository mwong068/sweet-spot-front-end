// import { useHistory } from 'react-router-dom';

const postNewUser = (event, userData, history) => {
    event.preventDefault();
    // console.log(userData)
    return (dispatch) => {
        dispatch({type: 'SIGNING_UP'})
        return fetch('https://sweet-spot-back-end.herokuapp.com/users', {
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
            if(data.error){
                window.alert(data.error)
            }
            else {
                localStorage.setItem('token', data.jwt);
                dispatch({type: "SET_CURRENT_USER", currentUser: data.user.data})
                history.push('/profile')
                // return data.user.data.attributes.username
            }
        })
        // .then(history.push('/profile'))
    }
}

export default postNewUser