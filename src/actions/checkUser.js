

const checkUser = (event, history) => {
    return (dispatch) => {
        const token = localStorage.token;
        console.log(token)
        dispatch({type: 'AUTHENTICATING'})
        return fetch('http://127.0.0.1:3000/profile', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
        }
        })
        .then(resp => resp.json())
        .then(data => {
            if(data.message){
                localStorage.removeItem("token")
            }
            else {
                // console.log(data.user.data)
                dispatch({type: "SET_CURRENT_USER", currentUser: data.user.data.attributes.name})
                // history.push("/");
                // return data.user.data.attributes.username
            }
        })
    }
}

export default checkUser