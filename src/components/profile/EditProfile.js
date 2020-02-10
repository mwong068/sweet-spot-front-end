import React from 'react';
import { connect } from 'react-redux';
import getExistingUser from '../../actions/getExistingUser';
import updateUser from '../../actions/updateUser';
import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


class EditProfile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            username: '',
            email: '',
            password: '',
            // password_confirmation: '',
            bio: '',
            id: 0
        }
    }

    handleChange = (event) => {
        console.log(event.target.id)
        this.setState({
            [event.target.id]: event.target.value
        })
    }


    componentDidMount() {
        this.setState ({
            name: this.props.info.attributes.name,
            username: this.props.currentUser.attributes.username,
            email: this.props.currentUser.attributes.email,
            password: this.props.currentUser.attributes.password,
            bio: this.props.currentUser.attributes.bio,
            id: this.props.currentUser.id
        })
    }


    render() {
        return (
            <div>
                <div id="edit-user">
                    <div>
                        <div><h4>Name:</h4></div>
                        <div><h4>Username:</h4></div>
                        <div><h4>Email:</h4></div>
                        <div><h4>Password:</h4></div>
                        <div><h4>Confirm Password:</h4></div>
                        <div><h4>Bio:</h4></div>
                    </div>
                    <div>
                        <form noValidate autoComplete="off" id="edit-user-form" onSubmit={ (event) => {this.props.updateUser(event, this.state, this.props.history)} }>            
                            <div>
                            <TextField
                            id="name"
                            label="Name"
                            variant="outlined"
                            value={this.state.name} 
                            onChange={this.handleChange}
                            style={{width: '500px'}}
                            /> 
                            </div>
                            <div>
                            <TextField
                            id="username"
                            label="Username"
                            variant="outlined"
                            value={this.state.username} 
                            onChange={this.handleChange}
                            style={{width: '500px'}}
                            /> 
                            </div>
                            <div>
                            <TextField
                            id="email"
                            label="Email"
                            variant="outlined"
                            value={this.state.email} 
                            onChange={this.handleChange}
                            style={{width: '500px'}}
                            /> 
                            </div>
                            <div>
                            <TextField
                            required
                            id="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            value={this.state.password} 
                            onChange={this.handleChange}
                            style={{width: '500px'}}
                            /> 
                            </div>
                            <div>
                            <TextField
                            id="password_confirmation"
                            label="Confirm Password"
                            type="password"
                            // helperText="Some important text"
                            variant="outlined"
                            value={this.state.password_confirmation} 
                            onChange={this.handleChange}
                            style={{width: '500px'}}
                            /> 
                            </div>             
                            <div>                
                            <TextField
                            id="bio"
                            label="Bio"
                            type="textarea"
                            // helperText="Some important text"
                            variant="outlined"
                            value={this.state.bio} 
                            onChange={this.handleChange}
                            style={{width: '500px'}}
                            />      
                            </div>
                            <br></br>
                        <center>
                        <Button variant="contained" type="submit"
                        style={{
                        borderRadius: 5,
                        backgroundColor: 'white',
                        padding: "9px 27px",
                        fontSize: "14px",
                        color: 'black',
                        border: '3px solid #f3e4b7',
                        fontFamily: 'Montserrat',
                        marginRight: '200px'
                        }}>Save</Button>
                    </center>
                        </form>
                    </div>
                </div>
            </div>
        )
    } 
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => {
    return {
        updateUser: (event, userData, history) => dispatch(updateUser(event, userData, history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);