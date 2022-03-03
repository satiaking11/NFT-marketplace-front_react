import React from 'react';

function SideStats() {
  return (
    <div className="border-l border-[#D0D5DD] flex ml-10">
      <ul className="ml-6 mt-4 grid grid-rows-3 grid-flow-col gap-8 place-content-center">
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
