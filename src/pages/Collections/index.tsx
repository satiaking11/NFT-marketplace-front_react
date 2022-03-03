/* eslint-disable max-len */

import React from 'react';
import { Link } from 'react-router-dom';
import useScrollToTop from '../../hooks/useScrollToTop';
import Icon from '../../components/Icon/Icon';
import TrendingCollections from '../../components/Section/TrendingCollections';
import CollectionsBanner from '../../components/CollectionsBanner/CollectionsBanner';
import NFTCollections from '../../components/Section/NFTCollections';

function Collections() {
  useScrollToTop();

  return (
    <div className="artist-profile mt-12">
      <div className="container">
        <div className="flex flex-row items-center">
          <Icon name="arrow-left" className="stroke-current dark:text-white mr-2" />
          <Link className="text-black-400 dark:text-white" to="/artists">
            Back to all collections
          </Link>
        </div>
        <CollectionsBanner />
        <NFTCollections withSort withFilter />
        <TrendingCollections />
        <div className="flex items-center justify-between" />
      </div>
    </div>
  );
}

export default Collections;
