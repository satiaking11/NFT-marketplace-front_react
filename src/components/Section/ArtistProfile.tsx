/* eslint-disable max-len */
import React from 'react';
import SideStats from '../SideStats/SideStats';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';
import WatchVideo from '../WatchVideo/WatchVideo';

function ArtistProfile() {
  return (
    <section className="md:p-0 max-w-[1024px] mx-auto artist-profile mb-36">
      <div className="flex flex-col md:flex-row dark:text-white md:p-10 flex items-center justify-between">
        <div className="w-full h-full text-center flex flex-col">
          <div className="flex-grow">
            <div className="rounded-full overflow-hidden h-[197px] w-[197px] mx-auto mt-4">
              <img src="/images/avatar/artists/11.png" alt="" />
            </div>
            <div className="mt-6 flex justify-center">
              <WatchVideo />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:ml-10">
          <p className="text-[32px] font-semibold mt-4">Kimberly Mastrangelo</p>
          <p className="text-black-400 dark:text-light-gray mt-4">
            Brushpops is a generative system inspired by Roy Lichtenstein’s iconic work, where a
            random hash determines the composition of a series of abstract brush strokes.
            Lichtenstein’s original work has separated the brushstrokes from their original context,
            and now we take another step in the same direction, and separate the artist from the
            work.
          </p>
          <p className="hidden md:block text-[12px] mt-4 text-light-gray-400 dark:text-light-gray">
            CONTACT ME:
          </p>
          <SocialMediaLinks className="hidden md:flex " />
          <SideStats className="block md:hidden mb-12" />
        </div>

        <p className="text-left w-full block md:hidden text-[12px] mt-4 text-light-gray-400 dark:text-light-gray">
          CONTACT ME:
        </p>
        <SocialMediaLinks className="block md:hidden w-full " />

        <SideStats className="hidden md:block" />
      </div>
    </section>
  );
}

export default ArtistProfile;
