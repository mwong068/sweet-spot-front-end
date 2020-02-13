import React from 'react';
import { connect } from 'react-redux';
import getFavorites from '../actions/getFavorites';
import FavoritesList from './FavoritesList'

class Favorites extends React.Component{

    componentDidMount () {
        
    }

    render() {
        return (
            <center>
            <div id='wishlist'>
                <div>
                    {this.props.getFavorites(this.props.user)}
                    <h1>Your Wishlist:</h1>
                    <FavoritesList history={this.props.history} />
                    <br></br><br></br>
                </div>
            </div>
            </center>
        )
    }
}

const mapStateToProps = state => {
    return{
        user: state.currentUser
    }
}

const mapDispatchToProps = dispatch => ({
        getFavorites: (user) => { dispatch(getFavorites(user))}
})


export default connect(mapStateToProps, mapDispatchToProps)(Favorites);