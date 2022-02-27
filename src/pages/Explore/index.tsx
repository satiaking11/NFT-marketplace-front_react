/* eslint-disable max-len */

import React from 'react';
import PageTitle from '../../components/PageTitle';
import useScrollToTop from '../../hooks/useScrollToTop';
import TrendingNFTs from '../../components/Section/TrendingNFTs';
import GroupButton from '../../components/Button/GroupButton';
import ExploreList from '../../components/Section/ExploreList';

function Home() {
  useScrollToTop();

  return (
    <div className="artists-page mt-12">
      <div className="container">
        <div className="flex items-center mb-6">
          <PageTitle className="mr-10">Explore</PageTitle>
          <GroupButton />
        </div>
        <TrendingNFTs withSwiper title="Trending NFTs of this week" />
        <ExploreList />
      </div>
    </div>
  );
}

export default Home;
