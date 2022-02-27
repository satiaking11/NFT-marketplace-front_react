/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import classNames from 'classnames';
import React from 'react';

type Props = {
  color?: string;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  className?: string;
  [rest:string]: any;
}

function Button({
  color = '',
  type = 'button',
  children,
  className = '',
  ...rest
}: Props) {
  if (color === 'primary') {
    return (
      <button type={type} {...rest} className={classNames('bg-primary text-white rounded-full dark:bg-primary-900 dark:text-white dark:hover:bg-primary dark:hover:text-white', className)}>
        {children}
      </button>
    );
  }
  if (color === 'default') {
    return (
      <button type={type} {...rest} className={classNames('h-0', className)}>
        {children}
      </button>
    );
  }
  return (
    <button type={type} {...rest} className={classNames('btn-light flex items-center gap-x-2 px-6 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-primary', className)}>
      {children}
    </button>
  );
}

export default Button;
