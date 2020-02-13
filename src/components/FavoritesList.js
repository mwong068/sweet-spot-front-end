import React from 'react';
import { connect } from 'react-redux';
import FavoriteCard from './FavoriteCard';

class FavoritesList extends React.Component{
    render() {
        return (
            <center>
            <div id='favorites'>
                {Object.keys(this.props.favorites).length !== 0 ?
                (this.props.favorites.data.map(item => <FavoriteCard {...item.attributes.product} history={this.props.history} />))
            : <h2>No favorites yet!<br></br>Why don't you go add some products?</h2> }
            </div>
            </center>
        )
    }
}

const mapStateToProps = state => {
    return{
        favorites: state.favorites
    }
}


export default connect(mapStateToProps, null)(FavoritesList);