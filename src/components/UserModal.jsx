import React, { useEffect } from 'react';

const UserModal = ({ user, onClose }) => {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains('modal-backdrop')) {
        onClose();
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [onClose]);

  return (
    <div className="modal-backdrop">
      <div className="modal-content slide-up">
        <button className="close-btn" onClick={onClose}>X</button>
        <img src={user.picture.large} alt="Profile" />
        <h2>{user.name.first} {user.name.last}</h2>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Date of Birth:</strong> {new Date(user.dob.date).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default UserModal;
