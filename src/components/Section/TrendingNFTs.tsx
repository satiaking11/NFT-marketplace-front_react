/* eslint-disable max-len */
import classNames from 'classnames';
import React, { useState } from 'react';
import Card from '../Card/Card';
import LinkWithIcon from '../LinkWithIcon';
import SectionTitle from './Title';

function TrendingNFTs() {
  const [active, setActive] = useState('All');
  return (
    <section className="explore-categories mb-36">
      <SectionTitle className="mb-4">Trending NFTs</SectionTitle>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-x-2">
          {['All', 'Art', 'Collectibles', 'Music', 'Virtual Worlds', 'Assets', 'Others'].map((item) => (
            <button
              key={item}
              type="button"
              className={classNames('px-6 rounded-2xl h-[45px]', active === item ? 'btn-gradient text-white' : 'border border-primary color-primary hover:bg-primary hover:text-white')}
              onClick={() => {
                setActive(item);
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <LinkWithIcon href="/">Explore all</LinkWithIcon>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <Card
            key={item}
            cover={`/images/nft-cover/trending/${item}.png`}
          >
            <div className="card-details px-8 py-6">
              <p className="text-2xl mb-1">NFT name</p>
              <p className="text-light-gray mb-2">
                Collection name could be so long and a little bit longer
              </p>
              <p className="text-red-400 text-lg">
                <span className="font-bold">120</span>
                {' '}
                ADA
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default TrendingNFTs;
