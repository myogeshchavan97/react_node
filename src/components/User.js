import React from 'react';

const User = ({ name, location, email, picture }) => {
    return (
        <div className="random-user">
            <div className="user-image">
                <img src={picture.medium} alt={name.first} />
            </div>
            <div>Name: {name.first} {name.last}</div>
            <div>Country: {location.country}</div>
            <div>Email: {email}</div>
        </div>
    );
};

export default User;