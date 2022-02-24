/* eslint-disable max-len */
import React from 'react';
import WatchVideo from '../WatchVideo/WatchVideo';

function ArtistProfile() {
  return (
    <section className="max-w-[1024px] mx-auto artist-profile mb-36">
      <div className="dark:text-white p-10 flex items-center justify-between">
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
        <div className="flex flex-col ml-10">
          <p className="text-[32px] font-semibold mt-4">Kimberly Mastrangelo</p>
          <p className="text-black-400 dark:text-light-gray mt-4">
            Brushpops is a generative system inspired by Roy Lichtenstein’s iconic work, where a random hash determines the composition of a series of abstract brush strokes. Lichtenstein’s original work has separated the brushstrokes from their original context, and now we take another step in the same direction, and separate the artist from the work.
          </p>
          <p className="text-[12px] mt-4 text-light-gray-400 dark:text-light-gray">CONTACT ME:</p>
          <div className="mt-3 flex items-center gap-x-8">
            <img src="/icons/instagram.svg" alt="" />
            <img src="/icons/twitter.svg" alt="" />
            <img src="/icons/facebook.svg" alt="" />
            <img src="/icons/mail.svg" alt="" />
            <img src="/icons/discord.svg" alt="" />
          </div>
        </div>
        <div className="border-l border-[#D0D5DD] flex ml-10">
          <ul className="ml-6 mt-4 grid grid-rows-3 grid-flow-col gap-8 place-content-center">
            <li>
              <p className="text-3xl text-primary dark:text-white font-bold">100K</p>
              <p className="text-light-gray-400 dark:text-light-gray">items</p>
            </li>
            <li>
              <p className="text-3xl text-primary dark:text-white font-bold">12</p>
              <p className="text-light-gray-400 dark:text-light-gray">collections</p>
            </li>
            <li>
              <p className="text-3xl text-primary dark:text-white font-bold">0.56</p>
              <p className="text-light-gray-400 dark:text-light-gray">floor price</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ArtistProfile;
