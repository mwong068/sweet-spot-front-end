import React from 'react';
import { connect } from 'react-redux';
import FavoriteCard from './FavoriteCard';

class FavoritesList extends React.Component{
    displayEmpty = (favorites) => {
        console.log(favorites)
        if(Object.keys(favorites).length !== 0){
            if(favorites.data.length === 0)
            return <h2 style={{marginRight: '-615px'}}>No favorites yet!<br></br>Why don't you go add some products?</h2> 
            }
            else{
                return <h2 style={{marginRight: '-615px'}}>No favorites yet!<br></br>Why don't you go add some products?</h2>
            }
    }

    render() {
        return (
            <center>
            <div id='favorites'>
                {Object.keys(this.props.favorites).length !== 0 ?
                (this.props.favorites.data.map(item => <FavoriteCard {...item.attributes.product} history={this.props.history} productId={item.id} />))
                : null }

                {this.displayEmpty(this.props.favorites)}
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