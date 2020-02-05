import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ProfileDesc from './ProfileDesc';
import logoutUser from "../actions/logoutUser";


class Profile extends React.Component {

    // componentDidMount() {
    //     fetch(http://127.0.0.1:3000/users)
    // }

    handleClick = (event, history) => {
        console.log('hi')
        event.preventDefault();
        localStorage.removeItem("token")
        this.props.logoutUser(event, history);
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

                    {/* {console.log(this.props.currentUser)} */}
                    {/* {Object.keys(this.props.currentUser).length !== 0 ?  */}
                    <h1 style={{color: 'black', fontSize: '35px'}}>Hi there, {this.props.currentUser} !</h1>
                    {/* : null} */}
                    
                    {/* {Object.keys(this.props.currentUser).length !== 0 ?  */}
                    <h3>@{this.props.currentUser}</h3> 
                    {/* : null} */}

                   

                    </div>
                    <div><br></br><br></br><br></br>
                    <Button variant="contained" type="submit"
                        style={{
                            radius: '3',
                            border: '0.6px solid #D3D3D3',
                            backgroundColor: '#dcead9',
                            color: '#3e4e60',
                            fontWeight: 'bold',
                            padding: '10px 25px',
                            fontFamily: 'Montserrat',
                        }}
                        >edit profile</Button>
                    <span style={{color: 'white'}}>    fdgfdfd</span>
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
                        >SIGN OUT</Button>
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

