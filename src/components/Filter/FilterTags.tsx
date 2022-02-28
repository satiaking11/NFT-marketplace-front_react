/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import classNames from 'classnames';
import React from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

type Props = {
  children: React.ReactNode;
  className?: string;
  [rest:string]: any;
}

function FilterTags({
  children,
  className = '',
  ...rest
}: Props) {
  return (
    <div {...rest} className={classNames('border-2 border-primary rounded-[16px] h-[56px] flex items-center gap-x-2 px-6 hover:bg-transparent hover:text-black-400 dark:text-white dark:border-white', className)}>
      {children}
      <Button className="ml-4" color="default">
        <Icon name="x" className="stroke-current" />
      </Button>
    </div>
  );
}

export default FilterTags;
