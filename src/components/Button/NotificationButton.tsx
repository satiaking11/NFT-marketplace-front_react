/* eslint-disable max-len */
import React from 'react';
import Icon from '../Icon/Icon';

function NotificationButton() {
  return (
    <button className="relative" type="button">
      <Icon name="bell" className="stroke-current dark:text-white" />
      <span className="absolute top-[10px] right-[-2px] flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 dark:bg-red-800 opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-400 dark:bg-red-800" />
      </span>
    </button>
  );
}

export default NotificationButton;
