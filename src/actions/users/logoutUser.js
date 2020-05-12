
const logoutUser = (event, history) => {
    // console.log(history)
    // return (dispatch) => {
    //     dispatch({type: 'LOGOUT'})
    //     history.push('/')
    // }
    history.push('/')
    history.go(0)
    return {type: 'LOGOUT'}
    
}

export default logoutUser
