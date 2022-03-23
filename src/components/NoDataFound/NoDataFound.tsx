/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import Button from '../Button/Button';

type Props = {
  isButton?: Boolean;
  heading?: String;
  text?: String;
};

function NoDataFound({
  isButton,
  heading = 'you did not made any bid',
  text = 'Explore NFTs to buy something awesome',
}: Props) {
  return (
    <div className="flex flex-col items-center mt-30">
      <img src="/images/vector.svg" alt="not found" className="mb-14 " />
      <h2 className="font-bold text-black-400 text-[32px] mb-4 dark:text-light-gray">{heading}</h2>
      <p className="text-black-400 mb-10 dark:text-light-gray">{text}</p>
      {isButton && (
        <Button color="primary" className="px-10 ">
          Explore NFTs
        </Button>
      )}
    </div>
  );
}

export default NoDataFound;
