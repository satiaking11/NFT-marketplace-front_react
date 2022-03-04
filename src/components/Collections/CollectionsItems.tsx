/* eslint-disable max-len */
import React from 'react';
import NFTCollections from '../Section/NFTCollections';
import TrendingCollections from '../Section/TrendingCollections';

function CollectionsItems() {
  return (
    <div>
      <NFTCollections withSort withFilter />
      <TrendingCollections />
    </div>
  );
}

export default CollectionsItems;
