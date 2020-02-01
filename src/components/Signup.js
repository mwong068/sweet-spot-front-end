import React from 'react';
import { connect } from 'react-redux';
import postNewUser from '../actions/postNewUser'

class Signup extends React.Component {

    state = {
        username: '',
        name: '',
        password: '',
        email: ''
    }

    handleChange = (e) => {
        console.log(e.target.value)
      this.setState({
          [e.target.name]: e.target.value
      })
    }


    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>

                <form onSubmit={ (e) => {this.props.postNewUser(e, this.state)} }>
                    <label>Name</label><br></br>
                    <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}></input>
                    <br></br><br></br>
                    <label>Username</label><br></br>
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}></input>
                    <br></br><br></br>
                    <label>Email</label><br></br>
                    <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}></input>
                    <br></br><br></br>
                    <label>Password</label><br></br>
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}></input>
                    <br></br><br></br>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postNewUser: (event, userData) => { dispatch(postNewUser(event, userData)) }
    }
}

export default connect(null, mapDispatchToProps)(Signup);