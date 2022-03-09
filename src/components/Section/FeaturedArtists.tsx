import React from 'react';
import Card from '../Card/Card';
import LinkWithIcon from '../LinkWithIcon';
import SideStats from '../SideStats/SideStats';
import SectionTitle from './Title';

function FeaturedArtists() {
  return (
    <section className="explore-categories mb-36">
      <div className="mb-6 flex items-center justify-between">
        <SectionTitle>Featured Artists</SectionTitle>
        <LinkWithIcon href="/artists">Explore all</LinkWithIcon>
      </div>
      <div className="bg-light-red dark:text-white dark:bg-[#24284D] h-full md:h-[534px] py-10 pl-0 md:pl-10 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-[331px] w-full h-full text-center flex flex-col">
          <div className="flex-grow">
            <div className="rounded-full overflow-hidden h-[197px] w-[197px] mx-auto mt-4">
              <img src="/images/avatar/stephanie.png" alt="" />
            </div>
            <p className="text-[26px] font-semibold mt-4">Stephanie Sharkey</p>
            <p className="text-light-gray-400 dark:text-light-gray mt-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
          </div>
          <SideStats type="horizontal" />
        </div>
        <div className="flex mt-14 md:mt-0">
          <div className="scale-75 -mb-60 -mr-10 md:-mr-16">
            <Card
              cover="/images/nft-cover/trending/1.png"
            >
              <div className="card-details md:px-8 md:py-4 px-3 py-2">
                <p className="text-[8px] md:text-[16px]">NFT name</p>
                <p className="text-[5px] text-light-gray-400 dark:text-light-gray md:text-[16px]">
                  Collection name could be so long and a little bit longer
                </p>
                <p className="text-red-400 dark:text-red-800 text-[6px] md:text-lg">
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
              <div className="card-details md:px-8 md:py-4 px-4 py-2">
                <p className="text-[10px] md:text-lg">NFT name</p>
                <p className="text-[7px] text-light-gray-400 dark:text-light-gray md:text-[16px]">
                  Collection name could be so long and a little bit longer
                </p>
                <p className="text-red-400 dark:text-red-800 text-[8px] md:text-lg">
                  <span className="font-bold">120</span>
                  {' '}
                  ADA
                </p>
              </div>
            </Card>
          </div>
          <div className="scale-75 -mb-60 -ml-10 md:-ml-16">
            <Card
              cover="/images/nft-cover/trending/3.png"
            >
              <div className="card-details md:px-8 md:py-4 px-3 py-2">
                <p className="text-[8px] md:text-[16px]">NFT name</p>
                <p className="text-[5px] text-light-gray-400 dark:text-light-gray md:text-[16px]">
                  Collection name could be so long and a little bit longer
                </p>
                <p className="text-red-400 dark:text-red-800 text-[6px] md:text-lg">
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
