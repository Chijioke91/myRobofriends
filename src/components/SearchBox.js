import React from 'react';

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className="pa2">
      <input
        onChange={e => onSearchChange(e)}
        className="pa3 ba b--green bg-lightest-green"
        type="text"
        placeholder="search robots"
      />
    </div>
  );
};

export default SearchBox;
