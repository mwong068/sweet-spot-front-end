import React from 'react';
import { connect } from 'react-redux';
import getExistingUser from '../actions/getExistingUser'

class Login extends React.Component {


    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h1>Login</h1>

                <form onSubmit={ this.props.getExistingUser }>
                    <label>Username</label><br></br>
                    <input type="text" name="username" placeholder="Username"></input>
                    <br></br><br></br>
                    <label>Password</label><br></br>
                    <input type="password" name="password" placeholder="Password"></input>
                    <br></br><br></br>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getExistingUser: (event) => { dispatch(getExistingUser(event)) }
    }
}

export default connect(null, mapDispatchToProps)(Login);