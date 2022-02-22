import React from 'react';
import Card from '../Card/Card';
import LinkWithIcon from '../LinkWithIcon';
import SectionTitle from './Title';

function FeaturedArtists() {
  return (
    <section className="explore-categories mb-36">
      <div className="mb-6 flex items-center justify-between">
        <SectionTitle>Featured Artists</SectionTitle>
        <LinkWithIcon href="/">Explore all</LinkWithIcon>
      </div>
      <div className="bg-light-red dark:text-white dark:bg-[#24284D] h-[534px] py-10 pl-10 flex items-center justify-between">
        <div className="max-w-[331px] w-full h-full text-center flex flex-col">
          <div className="flex-grow">
            <div className="rounded-full overflow-hidden h-[197px] w-[197px] mx-auto mt-4">
              <img src="/images/avatar/stephanie.png" alt="" />
            </div>
            <p className="text-[26px] font-semibold mt-4">Stephanie Sharkey</p>
            <p className="text-light-gray mt-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
          </div>
          <ul className="grid grid-cols-3 gap-4">
            <li>
              <p className="text-3xl font-bold">137</p>
              <p className="text-light-gray">items</p>
            </li>
            <li>
              <p className="text-3xl font-bold">4</p>
              <p className="text-light-gray">collections</p>
            </li>
            <li>
              <p className="text-3xl font-bold">0.12</p>
              <p className="text-light-gray">floor price</p>
            </li>
          </ul>
        </div>
        <div className="flex">
          <div className="scale-75 -mb-60 -mr-16">
            <Card
              cover="/images/nft-cover/trending/1.png"
            >
              <div className="card-details px-8 py-6">
                <p className="text-2xl mb-1">NFT name</p>
                <p className="text-light-gray mb-2">
                  Collection name could be so long and a little bit longer
                </p>
                <p className="text-red-400 text-lg">
                  <span className="font-bold">120</span>
                  {' '}
                  ADA
                </p>
              </div>
            </Card>
          </div>
          <div className="relative z-40">
            <Card
              cover="/images/nft-cover/trending/2.png"
            >
              <div className="card-details px-8 py-6">
                <p className="text-2xl mb-1">NFT name</p>
                <p className="text-light-gray mb-2">
                  Collection name could be so long and a little bit longer
                </p>
                <p className="text-red-400 text-lg">
                  <span className="font-bold">120</span>
                  {' '}
                  ADA
                </p>
              </div>
            </Card>
          </div>
          <div className="scale-75 -mb-60 -ml-16">
            <Card
              cover="/images/nft-cover/trending/3.png"
            >
              <div className="card-details px-8 py-6">
                <p className="text-2xl mb-1">NFT name</p>
                <p className="text-light-gray mb-2">
                  Collection name could be so long and a little bit longer
                </p>
                <p className="text-red-400 text-lg">
                  <span className="font-bold">120</span>
                  {' '}
                  ADA
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedArtists;
