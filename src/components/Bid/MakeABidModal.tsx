/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Dispatch, SetStateAction, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Modal from '../Modal';
import PageTitle from '../PageTitle';
import { RootState } from '../../store';

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setIsSuccess: Dispatch<SetStateAction<boolean>>;
};

function BidContent({ setIsOpen, setIsSuccess }: Props) {
  const { darkMode } = useSelector((state: RootState) => state.settings);

  return (
    <div className="max-w-[600px] w-full bg-white dark:bg-black-800 dark:text-white rounded-3xl px-8 py-6">
      <div className="flex items-start justify-between mb-6 items-center">
        <p className="text-2xl font-bold ">Make a bid</p>
        <button
          type="button"
          className="h-auto"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <Icon name="x" className="stroke-current" />
        </button>
      </div>
      <p className="mb-8 dark:text-light-gray">
        This item in not On Sale now, but you can make a bid and probobly owner will sell it to you
        if you propose a good price.
      </p>
      <p className="mb-2 text-light-gray-400 dark:text-light-gray">Highest price </p>
      <div className="flex items-center mb-12 dark:text-light-gray">
        <span className="text-primary font-bold text-2xl pr-1 dark:text-light-gray">245</span>
        <span className="text-primary text-2xl mr-2 dark:text-light-gray">ADA</span>
        <span className="text-light-gray-400 text-base dark:text-light-gray">($ 287.12)</span>
      </div>

      <div className="flex justify-between">
        <p>
          YOUR BID <span className="text-red-100">*</span>
        </p>
        <p>
          YOUR BALANCE: <span>2,350.42</span> <span>ADA</span>
        </p>
      </div>

      <div className="mt-1 relative rounded-full shadow-sm  mb-2">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className=" sm:text-sm text-black-400 dark:text-white"> ADA: </span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="dark:text-dark-gray-400 dark:bg-black-800 border border-light-gray-1 focus:ring-indigo-500 focus:border-light-gray-1  placeholder-light-gray-1 block w-full pl-12 pr-12 sm:text-sm  rounded-xl"
          placeholder="min: 241"
        />
      </div>

      <div className="flex">
        <div className="mr-2">
          <Icon name="info" color={darkMode ? '#ffffff' : '#000000'} />
        </div>
        <p className="text-[12px] text-light-gray-400 mb-3 dark:text-light-gray">
          You must offer at least:{' '}
          <span className="text-black-400 dark:text-light-gray">241 ADA</span>
        </p>
      </div>
      <div className="flex mb-8">
        <div className="mr-2">
          <Icon name="info" color={darkMode ? '#ffffff' : '#000000'} />
        </div>
        <p className="text-[12px] text-light-gray-400 dark:text-light-gray">
          Total offer amount: <span className="text-black-400 dark:text-light-gray">241 ADA</span>
        </p>
      </div>

      <div className="flex">
        <Button
          color="primary"
          className="px-8 mr-10 "
          onClick={() => {
            setIsSuccess(true);
          }}
        >
          Place a bid
        </Button>
      </div>
    </div>
  );
}

type SuccessBidProps = {
  setIsSuccess: any;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function SuccessBidContent({ setIsSuccess, setIsOpen }: SuccessBidProps) {
  const { darkMode } = useSelector((state: RootState) => state.settings);

  return (
    <div className="max-w-[600px] w-full bg-white dark:bg-black-800 dark:text-white rounded-3xl px-8 md:px-20 py-6">
      <div className="flex items-end justify-end mb-10 items-center">
        <button
          type="button"
          className="h-auto"
          onClick={() => {
            setIsOpen(false);
            setIsSuccess(false);
          }}
        >
          <Icon name="x" className="stroke-current" />
        </button>
      </div>
      <div className="flex flex-col items-center mb-20 text-center">
        <PageTitle>Your bid has been accepted</PageTitle>
        {darkMode && <img src="/images/dark-check-white.svg" alt="success" />}
        {!darkMode && <img src="/images/check-white-1.png" alt="success" />}

        <p className="text-light-gray-400 dark:text-light-gray">
          If owner accept your bid you will get a notification, if he didn’t accept it in 3 days,
          you will get your money back.
        </p>
      </div>
    </div>
  );
}

function MakeABidModal() {
  const [isSuccess, setIsSuccess] = useState(false);
  return (
    <Modal>
      {(setIsOpen) => ({
        content: isSuccess ? (
          <SuccessBidContent setIsSuccess={setIsSuccess} setIsOpen={setIsOpen} />
        ) : (
          <BidContent setIsSuccess={setIsSuccess} setIsOpen={setIsOpen} />
        ),
        button: (
          <Button
            color="primary"
            className="py-2 px-12 text-[16px] h-[64px] md:h-full"
            onClick={() => setIsOpen(true)}
          >
            Buy now
          </Button>
        ),
      })}
    </Modal>
  );
}

export default MakeABidModal;
