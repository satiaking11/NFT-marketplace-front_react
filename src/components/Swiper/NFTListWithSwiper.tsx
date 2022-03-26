/* eslint-disable max-len */
import React from 'react';
import BuyNow from '../BuyNow/BuyNow';
import Card from '../Card/Card';
import './HideScrollbars.sass';

function NFTListWithSwiper() {
  return (
    <section className="mb-20 md:mb-36">
      <div className="nft-list-swiper relative w-full flex gap-6 snap-x overflow-x-auto pb-14">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item} className="snap-center flex">
            <Card cover={`/images/nft-cover/trending/${item}.png`} className="w-card-base">
              <div className="card-details px-8 py-6">
                <p className="text-2xl mb-1">NFT name</p>
                <p className="mb-2">Collection name could be so long and a little bit longer</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-red-400 dark:text-red-800 text-lg">
                    <span className="font-bold">120</span>
                    ADA
                  </p>
                  <BuyNow />
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NFTListWithSwiper;
