import React from 'react';

type Props = {
  type?: string;
  className?: String;
};

function SideStats({ type = '', className }: Props) {
  if (type === 'horizontal') {
    return (
      <ul className={`grid grid-cols-3 gap-0 mt-12 ${className}`}>
        <li>
          <p className="text-3xl font-bold">137</p>
          <p className="text-light-gray-400 dark:text-light-gray">items</p>
        </li>
        <li>
          <p className="text-3xl font-bold">4</p>
          <p className="text-light-gray-400 dark:text-light-gray">collections</p>
        </li>
        <li>
          <p className="text-3xl font-bold">0.12</p>
          <p className="text-light-gray-400 dark:text-light-gray">floor price</p>
        </li>
      </ul>
    );
  }
  return (
    <div className={`lg:border-l border-[#D0D5DD] flex lg:ml-10 mt-10 md:mt-0 ${className}`}>
      <ul className="lg:ml-6 mt-4 grid lg:grid-rows-3 lg:grid-flow-row grid-flow-col gap-8 place-content-center">
        <li>
          <p className="text-3xl text-primary dark:text-white font-bold">100K</p>
          <p className="text-light-gray-400 dark:text-light-gray">items</p>
        </li>
        <li>
          <p className="text-3xl text-primary dark:text-white font-bold">12</p>
          <p className="text-light-gray-400 dark:text-light-gray">collections</p>
        </li>
        <li>
          <p className="text-3xl text-primary dark:text-white font-bold">0.56</p>
          <p className="text-light-gray-400 dark:text-light-gray">floor price</p>
        </li>
      </ul>
    </div>
  );
}

export default SideStats;
