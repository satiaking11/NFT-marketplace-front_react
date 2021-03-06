/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import NFTBuyNow from '../Button/NFTBuyNow';

function NFT() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-[16px] md:p-0">
      <div className="w-full lg:w-[594px]">
        <img src="images/nft/1.png" alt="cover" className="w-full" />
      </div>
      <div className="w-full lg:w-[594px] flex flex-col">
        <p className="text-[32px] order-1 font-semibold text-black-400 dark:text-light-gray mb-4 md:mb-10">
          NFT name could be so long and a litle bit longer
        </p>
        <div className="order-3 md:order-2 flex flex-col w-full">
          <div className="flex justify-between mb-4">
            <p className="text-gray-400 dark:text-light-gray">Created By:</p>{' '}
            <p className="text-link">Kimberly Mastrangelo</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-gray-400 dark:text-light-gray">Collection:</p>{' '}
            <p className="max-w-[290px] text-right">
              Collection name could be so long and a little bit longer
            </p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-gray-400 dark:text-light-gray">Released:</p> <p>Feb 02, 2021</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-gray-400 dark:text-light-gray">№ of copies:</p> <p>23</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-gray-400 dark:text-light-gray">Status:</p>{' '}
            <p className="text-[#00AA0D]">On sale</p>
          </div>
        </div>
        <div className="order-2 md:order-3 mb-8 md:mb-0 flex mt-auto">
          <NFTBuyNow />
        </div>
      </div>
    </div>
  );
}

export default NFT;
