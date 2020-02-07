import createHistory from 'history/createBrowserHistory'
const history = createHistory();


const updateUser = (event, userData, history) => {
    event.preventDefault();
    console.log(userData)
    console.log(event)
    const token = localStorage.token;
    return (dispatch) => {
        dispatch({type: 'UPDATING_USER'})
        return fetch('http://127.0.0.1:3000/users/' + `${userData.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            user: userData
        })
    })
        // .then(function processText({ done, value }) {
        //     if (done) {
        //       console.log("Stream complete");
        //       return;
        //     }
            
        //   })
        //   .then(console.log(processText));
          
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            if(data.error){
                console.log("uh-oh")
            }
            else {
                dispatch({type: "USER_UPDATED", currentUser: data.data})
                history.go(0)
                // history.push('/profile')

            }
        })
        // .then((username) => typeof username === 'string' ? history.push(`/users/${username}`) : null )  
    }
}
export default updateUser