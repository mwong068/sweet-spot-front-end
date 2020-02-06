import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ProfileDesc from './ProfileDesc';
import EditProfile from './EditProfile';
import logoutUser from "../actions/logoutUser";


class Profile extends React.Component {

    handleClick = (event, history) => {
        event.preventDefault();
        localStorage.removeItem("token")
        this.props.logoutUser(event, history);
    }

    handleUpdate = (event, history) => {
        console.log('hey')
        event.preventDefault();
        return (<EditProfile />)
    }

    render() {
        return (
            <div>
                <center>
                <div id="profile-header">
                    <div>
                    <img src={require('../assets/felicia.jpg')} width='150px' height='150px' style={{borderRadius: '50%', objectFit: 'cover'}}></img>
                    </div>
                    {/* <div></div>
                    <div></div>
                    <div></div>
                    <div></div> */}
                    <div><br></br>

                    {console.log(this.props.currentUser)}
                    {Object.keys(this.props.currentUser).length !== 0 ? 
                    <h1 style={{color: 'black', fontSize: '35px'}}>Hi there, {this.props.currentUser.name} !</h1>
                    : null}
                    
                    {Object.keys(this.props.currentUser).length !== 0 ? 
                    <h3>@{this.props.currentUser.username}</h3>
                    : null}

                   

                    </div>
                    <div><br></br><br></br><br></br>
                    <Button variant="contained" type="submit"
                    onClick={(event) => this.handleUpdate(event, this.props.history)}
                        style={{
                            radius: '3',
                            border: '0.6px solid #D3D3D3',
                            backgroundColor: '#dcead9',
                            color: '#3e4e60',
                            fontWeight: 'bold',
                            padding: '10px 25px',
                            fontFamily: 'Montserrat',
                        }}>
                        {/* <Link to='/editprofile' style={{textDecoration: 'none', color: '#3e4e60'}}> */}
                        edit profile
                        {/* </Link> */}
                        </Button>
                    <span style={{color: 'white'}}> ----</span>
                    {this.props.currentUser ? 
                    <Button variant="contained" color="primary"
                    onClick={(event) => this.handleClick(event, this.props.history)}
                        style={{
                            borderRadius: 5,
                            backgroundColor: 'white',
                            padding: "9px 27px",
                            fontSize: "14px",
                            color: 'black',
                            border: '3px solid #f3e4b7',
                            fontFamily: 'Montserrat',
                        }}
                        >
                        sign out</Button>
                    : null }
                    </div>
                </div>
                <br></br><br></br>
                <ProfileDesc info={this.props.currentUser}/>
                </center>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch) => ({
    logoutUser: (event, history) => { dispatch(logoutUser(event, history)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

