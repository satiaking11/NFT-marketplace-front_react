import React, { Dispatch, SetStateAction } from 'react';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import Icon from '../Icon/Icon';
import Modal from '../Modal';

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function WalletContent({
  setIsOpen,
}: Props) {
  return (
    <div className="max-w-[600px] w-full bg-white dark:bg-black-800 dark:text-white rounded-3xl px-8 py-6">
      <div className="flex items-start justify-between mb-4">
        <p className="text-2xl font-bold">Complete checkout</p>
        <button
          type="button"
          className="h-auto"
          onClick={() => { setIsOpen(false); }}
        >
          <Icon name="x" className="stroke-current" />
        </button>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col max-w-[390px]">
          <p className="text-light-gray-400 dark:text-light-gray">Items</p>
          <div className="mt-4 flex">
            <img src="/images/nft-thumbnail/thumbnail.png" className="" alt="thumbnail" />
            <div className="ml-4 flex flex-col justify-center">
              <p className="text-2xl mb-1 font-bold">NFT name</p>
              <p className="text-light-gray-400 dark:text-light-gray mb-2">
                Collection name could be so long and a little bit longer
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-light-gray-400 dark:text-light-gray">Subtotal</p>
          <div className="mt-4 text-right">
            <p>120 ADA</p>
            <p className="text-[14px] text-light-gray-400 dark:text-light-gray">$143.39</p>
          </div>
        </div>
      </div>
      <div className="mt-4 py-3 border-t flex justify-between">
        <div className="flex flex-col">
          <p className="text-light-gray-400 dark:text-light-gray">Service fee 0.1%</p>
          <p className="text-light-gray-400 dark:text-light-gray">Total:</p>
        </div>
        <div className="flex flex-col text-right">
          <p>0.12 ADA</p>
          <p>120.12 ADA</p>
          <p className="text-[14px] text-light-gray-400 dark:text-light-gray">$151.39</p>
        </div>
      </div>
      <Checkbox />
      <div className="flex mt-4">
        <Button> Confirm Checkout</Button>
      </div>
    </div>
  );
}

function Wallet() {
  return (
    <Modal>
      {(setIsOpen) => ({
        content: <WalletContent setIsOpen={setIsOpen} />,
        button: (
          <Button className="h-auto hidden group-hover:block border-none hover:bg-transparent dark:hover:bg-transparent dark:hover:text-white hover:text-primary" onClick={() => setIsOpen(true)}>
            Buy Now
          </Button>
        ),
      })}
    </Modal>
  );
}

export default Wallet;
