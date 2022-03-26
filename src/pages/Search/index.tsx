/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import GroupButton from '../../components/Button/GroupButton';
import NoDataFound from '../../components/NoDataFound/NoDataFound';
import PageTitle from '../../components/PageTitle';
import ArtistsList from '../../components/Section/ArtistsList';
import NFTCollections from '../../components/Section/NFTCollections';
import TrendingCollections from '../../components/Section/TrendingCollections';

function Search() {
  const [active, setActive] = useState('NFTs');

  // this is just dummy variable to hid notDataFound component
  const isDataFound = false;

  return (
    <div className="container mt-10 mb-[170px] px-4 md:px-0">
      <PageTitle className="mb-6 text-light-gray-400 dark:white">
        Search results for
        <span className="text-black-400 dark:text-light-gray dark:font-semibold "> Meta</span>
      </PageTitle>
      <div className="wrapper flex mb-6">
        <div className="tabs">
          <div className="flex items-center gap-x-2 border-[2px] rounded-[20px] border-[#194185] p-1">
            {['NFTs', 'Collections', 'Artists'].map((item, index) => (
              <GroupButton
                key={index}
                onItemClicked={() => setActive(item)}
                isActive={active === item}
              >
                {item}
              </GroupButton>
            ))}
          </div>
        </div>
      </div>
      {isDataFound && (
        <NoDataFound
          isButton={false}
          heading="nothing found"
          text="Try to use another search phrase"
        />
      )}

      <div className="content">
        {active === 'NFTs' && (
          <div>
            <NFTCollections withSort withFilter title="" />
          </div>
        )}
        {active === 'Collections' && (
          <div>
            <TrendingCollections title="Trending Collections of this week" />
            <TrendingCollections withMenu title="Categories" />
          </div>
        )}
        {active === 'Artists' && (
          <div>
            <ArtistsList />
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
