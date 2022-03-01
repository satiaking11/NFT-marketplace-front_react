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
    <div className="grid grid-cols-4 gap-6">
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
  interface filterForm {
    nickname: string;
    min_max_value: string;
    [key: string]: string;
}
  const [formValues, setFormValues] = React.useState<filterForm>();

  function filterFormValues(formState:any) {
    const formData = {
      nickname: formState.nickname,
      min_max_value: `ADA: ${formState.min} - ${formState.max}`,
    };
    setFormValues(formData);
  }
  const initialState = {
    nickname: '',
    min_max_value: '',
  };

  function clearAll() {
    setFormValues(initialState);
  }

  interface Profile {
    nickname: string;
    min: string;
    max:string
    [key: string]: string;
}

  return (
    <section className="explore-categories mb-36">
      <SectionTitle className="mb-4">{title}</SectionTitle>
      {withMenu && (
        <div className="flex items-center justify-between mb-6">
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
        withFilter && formValues && (
        <div className="flex items-center mb-8 gap-4">
          <p className="mr-4 font-bold">Filters</p>

          {
            Object.keys(formValues).length !== 0
            && Object.keys(formValues).map((key: keyof Profile) => (
              <FilterTags key={key}>
                {formValues[key]}
              </FilterTags>
            ))
          }

          <Button color="default" onClick={() => clearAll()} className="text-link font-bold dark:text-white"> Clear All </Button>
        </div>
        )
      }

      <NFTList />
    </section>
  );
}

export default NFTCollections;
