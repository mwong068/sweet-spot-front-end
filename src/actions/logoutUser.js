
const logoutUser = (event, history) => {
    // console.log(history)
    return (dispatch) => {
        dispatch({type: 'LOGOUT'})
        history.push('/')
    }
}

export default logoutUser
