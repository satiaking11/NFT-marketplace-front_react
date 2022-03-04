/* eslint-disable max-len */
import classNames from 'classnames';
import React from 'react';

type Props = {
  children: React.ReactNode;
  onItemClicked: React.MouseEventHandler<HTMLButtonElement>;
  isActive: boolean;
}

function GroupButton(
  {
    children = '',
    onItemClicked = () => console.error('You passed no action to the component'),
    isActive = false,
  }: Props,
) {
  return (

    <button
      type="button"
      className={classNames('px-6 rounded-2xl h-[45px]', isActive ? 'btn-gradient text-white' : 'text-primary dark:text-white color-primary hover:bg-primary hover:text-white')}
      onClick={onItemClicked}
    >
      {children}
    </button>

  );
}

export default GroupButton;
