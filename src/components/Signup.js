import React from 'react';
import { connect } from 'react-redux';
import postNewUser from '../actions/postNewUser';
import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';



class Signup extends React.Component {

    state = {
        username: '',
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    }

    handleChange = (e) => {
        console.log(e.target.id)
      this.setState({
          [e.target.id]: e.target.value
      })
    }


    componentDidMount() {

    }

    render() {
        return (
            <div id="signup-border">
                <div id="signup-container">
                    <h1>Create Account</h1>
                    <br></br>
                    <div>
                    <Button
                        variant="contained"
                        color="default"
                        // className={classes.button}
                        startIcon={<PeopleAltIcon />}
                    >
                        Sign up with Google
                    </Button><br></br><br></br>
                    <Button
                        variant="contained"
                        color="secondary"
                        // className={classes.button}
                        startIcon={<TwitterIcon />}
                    >
                        Sign up with Twitter
                    </Button><br></br><br></br>
                    <Button
                        variant="contained"
                        color="primary"
                        // className={classes.button}
                        startIcon={<FacebookIcon />}
                    >
                        Sign up with Facebook
                    </Button>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>     
                    </div>
                    <div>
                    <hr style={{width: "0.1px", height: "450px" }}></hr>
                    </div>
                    <div>
                    <form noValidate autoComplete="off" id="signup-form" onSubmit={ (e) => {this.props.postNewUser(e, this.state, this.props.history)} }>            
                        <TextField
                        required
                        id="name"
                        label="Name"
                        variant="outlined"
                        value={this.state.name} 
                        onChange={this.handleChange}
                        />
                        <br></br><br></br>
                        <TextField
                        required
                        id="email"
                        label="Email"
                        variant="outlined"
                        value={this.state.email} 
                        onChange={this.handleChange}
                        />
                        <br></br><br></br>
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
                        <Button variant="contained" color="primary" type="submit">Sign Up</Button>
                        <br></br><br></br>
                        <p>By signing up for Sweet Spot, you agree to the Terms of Service.</p>
                        <p>View our Privacy Policy.</p>
                        <h5>Already a member? <Link to="/login">Login</Link></h5>
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
        postNewUser: (event, userData, history) => { dispatch(postNewUser(event, userData, history));
        }
    }
}

export default connect(null, mapDispatchToProps)(Signup);



{/* <div id="form-div">
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
            </div> */}