import React from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import NFTCollections from './NFTCollections';

function ExploreList() {
  return (
    <section className="artists-list p-[16px] md:p-0">
      <NFTCollections withMenu withSort withFilter title="Categories" />
      <div className="refresh flex justify-center my-10">
        <Button>
          <Icon name="refresh-cw" className="stroke-current" />
          Load More
        </Button>
      </div>
    </section>
  );
}

export default ExploreList;
