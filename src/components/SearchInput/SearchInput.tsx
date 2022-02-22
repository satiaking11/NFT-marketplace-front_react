import React from 'react';
import Icon from '../Icon/Icon';
import './SearchInput.sass';

function SearchInput() {
  return (
    <div className="search">
      <input type="text" placeholder="Search items, collections and artists" className="search-input" />
      <Icon name="search" className="search-icon" />
    </div>
  );
}

export default SearchInput;
