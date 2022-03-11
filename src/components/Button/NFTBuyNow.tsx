/* eslint-disable max-len */
import React from 'react';
import Button from './Button';

function NFTBuyNow() {
  return (
    <div className="refresh flex flex-col md:flex-row md:items-center justify-between w-full rounded-[40px] py-2 md:pl-[40px] px-2 bg-[#f0f0f0] dark:bg-black">
      <div className="px-10 mb-3 md:mb-0 md:px-0">
        <p className="text-[16px] text-gray-400 dark:text-light-gray">Price</p>
        <p className="text-[24px] text-red-400 dark:text-red-800">
          <b>289</b>
          {' '}
          ADA
          <span className="ml-3 text-[16px] text-gray-400 dark:text-light-gray">($300.34)</span>
        </p>
      </div>
      <Button className="py-2 px-12 text-[16px] h-[64px] md:h-full" color="primary">
        Buy Now
      </Button>
    </div>
  );
}

export default NFTBuyNow;
