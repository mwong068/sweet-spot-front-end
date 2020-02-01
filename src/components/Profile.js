import React from 'react';
import { connect } from 'react-redux';

class Profile extends React.Component {

    // componentDidMount() {
    //     fetch(http://127.0.0.1:3000/users)
    // }

    render() {
        return (
            <div>
                <h1>Hi there, {this.props.currentUser}</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Profile);