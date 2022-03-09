import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from './Title';
import ButtonFilter from '../Filter/Filter';
import ArtistCard from '../Card/ArtistCard';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import SideStats from '../SideStats/SideStats';

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
                  <SideStats type="horizontal" />
                </div>

              </div>
            </ArtistCard>
          </Link>
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

export default ArtistsList;
