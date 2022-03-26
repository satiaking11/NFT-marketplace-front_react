import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import ExploreCategories from '../../components/Section/Categories';
import FeaturedArtists from '../../components/Section/FeaturedArtists';
import TrendingCollections from '../../components/Section/TrendingCollections';
import TrendingNFTs from '../../components/Section/TrendingNFTs';
import WhyChooseUs from '../../components/Section/WhyChooseUs';
import useScrollToTop from '../../hooks/useScrollToTop';
import './index.sass';

function Home() {
  useScrollToTop();

  return (
    <div className="home-page p-[16px] md:p-0">
      <div className="container">
        <section className="h-[590px] flex flex-col md:flex-row items-center justify-between mb-28">
          <div className="max-w-[519px] w-full ">
            <p className="text-[38px] md:text-[3rem] mb-8 text-center md:text-left">
              Explore, collect, and sell extraordinary NFTs
            </p>
            <Button className="w-full md:w-fill px-12 py-3 text-lg h-auto" color="primary">
              Explore NFTs
            </Button>
          </div>
          <div className="cards relative left-[-80px] md:left-[-309px]">
            <div className="relative z-40">
              <Link to="/collections">
                <Card
                  cover="/images/nft-cover/1.png"
                  avatar="/images/avatar/card.png"
                  className="w-card-sm md:w-card-lg"
                >
                  <div className="card-details px-[15px] md:px-8 pt-1 md:pt-4 pb-6">
                    <p className="text-[11px] md:text-2xl mb-2">
                      Collection name could be so long and a little bit longer
                    </p>
                    <p className="text-[6px] md:text-[14px]">
                      by
                      <span className="text-link">Kimberly Mastrangelo</span>
                    </p>
                  </div>
                </Card>
              </Link>
            </div>
            <div className="absolute -top-8 -right-[100px] md:-right-[216px]">
              <Card cover="/images/nft-cover/2.png" className="w-card-xs md:w-card-md">
                <div className="card-details p-2 md:p-4">
                  <p className="text-[8px] md:text-[14px]">NFT name</p>
                  <p className="text-[6px] text-light-gray-400 dark:text-light-gray md:text-[0.667rem]">
                    Collection name could be so long and a little bit longer
                  </p>
                </div>
              </Card>
            </div>
            <div className="absolute bottom-[-23px] -right-[155px] md:bottom-[-117px] md:-right-[310px]">
              <Card cover="/images/nft-cover/3.png" className="w-card-xs md:w-card-md">
                <div className="card-details p-2 md:p-4">
                  <p className="text-[8px] md:text-[14px]">NFT name</p>
                  <p className="text-[6px] text-light-gray-400 dark:text-light-gray md:text-[0.667rem]">
                    Collection name could be so long and a little bit longer
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
        <ExploreCategories />
        <FeaturedArtists />
        <TrendingNFTs withMenu />
        <TrendingCollections />
        <WhyChooseUs withLabel withMoreDetails />
      </div>
    </div>
  );
}

export default Home;
