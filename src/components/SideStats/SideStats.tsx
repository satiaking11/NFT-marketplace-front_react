import React from 'react';

function SideStats() {
  return (
    <div className="md:border-l border-[#D0D5DD] flex md:ml-10 mt-10 md:mt-0">
      <ul className="md:ml-6 mt-4 grid md:grid-rows-3 md:grid-flow-row grid-flow-col gap-8 place-content-center">
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
