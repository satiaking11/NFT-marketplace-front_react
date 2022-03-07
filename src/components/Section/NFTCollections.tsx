/* eslint-disable react/no-array-index-key */
/* eslint-disable no-prototype-builtins */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable max-len */
import React from 'react';
import Card from '../Card/Card';
import SectionTitle from './Title';
import CategoriesMenu from '../Categories/Categrories';
import ButtonFilter from '../Filter/ExploreFilter';
import ButtonSort from '../Sort/Sort';
// import FilterTags from '../Filter/FilterTags';
import Button from '../Button/Button';
import FilterTags from '../Filter/FilterTags';

type Props = {
  withMenu?: boolean
  title?: string
  withFilter?: boolean
  withSort?: boolean

}

function NFTList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <Card
          key={item}
          cover={`/images/nft-cover/trending/${item}.png`}
        >
          <div className="card-details px-8 py-6">
            <p className="text-2xl mb-1">NFT name</p>
            <p className="mb-2">
              Collection name could be so long and a little bit longer
            </p>
            <p className="text-red-400 dark:text-red-800 text-lg">
              <span className="font-bold">120</span>
              {' '}
              ADA
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}

function NFTCollections(
  {
    withMenu = false,
    title = 'Trending NFTs',
    withFilter = false,
    withSort = false,
  }: Props,
) {
  const [nickname, setNickname] = React.useState('');
  const [min, setMin] = React.useState('');
  const [max, setMax] = React.useState('');
  function filterFormValues(formState:any) {
    setNickname(formState.nickname);
    setMin(formState.min);
    setMax(formState.max);
  }
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

  return (
    <section className="explore-categories mb-36">
      <SectionTitle className="mb-4">{title}</SectionTitle>
      {withMenu && (
        <div className="overflow-hidden flex items-center justify-between mb-6">
          <CategoriesMenu />
        </div>
      )}
      <div className="flex items-center justify-between mb-4">
        <SectionTitle>1,412,245 NFTs</SectionTitle>
        <div className="flex items-center ">
          {
            withSort && (<ButtonSort />)
          }
          {
            withFilter && (<ButtonFilter onSubmit={filterFormValues} />)
          }

        </div>
      </div>
      {
        withFilter && (nickname !== '' || min !== '' || max !== '') && (
        <div className="inline-block items-center mb-8 gap-4">
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

      <NFTList />
    </section>
  );
}

export default NFTCollections;
