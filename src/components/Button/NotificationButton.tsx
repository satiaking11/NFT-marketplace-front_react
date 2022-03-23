/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useComponentVisible from '../../hooks/useComponentVisible';
import DefaultCard from '../Card/DefaultCard';
import Icon from '../Icon/Icon';

function NotificationButton() {
  const [isOpen, setIsOpen] = useState(true);
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="relative">
      <button
        className="relative"
        type="button"
        onClick={() => {
          setIsOpen(true);
          setIsComponentVisible(true);
        }}
      >
        <Icon name="bell" className="stroke-current dark:text-white" />
        <span className="absolute top-[10px] right-[-2px] flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 dark:bg-red-800 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-400 dark:bg-red-800" />
        </span>
      </button>

      {isOpen && (
        <div ref={ref}>
          {isComponentVisible && setIsOpen && (
            <DefaultCard className=" absolute w-full px-8 py-9 md:w-[500px] right-0 ">
              <h1 className="font-bold text-black-400 mb-4 dark:text-white text-[24px]">
                Last Updates
              </h1>
              {[
                {
                  name: 'Iva Ryan',
                  content: 'Purchased for 2.25 ADA',
                  time: '12 min ago',
                },
                {
                  name: 'Iva Ryan',
                  content: 'Purchased for 2.25 ADA',
                  time: '12 min ago',
                },
                {
                  name: 'Iva Ryan',
                  content: 'Proposition to sell for 345 ADA',
                  time: '12 min ago',
                },
                {
                  name: 'Iva Ryan',
                  content: 'Purchased for 317 ADA',
                  time: '12 min ago',
                },
              ].map((item, index) => (
                <div className="relative flex justify-between mb-4 border rounded-2xl p-2 border-light-gray-400">
                  <div className="mr-4">
                    <div className="absolute rounded-full bg-white top-0 left-0 p-2 dark:bg-black-900">
                      <img src="/icons/notification/dollor.svg" alt="cart" />
                    </div>
                    <img
                      src={`/images/nft-cover/${index + 1}.png`}
                      className="rounded-lg  md:h-[70px] md:w-[70px]"
                      alt="nft item"
                    />
                  </div>

                  <div className="grow ">
                    <p className="font-bold text-light-gray-400 dark:text-white">{item.name}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-light-gray-400 dark:text-gray">{item.content}</p>
                      <div className="h-[10px] w-[10px] rounded-full bg-red-400 dark:bg-red-800" />
                    </div>
                    <p className="text-[12px] dark:text-dark-gray-400">{item.time}</p>
                  </div>
                </div>
              ))}
              <Link to="/search" className="text-primary dark:text-white">
                View all updates
              </Link>
            </DefaultCard>
          )}
        </div>
      )}
    </div>
  );
}

export default NotificationButton;
