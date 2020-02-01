import React from 'react';
import { connect } from 'react-redux';
import postNewUser from '../actions/postNewUser'

class Signup extends React.Component {


    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>

                <form onSubmit={ this.props.postNewUser }>
                    <label>Name</label><br></br>
                    <input type="text" name="name" placeholder="Name"></input>
                    <br></br><br></br>
                    <label>Username</label><br></br>
                    <input type="text" name="username" placeholder="Username"></input>
                    <br></br><br></br>
                    <label>Email</label><br></br>
                    <input type="text" name="email" placeholder="Email"></input>
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
        postNewUser: (event) => { dispatch(postNewUser(event)) }
    }
}

export default connect(null, mapDispatchToProps)(Signup);