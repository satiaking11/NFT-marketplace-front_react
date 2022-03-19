/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import Button from '../Button/Button';

function NoDataFound() {
  return (
    <div className="flex flex-col items-center mt-30">
      <img src="/images/vector.svg" alt="not found" className="mb-14 " />
      <h2 className="font-bold text-black-400 text-[32px] mb-4">
        You didn't make any bid
      </h2>
      <p className="text-black-400 mb-10">
        Explore NFTs to buy something awesome
      </p>
      <Button color="primary" className="px-10 ">
        Explore NFTs
      </Button>
    </div>
  );
}

export default NoDataFound;
