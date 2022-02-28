/* eslint-disable max-len */
import classNames from 'classnames';
import React, { useState } from 'react';

function Categories() {
  const [active, setActive] = useState('All');
  return (
    <div className="flex items-center gap-x-2">
      {['All', 'Art', 'Collectibles', 'Music', 'Virtual Worlds', 'Assets', 'Others'].map((item) => (
        <button
          key={item}
          type="button"
          className={classNames('px-6 rounded-2xl h-[45px]', active === item ? 'border border-primary btn-gradient text-white' : 'border border-primary text-primary dark:text-white dark:border-white color-primary hover:bg-primary hover:text-white')}
          onClick={() => {
            setActive(item);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Categories;
