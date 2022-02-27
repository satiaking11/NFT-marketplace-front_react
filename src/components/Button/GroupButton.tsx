/* eslint-disable max-len */
import classNames from 'classnames';
import React, { useState } from 'react';

function GroupButton() {
  const [active, setActive] = useState('NFTs');
  return (
    <div className="flex items-center gap-x-2 border-[2px] rounded-[20px] border-[#194185] p-1">
      {['NFTs', 'Collections'].map((item) => (
        <button
          key={item}
          type="button"
          className={classNames('px-6 rounded-2xl h-[45px]', active === item ? 'btn-gradient text-white' : 'text-primary dark:text-white color-primary hover:bg-primary hover:text-white')}
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

export default GroupButton;
