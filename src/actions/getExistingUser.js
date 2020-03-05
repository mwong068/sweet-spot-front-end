// import { useHistory } from 'react-router-dom';

const getExistingUser = (event, userData, history) => {
    event.preventDefault();
    // console.log(history)
    return (dispatch) => {
        dispatch({type: 'LOGGING_IN'})
        return fetch('https://sweet-spot-back-end.herokuapp.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            user: {
            username: event.target.username.value,
            password: event.target.password.value
            }
        })
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            if(data.message){
                window.alert(data.message)
            }
            else {
                localStorage.setItem('token', data.jwt);
                dispatch({type: "SET_CURRENT_USER", currentUser: data.user.data})
                history.push('/profile')
                // return data.user.data.attributes.username
            }
        })
        // console.log(data.user.data.attributes.username)
        // .then(history.push('/profile'))
    }
}

export default getExistingUser