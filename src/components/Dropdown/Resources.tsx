import React from 'react';
import { Link } from 'react-router-dom';
import useComponentVisible from '../../hooks/useComponentVisible';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

function ResourcesDropdown() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  return (
    <div className="relative">
      <Button color="default" className="flex" onClick={() => { setIsOpen(true); setIsComponentVisible(true); }}>
        Resources
        <Icon name="chevron-down" className="stroke-current dark:text-white ml-2" />
      </Button>
      {isOpen && (
        <div ref={ref}>
          {isComponentVisible && setIsOpen && (
          <div className="shadow-card absolute right-1 top-10 w-[249px] bg-white dark:bg-black-800 dark:text-white rounded-3xl px-8 py-6 z-50">
            <ul className="grid grid-rows-4 grid-flow-col gap-6">
              <li>
                <Link to="/help-center">Help Center</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/about-us">Terms of Use</Link>
              </li>
            </ul>
          </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ResourcesDropdown;
