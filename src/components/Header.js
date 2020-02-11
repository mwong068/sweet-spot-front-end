import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import checkUser from "../actions/checkUser";
import { connect } from 'react-redux';



class Header extends React.Component {

    componentDidMount() {
        // this.props.checkUser();
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
                        fontWeight: 'bold',
                        fontFamily: 'Montserrat',
                    }}>Home</Button></Link></h3>
                </div>
                <div></div>
                <div>
                    <h3><Link to="/products" style={{ textDecoration: 'none' }}><Button
                    style={{
                        fontSize: "16px",
                        color: 'black',
                        textTransform: 'capitalize',
                        fontWeight: 'bold',
                        fontFamily: 'Montserrat',
                    }}>Shop</Button></Link></h3>
                </div>
                <div></div>
                <div>
                    <h3><Link to="/addproduct" style={{ textDecoration: 'none' }}><Button
                    style={{
                        fontSize: "16px",
                        color: 'black',
                        textTransform: 'capitalize',
                        fontWeight: '700',
                        fontFamily: 'Montserrat',
                    }}>Add a Product</Button></Link></h3>
                </div>
                <div></div>
                <div>
                    <h3><Link to="/about" style={{ textDecoration: 'none' }}><Button
                    style={{
                        fontSize: "16px",
                        color: 'black',
                        textTransform: 'capitalize',
                        fontWeight: 'bold',
                        fontFamily: 'Montserrat',
                    }}>About</Button></Link></h3>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser
})

const mapDispatchToProps = (dispatch) => ({
    // checkUser: () => { dispatch(checkUser()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);