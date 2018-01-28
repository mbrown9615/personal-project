import React from 'react';
import './profile.css';
import Nav from '../nav/nav';
import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/user';

class Profile extends React.Component {

    componentDidMount() {
        this.props.getUserInfo();
    }

    render() {
        const user = this.props.user;
        console.log(user);
        return (
            <div className="profile-main">
                <Nav />
                <div className="profile-box">
                    <div className="pic">
                        <img className='avatar' src={user.picture} alt="profile-pic" />
                    </div>
                    <div className="userInfo">
                        <p>Username: {user.nickname}</p>
                        <p>Name: {user.name}</p>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(Profile);