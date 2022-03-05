import classNames from 'classnames';
import React from 'react';
import Icon from '../Icon/Icon';
import './SearchInput.sass';

type Props = {
  className?: string,
}
function SearchInput({
  className = '',
}:Props) {
  return (
    <div className={classNames('search', className)}>
      <input type="text" placeholder="Search items, collections and artists" className="search-input" />
      <Icon name="search" className="search-icon" />
    </div>
  );
}

export default SearchInput;
