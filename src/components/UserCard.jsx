import React from 'react';


const UserCard = ({ user, onClick }) => {
  return (
    <div className="user-card fade-in" onClick={onClick}>
      <img src={user.picture.medium} alt="Profile" />
      <h3>{user.name.first} {user.name.last}</h3>
      <p>{user.location.country}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default UserCard;
