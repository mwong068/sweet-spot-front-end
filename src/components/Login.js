import React from 'react';
import { connect } from 'react-redux';
import getExistingUser from '../actions/getExistingUser';
import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';


class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            password_confirmation: ''
        }
    }

    handleChange = (event) => {
        console.log(event.target.id)
        this.setState({
            [event.target.id]: event.target.value
        })
    }


    componentDidMount() {

    }


    render() {
        return (
            <div id="signup-border">
                <div id="signup-container">
                    <h1>Login</h1>
                    <br></br>
                    <div>
                    <Button
                        variant="contained"
                        color="default"
                        // className={classes.button}
                        startIcon={<PeopleAltIcon />}
                    >
                        Login with Google
                    </Button><br></br><br></br>
                    <Button
                        variant="contained"
                        color="secondary"
                        // className={classes.button}
                        startIcon={<TwitterIcon />}
                    >
                        Login with Twitter
                    </Button><br></br><br></br>
                    <Button
                        variant="contained"
                        color="primary"
                        // className={classes.button}
                        startIcon={<FacebookIcon />}
                    >
                        Login with Facebook
                    </Button>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>     
                    </div>
                    <div>
                    <hr style={{width: "0.1px", height: "450px" }}></hr>
                    </div>
                    <div>
                    <form noValidate autoComplete="off" id="signup-form" onSubmit={ (event) => {this.props.getExistingUser(event, this.state, this.props.history)} }>            
                        <TextField
                        id="username"
                        label="Username"
                        variant="outlined"
                        value={this.state.username} 
                        onChange={this.handleChange}
                        /> 
                        <br></br><br></br>
                        <TextField
                        id="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={this.state.password} 
                        onChange={this.handleChange}
                        /> 
                        <br></br><br></br>
                        <TextField
                        id="confirm-password"
                        label="Confirm Password"
                        type="password"
                        helperText="Some important text"
                        variant="outlined"
                        value={this.state.password_confirmation} 
                        onChange={this.handleChange}
                        /> 
                        <br></br><br></br><br></br>     
                        <Button variant="contained" color="primary" type="submit">Login</Button>
                        <br></br><br></br>
                        <h5>Not a member? <Link to="/signup">Signup</Link></h5>
                        <br></br><br></br><br></br><br/>
                    </form>
                    </div>
                    <br></br>
                    <h3 style={{color: 'white'}}>.</h3>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getExistingUser: (event, userData, history) => { dispatch(getExistingUser(event, userData, history)) }
    }
}

export default connect(null, mapDispatchToProps)(Login);


{/* <h1>Login</h1>

<form onSubmit={ this.props.getExistingUser }>
    <label>Username</label><br></br>
    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} ></input>
    <br></br><br></br>
    <label>Password</label><br></br>
    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} ></input>
    <br></br><br></br>
    <input type="submit" value="Submit"></input>
</form>
</div> */}