/* eslint-disable react/no-array-index-key */
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useComponentVisible from '../../hooks/useComponentVisible';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Modal from '../Modal';
import DropdownLink from '../Dropdown/DropdownLink';
import { RootState } from '../../store';

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function WalletContent({ setIsOpen }: Props) {
  return (
    <div className="max-w-[600px] w-full bg-white dark:bg-black-800 dark:text-white rounded-3xl px-8 py-6">
      <div className="flex items-start justify-between mb-4">
        <p className="text-2xl font-bold">Connect your wallet</p>
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
      <p>Connect with one of available wallet providers or create a new wallet.</p>
      <a href="/" className="text-link">
        What is wallet?
      </a>

      <div className="flex flex-col gap-y-4 mt-8 mb-4">
        {['Nami Wallet', 'CCVault', 'Gero Wallet'].map((item, index) => (
          <button
            type="button"
            key={item}
            className="w-full flex items-center p-3 px-4 border rounded-xl h-auto hover:bg-gray-100"
          >
            <img src={`/icons/wallet/${index + 1}.png`} alt="" className="mr-4" />
            Connect with
            {item}
          </button>
        ))}
      </div>
      <p className="mb-6">
        We do not own your private keys and cannot access your funds without your confirmation.
      </p>
      <div className="flex justify-center">
        <a href="/" className="text-primary dark:text-link text-lg">
          Show all wallets
        </a>
      </div>
    </div>
  );
}

function ConnectWallet() {
  return (
    <Modal>
      {(setIsOpen) => ({
        content: <WalletContent setIsOpen={setIsOpen} />,
        button: (
          <Button onClick={() => setIsOpen(true)}>
            <Icon name="briefcase" className="stroke-current" />
            My Wallet
          </Button>
        ),
      })}
    </Modal>
  );
}

function WalletDropdown() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const { pathname } = useLocation();

  const { darkMode } = useSelector((state: RootState) => state.settings);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="relative">
      <Button
        onClick={() => {
          setIsOpen(true);
          setIsComponentVisible(true);
        }}
      >
        <Icon name="briefcase" className="stroke-current" />
        My Wallet
      </Button>

      {isOpen && (
        <div ref={ref}>
          {isComponentVisible && setIsOpen && (
            <div className="z-[99] shadow-card absolute right-0 top-[50px]  w-[249px] bg-white dark:bg-black-800 dark:text-white rounded-3xl py-6 z-50">
              <ul className="grid grid-rows-4 grid-flow-col gap-6">
                {[
                  {
                    name: 'Current Items',
                    link: '/current-items',
                  },
                  {
                    name: 'Latest Activity',
                    link: '/activity',
                  },
                  {
                    name: 'My Prepositions',
                    link: '/prepositions',
                    totalPrepositions: 3,
                  },
                  {
                    name: 'Pending Bids',
                    link: '/pending',
                  },
                ].map(({ name, link, totalPrepositions }, index) => (
                  <DropdownLink key={index} link={link}>
                    {darkMode && (
                      <img
                        src={`/icons/wallet/wallet-dropdown/white-${index + 1}.svg`}
                        className="mr-3"
                        alt="icons"
                      />
                    )}
                    {!darkMode && (
                      <img
                        src={`/icons/wallet/wallet-dropdown/${index + 1}.svg`}
                        className="mr-3"
                        alt="icons"
                      />
                    )}
                    {name}
                    {totalPrepositions && (
                      <span className="ml-4 font-semibold text-red-400">{totalPrepositions}</span>
                    )}
                  </DropdownLink>
                ))}
              </ul>
              <hr className="my-7 dark:border-dark-gray-400" />
              <p className="flex px-8">
                {darkMode && (
                  <img
                    src="/icons/wallet/wallet-dropdown/white-5.svg"
                    alt="disconnect wallet"
                    className="mr-4 "
                  />
                )}
                {!darkMode && (
                  <img
                    src="/icons/wallet/wallet-dropdown/5.svg"
                    alt="disconnect wallet"
                    className="mr-4 "
                  />
                )}
                Disconnect Wallet
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Wallet() {
  // dummy variable to check wallet connected or not
  const isWalletConnected = false;

  return (
    <div>
      {!isWalletConnected && <ConnectWallet />}

      {isWalletConnected && <WalletDropdown />}
    </div>
  );
}

export default Wallet;
