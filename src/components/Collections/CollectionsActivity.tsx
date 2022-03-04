/* eslint-disable max-len */
import React from 'react';
import Button from '../Button/Button';
import ButtonFilter from '../Filter/ExploreFilter';
import FilterTags from '../Filter/FilterTags';
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
      id: 1,
      event: 'sale',
      item: 'This is name of the NFT',
      date: '04 Sep 2021',
      timestamp: '14:03',
      price_token: '120 ADA',
      price_usd: '$143.39',
    },
    {
      id: 2,
      event: 'sale',
      item: 'This is name of the NFT',
      date: '04 Sep 2021',
      timestamp: '14:03',
      price_token: '120 ADA',
      price_usd: '$143.39',
    },
    {
      id: 3,
      event: 'sale',
      item: 'This is name of the NFT',
      date: '04 Sep 2021',
      timestamp: '14:03',
      price_token: '120 ADA',
      price_usd: '$143.39',
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
          id: 'id',
          event: 'sale',
          item: 'This is name of the NFT',
          date: '04 Sep 2021',
          timestamp: '14:03',
          price_token: '120 ADA',
          price_usd: '$143.39',
        }}
        items={data}
      />
    </div>
  );
}

export default CollectionsActivity;
