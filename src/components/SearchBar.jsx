import React from 'react';
import './SearchBar.css'; // Vamos criar este arquivo CSS depois

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Pesquisar..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;