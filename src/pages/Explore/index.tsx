/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */

import React, { useState } from 'react';
import PageTitle from '../../components/PageTitle';
import useScrollToTop from '../../hooks/useScrollToTop';
import TrendingNFTs from '../../components/Section/TrendingNFTs';
import GroupButton from '../../components/Button/GroupButton';
import ExploreList from '../../components/Section/ExploreList';
import TrendingCollections from '../../components/Section/TrendingCollections';

function Home() {
  useScrollToTop();
  const [active, setActive] = useState('NFTs');

  return (
    <div className="artists-page mt-12">
      <div className="container">
        <div className="flex items-center mb-6">
          <PageTitle className="mr-10">Explore</PageTitle>
          <div className="wrapper">
            <div className="tabs">
              <div className="flex items-center gap-x-2 border-[2px] rounded-[20px] border-[#194185] p-1">

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

          {
           active === 'NFTs' && (
           <div>
             <TrendingNFTs withSwiper title="Trending NFTs of this week" />
             <ExploreList />
           </div>
           )
         }
          {
           active === 'Collections' && (
           <div>
             <TrendingCollections title="Trending Collections of this week" />
             <TrendingCollections withMenu title="Categories" />
           </div>
           )
         }
        </div>

      </div>
    </div>
  );
}

export default Home;
