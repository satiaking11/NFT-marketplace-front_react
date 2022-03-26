/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */

import React, { useState } from 'react';
import PageTitle from '../../components/PageTitle';
import useScrollToTop from '../../hooks/useScrollToTop';
import TrendingNFTs from '../../components/Section/TrendingNFTs';
import GroupButton from '../../components/Button/GroupButton';
import ExploreList from '../../components/Section/ExploreList';
import TrendingCollections from '../../components/Section/TrendingCollections';
import './index.sass';

function Home() {
  useScrollToTop();
  const [active, setActive] = useState('NFTs');

  return (
    <div className="artists-page mt-12">
      <div className="container">
        <div className="block md:flex md:flex-row md:items-center mb-6 px-4 md:px-0">
          <PageTitle className="mr-10 mb-5">Explore</PageTitle>
          <div className="wrapper ">
            <div className="tabs w-max">
              <div className=" items-center gap-x-2 border-[2px] rounded-[20px] border-[#194185] p-1">
                {['NFTs', 'Collections'].map((item, index) => (
                  <GroupButton
                    key={index}
                    onItemClicked={() => setActive(item)}
                    isActive={active === item}
                  >
                    {item}
                  </GroupButton>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          {active === 'NFTs' && (
            <div>
              <TrendingNFTs withSwiper title="Trending NFTs of this week" />
              <ExploreList />
            </div>
          )}
          {active === 'Collections' && (
            <div>
              <TrendingCollections title="Trending Collections of this week" />
              <TrendingCollections withMenu title="Categories" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
