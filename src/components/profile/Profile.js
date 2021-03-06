import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ProfileDesc from './ProfileDesc';
import EditProfile from './EditProfile';
import logoutUser from "../../actions/users/logoutUser";
import previousOrders from "../../actions/cart/previousOrders";
import createNewOrder from '../../actions/cart/createNewOrder';


class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0
        }
    }

    componentDidMount () {
        // this.props.createNewOrder();
    }

    handleClick = (event, history) => {
        event.preventDefault();
        localStorage.removeItem("token")
        this.props.logoutUser(event, history);
    }

    handleUpdate = (event, history) => {
        event.preventDefault();
        this.setState({
            value: 4
        })
    }

    render() {
        return (
            <div>
                <center>
                <div id="profile-header">
                    <div>
                    <img src={require('../../assets/pie.jpg')} width='150px' height='150px' style={{borderRadius: '50%', objectFit: 'cover'}}></img>
                    </div>
                    <div><br></br>
                    {/* get order */}
                    {(Object.keys(this.props.currentUser).length !== 0) ? this.props.createNewOrder(this.props.currentUser) : null}
                    {(Object.keys(this.props.currentUser).length !== 0) ? this.props.previousOrders(this.props.currentUser) : null}
                    {/* {console.log(this.props.currentUser)} */}
                    {Object.keys(this.props.currentUser).length !== 0 ? 
                    <h1 style={{color: 'black', fontSize: '35px'}}>Hi there, {this.props.currentUser.attributes.name}!</h1>
                    : null}
                    
                    {Object.keys(this.props.currentUser).length !== 0 ? 
                    <h3>@{this.props.currentUser.attributes.username}</h3>
                    : null}


                    </div>
                    <div><br></br><br></br><br></br>
                    {/* edit profile button ---------------------------------------------------- */}
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
                        edit profile
                        </Button>
                    <span style={{color: 'white'}}> ----</span>
                    {/* sign out button -------------------------------------------------------- */}
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
                <ProfileDesc info={this.props.currentUser}
                history={this.props.history}
                val={this.state.value}
                />
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
    logoutUser: (event, history) => { dispatch(logoutUser(event, history)) },
    createNewOrder: (userInfo) => { dispatch(createNewOrder(userInfo)) },
    previousOrders: (userInfo) => { dispatch(previousOrders(userInfo)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

