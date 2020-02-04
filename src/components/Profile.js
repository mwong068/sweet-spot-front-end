import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';


class Profile extends React.Component {

    // componentDidMount() {
    //     fetch(http://127.0.0.1:3000/users)
    // }

    render() {
        return (
            <div>
                <div id="profile-header">
                    <div>
                    <img src={require('../assets/felicia.jpg')} width='90px' height='90px' style={{borderRadius: '50%'}}></img>
                    </div>
                    <div>
                    <h1>Hi there, {this.props.currentUser}!</h1>
                    </div>
                    <div></div>
                    <div>
                    <Button variant="contained" type="submit"
                        style={{
                            radius: '3',
                            border: '1px solid #979797',
                            backgroundColor: '#C3DBBF',
                            padding: '11px 20px',

                        }}>view profile</Button>
                    </div>
                    <div>
                    <Button variant="contained" color="primary"
                        style={{
                            borderRadius: 5,
                            backgroundColor: 'white',
                            padding: "9px 30px",
                            fontSize: "14px",
                            color: 'black',
                            border: '3px solid #ECD189',
                        }}
                        >SIGN OUT</Button>
                    </div>
                </div>
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