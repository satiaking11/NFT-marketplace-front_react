import React from 'react';
import useScrollToTop from '../../hooks/useScrollToTop';

function NFT() {
  useScrollToTop();

  return (
    <div className="home-page">
      <div className="container">
        <section className="mb-28">

          <div className="flex flex-col md:flex-row gap-6 p-[16px] md:p-0">
            <div className="w-full md:w-[594px]">
              <img src="images/nft/1.png" alt="cover" />
            </div>
            <div className="w-full md:w-[594px]">
              <p className="text-[32px] text-black-400 dark:text-light-gray mb-10">NFT name could be so long and a litle bit longer</p>
              <div className="flex justify-between mb-4">
                <p className="text-gray-400 dark:text-light-gray">Created By:</p>
                {' '}
                <p className="text-link">Kimberly Mastrangelo</p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-gray-400 dark:text-light-gray">Collection:</p>
                {' '}
                <p>Collection name could be so long and a little bit longer</p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-gray-400 dark:text-light-gray">Released:</p>
                {' '}
                <p>Feb 02, 2021</p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-gray-400 dark:text-light-gray">№ of copies:</p>
                {' '}
                <p>23</p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-gray-400 dark:text-light-gray">Status:</p>
                {' '}
                <p className="text-[#00AA0D]">On sale</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default NFT;
