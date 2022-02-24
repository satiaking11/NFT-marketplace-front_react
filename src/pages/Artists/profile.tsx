/* eslint-disable max-len */

import React from 'react';
import { Link } from 'react-router-dom';
import useScrollToTop from '../../hooks/useScrollToTop';
import Icon from '../../components/Icon/Icon';
import ArtistProfile from '../../components/Section/ArtistProfile';
import TrendingNFTs from '../../components/Section/TrendingNFTs';
import TrendingCollections from '../../components/Section/TrendingCollections';

function Home() {
  useScrollToTop();

  return (
    <div className="artist-profile mt-12">
      <div className="container">
        <div className="flex flex-row items-center">
          <Icon name="arrow-left" className="stroke-current dark:text-white mr-2" />
          <Link className="text-black-400 dark:text-white" to="/artists">
            Back to all artists
          </Link>
        </div>
        <ArtistProfile />
        <TrendingNFTs />
        <TrendingCollections />
        <div className="flex items-center justify-between" />
      </div>
    </div>
  );
}

export default Home;
