import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import logoutUser from "../actions/logoutUser";
import checkUser from "../actions/checkUser";
import { connect } from 'react-redux';



class Header extends React.Component {

    componentDidMount() {
        this.props.checkUser();
    }

    handleClick = (event, history) => {
        event.preventDefault();
        localStorage.removeItem("token")
        this.props.logoutUser(event, history);
    }


    render () {
        return (
            <div id="container">
                <div>
                    <h3><Link to="/" style={{ textDecoration: 'none' }}><Button
                    style={{
                        fontSize: "16px",
                        color: 'black',
                        textTransform: 'capitalize',
                        fontWeight: 'semibold',
                    }}>Home</Button></Link></h3>
                </div>
                <div></div>
                <div>
                    <h3><Link to="/products" style={{ textDecoration: 'none' }}><Button
                    style={{
                        fontSize: "16px",
                        color: 'black',
                        textTransform: 'capitalize',
                        fontWeight: 'semibold',
                    }}>Shop</Button></Link></h3>
                </div>
                <div></div>
                <div>
                    <h3><Link to="/" style={{ textDecoration: 'none' }}><Button
                    style={{
                        fontSize: "16px",
                        color: 'black',
                        textTransform: 'capitalize',
                        fontWeight: 'semibold',
                    }}>Brands</Button></Link></h3>
                </div>
                <div></div>
                <div>
                    <h3><Link to="/about" style={{ textDecoration: 'none' }}><Button
                    style={{
                        fontSize: "16px",
                        color: 'black',
                        textTransform: 'capitalize',
                        fontWeight: 'semibold',
                    }}>About</Button></Link></h3>
                </div>
                <div></div>
                {this.props.currentUser ? 
                <div>
                    <h3><Button onClick={ (event) => {this.handleClick(event, this.props.history)} }
                    style={{
                        fontSize: "16px",
                        color: 'black',
                        textTransform: 'capitalize',
                        fontWeight: 'semibold',
                    }}>Logout</Button></h3>
                </div>
                : null }
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser
})

const mapDispatchToProps = (dispatch) => ({
    checkUser: () => { dispatch(checkUser()) },
    logoutUser: (event, history) => { dispatch(logoutUser(event, history)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);