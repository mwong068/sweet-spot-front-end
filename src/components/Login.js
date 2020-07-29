import React from 'react';
import { connect } from 'react-redux';
import getExistingUser from '../actions/users/getExistingUser';
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
            password: ''
        }
    }

    handleChange = (event) => {
        // console.log(event.target.id)
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
                    <h1 style={{color: 'black'}}>Login</h1>
                    <br></br>
                    <div>
                    <Button
                        variant="contained"
                        color="default"
                        // className={classes.button}
                        startIcon={<PeopleAltIcon />}
                        style={{ 
                            backgroundColor: '#DF4930',
                            color: 'white',
                            radius: '2',
                            padding: '10px 30px',
                            textTransform: 'capitalize',
                            fontSize: '14px',
                            fontWeight: '500',
                        }}
                    >
                        Sign up with Google
                    </Button><br></br><br></br><br></br>
                    <Button
                        variant="contained"
                        color="secondary"
                        // className={classes.button}
                        startIcon={<TwitterIcon />}
                        style={{ 
                            backgroundColor: '#64CCF1',
                            color: 'white',
                            radius: '2',
                            padding: '10px 30px',
                            textTransform: 'capitalize',
                            fontSize: '14px',
                            fontWeight: '500',
                        }}
                    >
                        Sign up with Twitter
                    </Button><br></br><br></br><br></br>
                    <Button
                        variant="contained"
                        color="primary"
                        // className={classes.button}
                        startIcon={<FacebookIcon />}
                        style={{ 
                            backgroundColor: '#507CC0',
                            color: 'white',
                            radius: '2',
                            padding: '10px 30px',
                            textTransform: 'capitalize',
                            fontSize: '14px',
                            fontWeight: '500',
                        }}
                    >
                        Sign up with Facebook
                    </Button>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>     
                    </div>
                    <div>
                    <hr style={{width: "0.1px", height: "400px" }}></hr>
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
                        <br></br><br></br><br></br>     
                        <Button variant="contained" type="submit"
                        style={{
                            radius: '3',
                            border: '0.6px solid #D3D3D3',
                            backgroundColor: '#dcead9',
                            color: '#3e4e60',
                            fontWeight: 'bold',
                            padding: '5px 25px',
                        }}>Login</Button>
                        <br></br><br></br>
                        <h5>Not a member? <Link to="/signup" style={{fontSize: '14px'}}>Signup</Link></h5>
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

