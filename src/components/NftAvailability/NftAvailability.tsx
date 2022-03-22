/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

type Props = {
  success?: Boolean;
  error?: Boolean;
};

function NftAvailability({ success, error }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`container py-4 px-10 mb-[32px] ${
        error && 'bg-light-red dark:bg-dark-red'
      } ${success && 'bg-light-blue dark:bg-light-green'}  `}
    >
      <div className="flex justify-between items-center">
        <div className="left grow">
          <div className="max-w-[370px]">
            <h2 className="text-black-400 text-2xl font-bold mb-4 dark:text-white">
              Not available for SALE now
            </h2>
            {isOpen && (
              <>
                <p className="text-light-gray-400 leading-6 mb-4 dark:text-light-gray">
                  This NFT belongs to you, if you want to make it eligible for
                  selling please turn on this switcher
                </p>
                <ToggleSwitch />
                <p className="text-[13px] text-light-gray-400 dark:text-light-gray">
                  Or you can adjust it later in your wallet
                </p>
              </>
            )}
          </div>
        </div>
        {error && (
          <div className="right bg-white w-[35%] py-4 px-7 mr-[66px] dark:border dark:border-white dark:bg-transparent">
            <h4 className="text-xl text-black-400 mb-2 dark:text-white">
              You have
              <span className="fomt-semibold text-red-400"> 5 </span>
              bids for this NFT
            </h4>
            {isOpen && (
              <>
                <h4 className="text-xl text-black-400 mb-11 dark:text-white">
                  The highest bid is
                  <span className="font-semibold text-400"> 245 </span>
                  ADA
                  <span className="ml-2 text-light-gray-400 dark:text-light-gray">
                    ($284.17)
                  </span>
                </h4>

                <div className="flex justify-between items-center">
                  <Button color="primary" className="px-7">
                    Sell for 245 ADA
                  </Button>

                  <Button
                    color="default"
                    className="btn-light h-5 border-none hover:bg-transparent hover:text-primary dark:text-white dark:hover:bg-transparent dark:hover:text-white p-0"
                    style={{ padding: 0 }}
                  >
                    See all propositions
                  </Button>
                </div>
              </>
            )}
          </div>
        )}
        {isOpen && (
          <div
            className={`${isOpen && 'mb-auto'}`}
            onClick={() => setIsOpen(false)}
          >
            <Icon
              name="chevron-up"
              className="stroke-current dark:text-white ml-2"
            />
          </div>
        )}
        {!isOpen && (
          <div onClick={() => setIsOpen(true)}>
            <Icon
              name="chevron-down"
              className="stroke-current dark:text-white ml-2"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default NftAvailability;
