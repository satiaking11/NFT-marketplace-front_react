import React from 'react';
import useComponentVisible from '../../hooks/useComponentVisible';
import Button from '../Button/Button';

function Sort() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  return (
    <div className="relative">
      <Button className="mx-2" onClick={() => { setIsOpen(true); setIsComponentVisible(true); }}>
        <img src="/icons/sort.svg" alt="sort" />
        Sort By
      </Button>
      {isOpen && (
        <div ref={ref}>
          {isComponentVisible && setIsOpen && (
          <div className="shadow-card absolute right-1 top-[50px] w-[142px] bg-white dark:bg-black-800 dark:text-white rounded-3xl px-4 py-6 z-50">
            <ul className="grid grid-rows-4 grid-flow-col gap-6">
              <li>
                Lowest Price
              </li>
              <li>
                Highest Price
              </li>
              <li>
                Most Recent
              </li>
              <li>
                Oldest
              </li>
            </ul>
          </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Sort;
