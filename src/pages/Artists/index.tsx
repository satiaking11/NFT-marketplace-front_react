/* eslint-disable max-len */

import React from 'react';
import FeaturedArtists from '../../components/Section/FeaturedArtists';
import PageTitle from '../../components/PageTitle';
import SectionTitle from '../../components/Section/Title';
import ButtonSort from '../../components/Sort/Sort';
import ButtonFilter from '../../components/Filter/Filter';
import ArtistCard from '../../components/Card/ArtistCard';
import useScrollToTop from '../../hooks/useScrollToTop';

function Home() {
  useScrollToTop();

  return (
    <div className="artists-page mt-12">
      <div className="container">
        <PageTitle className="mb-6">Artists</PageTitle>
        <FeaturedArtists />
        <div className="flex items-center justify-between">
          <SectionTitle>10,545 Artists</SectionTitle>
          <div className="flex items-center ">
            <ButtonSort />
            <ButtonFilter />
          </div>
        </div>
        <div className="my-12 grid grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(((item, index) => (
            <ArtistCard
              key={item}
              size="lg"
            >
              <div className="max-w-[331px] h-[532px] w-full text-center flex flex-col items-center mx-auto">
                <div className="flex-grow">
                  <div className="rounded-full overflow-hidden h-[197px] w-[197px] mx-auto mt-8">
                    <img src={`/images/avatar/artists/${index + 1}.png`} alt="avatar" />
                  </div>
                  <p className="text-[26px] font-semibold mt-4">Stephanie Sharkey</p>
                  <p className="text-light-gray-400 dark:text-light-gray mt-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                  <ul className="grid grid-cols-3 gap-4 mt-12">
                    <li>
                      <p className="text-3xl font-bold">137</p>
                      <p className="text-light-gray-400 dark:text-light-gray">items</p>
                    </li>
                    <li>
                      <p className="text-3xl font-bold">4</p>
                      <p className="text-light-gray-400 dark:text-light-gray">collections</p>
                    </li>
                    <li>
                      <p className="text-3xl font-bold">0.12</p>
                      <p className="text-light-gray-400 dark:text-light-gray">floor price</p>
                    </li>
                  </ul>
                </div>

              </div>
            </ArtistCard>
          )))}
        </div>

      </div>
    </div>
  );
}

export default Home;
