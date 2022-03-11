import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from './Title';
import ButtonFilter from '../Filter/Filter';
import DefaultCard from '../Card/DefaultCard';
import SideStats from '../SideStats/SideStats';
import LoadMoreButton from '../Button/LoadMoreButton';

function ArtistsList() {
  return (
    <section className="artists-list">
      <div className="flex items-center justify-between">
        <SectionTitle>10,545 Artists</SectionTitle>
        <div className="flex items-center ">
          <ButtonFilter />
        </div>
      </div>
      <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(((item, index) => (
          <Link to="/artist-profile">
            <DefaultCard
              key={item}
              className="w-card-lg"
            >
              <div className="bg-light-gray-50 max-w-[331px] h-[532px] w-full text-center flex flex-col items-center mx-auto">
                <div className="flex-grow">
                  <div className="rounded-full overflow-hidden h-[197px] w-[197px] mx-auto mt-8">
                    <img src={`/images/avatar/artists/${index + 1}.png`} alt="avatar" />
                  </div>
                  <p className="text-[26px] font-semibold mt-4">Stephanie Sharkey</p>
                  <p className="text-light-gray-400 dark:text-light-gray mt-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                  <SideStats type="horizontal" />
                </div>

              </div>
            </DefaultCard>
          </Link>
        )))}
      </div>
      <LoadMoreButton />
    </section>
  );
}

export default ArtistsList;
