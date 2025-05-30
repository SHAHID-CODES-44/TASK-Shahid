import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';
import SearchBar from './SearchBar';
import GenderFilter from './GenderFilter';
import UserModal from './UserModal';
const UserDirectory = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [gender, setGender] = useState('all');
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  // Fetch users based on page
  const fetchUsers = (pageNumber) => {
    setLoading(true);
    fetch(`https://randomuser.me/api/?page=${pageNumber}&results=10`)
      .then((res) => res.json())
      .then((data) => {
        const newUsers = [...users, ...data.results];
        setUsers(newUsers);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch users.');
        setLoading(false);
      });
  };

  // Fetch more when page number changes
  useEffect(() => {
    fetchUsers(page);
    // eslint-disable-next-line
  }, [page]);

  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;
      if (nearBottom && !loading) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  // Filter users
  useEffect(() => {
    let result = users;

    if (gender !== 'all') {
      result = result.filter((user) => user.gender === gender);
    }

    if (searchTerm.trim()) {
      result = result.filter((user) =>
        `${user.name.first} ${user.name.last}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }

    setFilteredUsers(result);
  }, [searchTerm, gender, users]);

  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h1>See Users</h1>

      <div className="controls">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <GenderFilter gender={gender} setGender={setGender} />
      </div>

      <div className="card-grid">
        {filteredUsers.map((user) => (
          <UserCard
            key={user.login.uuid}
            user={user}
            onClick={() => setSelectedUser(user)}
          />
        ))}
      </div>

      {loading && <p>Loading more users...</p>}

      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default UserDirectory;
