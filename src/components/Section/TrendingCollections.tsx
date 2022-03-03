/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import LinkWithIcon from '../LinkWithIcon';
import SectionTitle from './Title';
import CategoriesMenu from '../Categories/Categrories';

type Props = {
  withMenu?: boolean
  title?: string
}

function CollectionsList() {
  return (
    <div className="flex justify-between">
      {[1, 2, 3].map(((item) => (
        <Link to="/collections">
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
        </Link>
      )))}
    </div>
  );
}

function TrendingCollections(
  {
    withMenu = false,
    title = 'Trending NFTs',
  }: Props,
) {
  return (
    <section className="explore-categories mb-36">
      <SectionTitle className="mb-4">{title}</SectionTitle>
      {withMenu && (
        <div className="flex items-center justify-between mb-6">
          <CategoriesMenu />
          <LinkWithIcon href="/">Explore all</LinkWithIcon>
        </div>
      )}
      <CollectionsList />
    </section>
  );
}

export default TrendingCollections;
