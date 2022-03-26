/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import DefaultCard from '../../components/Card/DefaultCard';
import Icon from '../../components/Icon/Icon';
import NftAvailability from '../../components/NftAvailability/NftAvailability';
import ProductInfo from '../../components/Product/ProductInfo';
import Table from '../../components/Table/Table';
import useScrollToTop from '../../hooks/useScrollToTop';

function NFT() {
  useScrollToTop();
  const data = [
    {
      event: {
        name: 'Sale',
        icon: 'shopping-cart',
      },
      date_time: {
        date: '04 Sep 2021',
        timestamp: '14:03',
      },
      price: {
        token: '120 ADA',
        usd: '$123.39',
      },
    },
    {
      event: {
        name: 'List',
        icon: 'tag',
      },
      date_time: {
        date: '04 Sep 2021',
        timestamp: '14:03',
      },
      price: {
        token: '120 ADA',
        usd: '$123.39',
      },
    },
    {
      event: {
        name: 'Sale',
        icon: 'shopping-cart',
      },
      date_time: {
        date: '04 Sep 2021',
        timestamp: '14:03',
      },
      price: {
        token: '120 ADA',
        usd: '$123.39',
      },
    },
    {
      event: {
        name: 'Sale',
        icon: 'tag',
      },
      date_time: {
        date: '04 Sep 2021',
        timestamp: '14:03',
      },
      price: {
        token: '120 ADA',
        usd: '$123.39',
      },
    },
  ];
  return (
    <div className="nft-page">
      <div className="container">
        <NftAvailability error />
        <ProductInfo />
        <div className="mt-8 flex flex-col md:flex-row gap-6 p-[16px] md:p-0">
          <div className="w-full md:w-[594px]">
            <DefaultCard className="w-full bg-light-gray-50">
              <div className="w-full p-[24px] flex flex-col">
                <p className="text-[24px] font-semibold">Details</p>
                <p className="text-black-400 dark:text-light-gray  mt-4">
                  Brushpops is a generative system inspired by Roy Lichtenstein’s iconic work, where
                  a random hash determines the composition of a series of abstract brush strokes.
                  Lichtenstein’s original work has separated the brushstrokes from their original
                  context, and now we take another step in the same direction, and separate the
                  artist from the work. The artist has to relinquish control, and set the work free,
                  where only some loosely-predetermined rules and a hash number will determine the
                  actual outcome. The Brushstroke was detached from the painting, and it’s now
                  detached from the artist as well...
                </p>
              </div>
            </DefaultCard>
          </div>
          <div className="w-full md:w-[594px] flex flex-col">
            <DefaultCard className="w-full bg-light-gray-50">
              <div className="w-full p-[24px] flex flex-col">
                <p className="text-[24px] font-semibold">Latest Activity</p>
                <Table
                  headers={{
                    event: 'Event',
                    date_time: 'Date',
                    price: 'Price',
                  }}
                  items={data}
                  customRenderers={{
                    event: (it) => (
                      <div className="flex">
                        <Icon color="#667085" name={it.event.icon} className="mr-3" />
                        <p>{it.event.name}</p>
                      </div>
                    ),
                    price: (it) => (
                      <div>
                        <p>{it.price.token}</p>
                        <p className="text-light-gray-400 dark:text-light-gray text-[14px]">
                          {it.price.usd}
                        </p>
                      </div>
                    ),
                    date_time: (it) => (
                      <div>
                        <p>{it.date_time.date}</p>
                        <p className="text-light-gray-400 dark:text-light-gray text-[14px]">
                          {it.date_time.timestamp}
                        </p>
                      </div>
                    ),
                  }}
                />
              </div>
            </DefaultCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFT;
