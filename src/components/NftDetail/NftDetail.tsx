/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
import BidModal from '../Bid/BidModal';
import Button from '../Button/Button';

type Props = {
  preposition?: Boolean;
  bids?: Boolean;
};

function NftDetail({ preposition, bids }: Props) {
  return (
    <div className="my-6 p-8 bg-light-gray-50 md:max-w-[845px] w-full rounded-[32px] dark:bg-black-800">
      <div className="flex justify-between ">
        <div className="flex md:max-h-[115px]  md:w-[60%] w-full pr-8">
          <div className="mr-4">
            <img
              src="/images/nft/1.png"
              alt="nft"
              className="md:h-[115px] md:max-w-[115px]  rounded-3xl"
            />
          </div>
          <div className="flex flex-col justify-between">
            <h2 className="font-semibold text-xl ">NFT name</h2>
            <p className="text-light-gray-400 dark:text-light-gray">
              Collection name could be so long and a litle bit longer
            </p>
            <p className="text-light-gray-400 dark:text-light-gray">
              last:{' '}
              <span className="text-black-400  dark:text-white">
                12 min ago
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col md:w-[40%] pr-2.5 pl-9 border-l border-light-gray-1">
          {preposition && (
            <div className="mb-4">
              <div className="flex mb-2.5 text-light-gray-400 dark:text-dark-gray-400">
                <p className="grow-[2]">2 days ago</p>
                <p className="grow">100 ADA </p>
                <p>($143.39)</p>
              </div>
              <div className="flex mb-2.5 text-light-gray-400 dark:text-dark-gray-400">
                <p className="grow-[2]">2 days ago</p>
                <p className="grow">100 ADA </p>
                <p>($143.39)</p>
              </div>
              <div className="flex mb-2.5 text-light-gray-400 dark:text-dark-gray-400">
                <p className="grow-[2]">2 days ago</p>
                <p className="grow">100 ADA </p>
                <p>($143.39)</p>
              </div>
              <div className="flex mb-2.5 text-light-gray-400 dark:text-dark-gray-400">
                <p className="grow-[2]">2 days ago</p>
                <p className="grow">100 ADA </p>
                <p>($143.39)</p>
              </div>
              <div className="flex mb-2.5 text-black-400 dark:text-white">
                <p className="grow-[2]">2 days ago</p>
                <p className="grow">100 ADA </p>
                <p className="dark:text-light-gray">($143.39)</p>
              </div>
            </div>
          )}
          {bids && (
            <div className="mb-4">
              <p className="text-light-gray-400">You Proposed</p>
              <p className="text-light-gray-400 flex items-center">
                <span className="font-bold text-2xl mr-1">246</span>
                <span className="mr-2 text-2xl">ADA</span>
                <span>($ 307.12)</span>
              </p>
            </div>
          )}
          <div className="flex justify-between">
            <BidModal />
            <Button
              className="p-0 border-none hover:bg-transparent hover:text-primary dark:hover:bg-black-800 dark:hover:text-white"
              style={{ padding: 0 }}
            >
              Decline
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NftDetail;
