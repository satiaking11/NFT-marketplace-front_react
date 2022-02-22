import React from 'react';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import ExploreCategories from '../../components/Section/Categories';
import FeaturedArtists from '../../components/Section/FeaturedArtists';
import TrendingCollections from '../../components/Section/TrendingCollections';
import TrendingNFTs from '../../components/Section/TrendingNFTs';
import WhyChooseUs from '../../components/Section/WhyChooseUs';
import useScrollToTop from '../../hooks/useScrollToTop';
import './Home.sass';

function Home() {
  useScrollToTop();

  return (
    <div className="home-page">
      <div className="container">
        <section className="h-[590px] flex items-center justify-between mb-28">
          <div className="max-w-[519px] w-full">
            <p className="text-[3rem] mb-8">Explore, collect, and sell extraordinary NFTs</p>
            <Button className="px-12 py-3 text-lg h-auto" color="primary">Explore NFTs</Button>
          </div>
          <div className="cards relative left-[-309px]">
            <div className="relative z-50">
              <Card
                cover="/images/nft-cover/1.png"
                avatar="/images/avatar/card.png"
                size="lg"
              >
                <div className="card-details px-8 pt-4 pb-6">
                  <p className="text-2xl mb-2">Collection name could be so long and a little bit longer</p>
                  <p className="text-sm">
                    by
                    {' '}
                    <span className="text-link">Kimberly Mastrangelo</span>
                  </p>
                </div>
              </Card>
            </div>
            <div className="absolute -top-8 -right-[216px]">
              <Card
                cover="/images/nft-cover/2.png"
                size="xs"
              >
                <div className="card-details p-4">
                  <p>NFT name</p>
                  <p className="text-[0.667rem]">
                    Collection name could be so long and a little bit longer
                  </p>
                </div>
              </Card>
            </div>
            <div className="absolute bottom-[-117px] -right-[310px]">
              <Card
                cover="/images/nft-cover/3.png"
                size="xs"
              >
                <div className="card-details p-4">
                  <p>NFT name</p>
                  <p className="text-[0.667rem]">
                    Collection name could be so long and a little bit longer
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
        <ExploreCategories />
        <FeaturedArtists />
        <TrendingNFTs />
        <TrendingCollections />
        <WhyChooseUs withLabel withMoreDetails />
      </div>
    </div>
  );
}

export default Home;
