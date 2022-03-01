/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useComponentVisible from '../../hooks/useComponentVisible';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import DropdownLink from './DropdownLink';

function ExploreDropdown() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="relative flex items-center">
      <Button color="default" className="flex" onClick={() => { setIsOpen(true); setIsComponentVisible(true); }}>
        Explore
        <Icon name="chevron-down" className="stroke-current dark:text-white ml-2" />
      </Button>
      {isOpen && (
        <div ref={ref}>
          {isComponentVisible && setIsOpen && (
          <div className="shadow-card absolute right-1 top-10 w-[249px] bg-white dark:bg-black-800 dark:text-white rounded-3xl py-6 z-50">
            <ul className="grid grid-rows-2 grid-flow-col gap-6">
              {[{
                name: 'NFts',
                link: '/explore#NFTs',
              },
              {
                name: 'Collections',
                link: '/explore#Collections',
              },
              ].map(({ name, link }, index) => (
                <DropdownLink key={index} link={link}>{name}</DropdownLink>
              ))}
            </ul>
          </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ExploreDropdown;
