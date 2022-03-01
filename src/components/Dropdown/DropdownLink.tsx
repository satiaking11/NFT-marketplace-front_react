/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  className?: string;
  link?: string;
}

function Button({
  children,
  className = '',
  link = '',
}: Props) {
  return (
    <Link className={classNames('flex hover:bg-[#fafafa] dark:hover:bg-black-900 px-8', className)} to={link}>{children}</Link>
  );
}

export default Button;
