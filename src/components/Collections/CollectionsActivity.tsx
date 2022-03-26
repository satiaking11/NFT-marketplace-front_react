/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable max-len */
import React from 'react';
import ActivityDetails from '../ActivityDetails/ActivityDetails';
import Button from '../Button/Button';
import LoadMoreButton from '../Button/LoadMoreButton';
import ButtonFilter from '../Filter/ExploreFilter';
import FilterTags from '../Filter/FilterTags';
import ButtonSort from '../Sort/Sort';

function CollectionsActivity() {
  const [nickname, setNickname] = React.useState('');
  const [min, setMin] = React.useState('');
  const [max, setMax] = React.useState('');

  const filterFormValues = (formState: any) => {
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
        url: 'images/activity/1.png',
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
        url: 'images/activity/2.png',
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
        url: 'images/activity/3.png',
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
      {(nickname !== '' || min !== '' || max !== '') && (
        <div className="block md:flex items-center mb-8 gap-4">
          <p className="mr-4 font-bold">Filters</p>
          <div className="flex flex-wrap gap-2">
            {nickname && <FilterTags handleChanged={handleChangedNickname}>{nickname}</FilterTags>}
            {min && max && (
              <FilterTags handleChanged={handleChangedMinMax}>
                ADA:
                {min}-{max}
              </FilterTags>
            )}

            <Button
              color="default"
              onClick={clearAll}
              className="text-link font-bold dark:text-white"
            >
              {' '}
              Clear All{' '}
            </Button>
          </div>
        </div>
      )}
      <ActivityDetails data={data} />
      <LoadMoreButton />
    </div>
  );
}

export default CollectionsActivity;
