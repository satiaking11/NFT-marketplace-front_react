import classNames from 'classnames';
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string
}

function SectionTitle({ children, className = '' }: Props) {
  return (
    <p className={classNames('md:text-2xl text-[22px] font-semibold', className)}>{children}</p>
  );
}

export default SectionTitle;
