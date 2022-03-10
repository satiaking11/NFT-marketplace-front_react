/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable max-len */
import React from 'react';
import Button from '../Button/Button';
import LoadMoreButton from '../Button/LoadMoreButton';
import ButtonFilter from '../Filter/ExploreFilter';
import FilterTags from '../Filter/FilterTags';
import Icon from '../Icon/Icon';
import ButtonSort from '../Sort/Sort';
import Table from '../Table/Table';

function CollectionsActivity() {
  const [nickname, setNickname] = React.useState('');
  const [min, setMin] = React.useState('');
  const [max, setMax] = React.useState('');

  const filterFormValues = (formState:any) => {
    setNickname(formState.nickname);
    setMin(formState.min);
    setMax(formState.max);
  };
  const handleChangedNickname = () => {
    setNickname('');
  };
  const handleChangedMinMax = () => {
    setMin('');
    setMax('');
  };
  const clearAll = () => {
    setNickname('');
    setMin('');
    setMax('');
  };

  const data = [
    {
      event: {
        name: 'Sale',
        icon: 'shopping-cart',
      },
      item: {
        name: 'This is name of the NFT',
        url:
          'images/activity/1.png',
        width: 66,
        height: 66,
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
      item: {
        name: 'This is name of the NFT',
        url:
          'images/activity/2.png',
        width: 66,
        height: 66,
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
      item: {
        name: 'This is name of the NFT',
        url:
          'images/activity/3.png',
        width: 66,
        height: 66,
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
    <div>
      <div className="flex justify-end">
        <ButtonSort />
        <ButtonFilter onSubmit={filterFormValues} />
      </div>
      {
         (nickname !== '' || min !== '' || max !== '') && (
         <div className="flex items-center mb-8 gap-4">
           <p className="mr-4 font-bold">Filters</p>
           {
            nickname && (
              <FilterTags handleChanged={handleChangedNickname}>
                {nickname}
              </FilterTags>
            )
          }
           {
            min && max && (
              <FilterTags handleChanged={handleChangedMinMax}>
                ADA:
                {' '}
                {min}
                {' '}
                -
                {' '}
                {max}
              </FilterTags>
            )
          }

           <Button color="default" onClick={clearAll} className="text-link font-bold dark:text-white"> Clear All </Button>
         </div>
         )
      }
      <Table
        headers={{
          event: 'Event',
          item: 'Item',
          date_time: 'Date',
          price: 'Price',
        }}
        items={data}
        customRenderers={{
          event: (it) => (
            <div className="flex">
              <Icon name={it.event.icon} className="mr-3" />
              <p>{it.event.name}</p>
            </div>
          ),
          item: (it) => (
            <div className="flex items-center">
              <img
                alt={`${it.item.name}`}
                src={it.item.url}
                width={it.item.width}
                height={it.item.height}
                className="mr-4"
              />
              <p>This is name of the NFT</p>
            </div>
          ),
          price: (it) => (
            <div>
              <p>{it.price.token}</p>
              <p className="text-light-gray-400 dark:text-light-gray text-[14px]">{it.price.usd}</p>
            </div>
          ),
          date_time: (it) => (
            <div>
              <p>{it.date_time.date}</p>
              <p className="text-light-gray-400 dark:text-light-gray text-[14px]">{it.date_time.timestamp}</p>
            </div>
          ),
        }}
      />
      <LoadMoreButton />
    </div>
  );
}

export default CollectionsActivity;
