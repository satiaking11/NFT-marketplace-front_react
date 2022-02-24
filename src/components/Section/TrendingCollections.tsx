/* eslint-disable max-len */
import React from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import LinkWithIcon from '../LinkWithIcon';
import SectionTitle from './Title';

function TrendingCollections() {
  return (
    <section className="explore-categories mb-36">
      <div className="mb-6 flex items-center justify-between">
        <SectionTitle>Trending Collections</SectionTitle>
        <LinkWithIcon href="/">Explore all</LinkWithIcon>
      </div>
      <div className="flex justify-between">
        {[1, 2, 3].map(((item) => (
          <Card
            key={item}
            size="lg"
            cover={`images/nft-cover/collections/${item}.png`}
            avatar={`images/avatar/collections/${item}.png`}
          >
            <div className="card-details px-8 pt-4 pb-6">
              <p className="text-2xl mb-2">Collection name could be so long and a little bit longer</p>
              <p className="text-sm mb-3">
                by
                {' '}
                <span className="text-link">Kimberly Mastrangelo</span>
              </p>
              <p className="text-sm text-light-gray-400 dark:text-light-gray">
                Aliquam a dui vel justo fringilla euismod id id enim. Nunc non semper tellus. Pellentesque vitae tellus non hendrerit. In...
              </p>
            </div>
          </Card>
        )))}
      </div>
      <div className="refresh flex justify-center my-10">
        <Button>
          <Icon name="refresh-cw" className="stroke-current" />
          Load More
        </Button>
      </div>
    </section>
  );
}

export default TrendingCollections;
