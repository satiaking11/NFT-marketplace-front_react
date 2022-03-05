/* eslint-disable max-len */
import React from 'react';
import Card from '../Card/Card';
import LinkWithIcon from '../LinkWithIcon';
import SectionTitle from './Title';
import NFTListWithSwiper from '../Swiper/NFTListWithSwiper';
import CategoriesMenu from '../Categories/Categrories';

type Props = {
  withMenu?: boolean
  withSwiper?: boolean
  title?: string
}

function NFTList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <Card
          key={item}
          cover={`/images/nft-cover/trending/${item}.png`}
        >
          <div className="card-details px-8 py-6">
            <p className="text-2xl mb-1">NFT name</p>
            <p className="mb-2">
              Collection name could be so long and a little bit longer
            </p>
            <p className="text-red-400 dark:text-red-800 text-lg">
              <span className="font-bold">120</span>
              {' '}
              ADA
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}

function TrendingNFTs(
  {
    withMenu = false,
    withSwiper = false,
    title = 'Trending NFTs',
  }: Props,
) {
  return (
    <section className="explore-categories overflow-hidden mb-36 p-[16px] md:p-0">
      <SectionTitle className="mb-4">{title}</SectionTitle>
      {withMenu && (
        <div className="flex items-center justify-between mb-6">
          <CategoriesMenu />
          <LinkWithIcon href="/">Explore all</LinkWithIcon>
        </div>
      )}
      {withSwiper ? <NFTListWithSwiper /> : <NFTList />}
    </section>
  );
}

export default TrendingNFTs;
