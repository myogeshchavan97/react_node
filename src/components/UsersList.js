import React from 'react';
import { connect } from 'react-redux';
import User from './User';

const UsersList = (props) => {
    return (
        <div className="user-list">
            { props.users && props.users.map((user) => <User key={user.login.uuid} {...user} /> ) }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        users: state
    };
};

export default connect(mapStateToProps)(UsersList);
