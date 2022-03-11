import classNames from 'classnames';
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
}

function DefaultCard({
  children,
  className,
}: Props) {
  return (
    <div
      className={classNames('card bg-white dark:bg-black-900 rounded-3xl overflow-hidden shadow-card flex flex-col', className)}
    >
      {children}
    </div>
  );
}

export default DefaultCard;
