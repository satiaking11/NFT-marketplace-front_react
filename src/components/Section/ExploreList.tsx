import React from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import NFTCollections from './NFTCollections';

function ArtistsList() {
  return (
    <section className="artists-list">
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

export default ArtistsList;
