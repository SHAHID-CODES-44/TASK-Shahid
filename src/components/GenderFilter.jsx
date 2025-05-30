import React from 'react';

const GenderFilter = ({ gender, setGender }) => {
  return (
    <select value={gender} onChange={(e) => setGender(e.target.value)} className="filter-select">
      <option value="all">All</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  );
};

export default GenderFilter;
