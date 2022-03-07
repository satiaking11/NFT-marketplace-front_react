/* eslint-disable max-len */
import React from 'react';
import SideStats from '../SideStats/SideStats';

function CollectionsBanner() {
  return (
    <div
      className="group bg-transparent card dark:bg-black-900 rounded-3xl overflow-hidden flex flex-col mb-20 mt-4"
    >
      <img draggable="false" className="min-h-[245px] object-fill" src="/images/collections/bg-1.png" alt="" />
      <div
        className="md:mx-12 mx-auto border-2 border-white dark:border-black rounded-full h-[123px] w-[123px] -mt-20 overflow-hidden"
      >
        <img src="/images/collections/1.png" alt="" className="h-[123px] w-[123px]" />
      </div>
      <div className="max-w-[846px] mx-auto flex flex-col md:flex-row">
        <div className="flex flex-col md:ml-10">
          <p className="text-[48px] font-semibold mt-4">Collection name could be so long and a little bit longer</p>
          <p className="text-gray-400 dark:text-light-gray">
            Created by
            <span className="ml-1 text-link">Kimberly Mastrangelo</span>
          </p>
          <p className="text-black-400 dark:text-light-gray mt-4">
            Donec dictum tristique porta. Etiam convallis lorem lobortis nulla molestie, nec tincidunt ex ullamcorper. Quisque ultrices lobortis elit sed euismod. Duis in ultrices dolor, ac rhoncus odio.
          </p>
        </div>
        <SideStats />
      </div>

    </div>
  );
}

export default CollectionsBanner;
