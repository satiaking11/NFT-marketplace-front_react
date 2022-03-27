/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */

import React from 'react';
import { Link } from 'react-router-dom';
import useScrollToTop from '../../hooks/useScrollToTop';
import Icon from '../../components/Icon/Icon';
import CollectionsBanner from '../../components/Collections/CollectionsBanner';
import GroupButton from '../../components/Button/GroupButton';
import CollectionsItems from '../../components/Collections/CollectionsItems';
import CollectionsActivity from '../../components/Collections/CollectionsActivity';

function Collections() {
  useScrollToTop();
  const [active, setActive] = React.useState('Items');

  return (
    <div className="collections mt-12">
      <div className="container p-[16px] lg:p-0">
        <div className="flex flex-row items-center">
          <Icon name="arrow-left" className="stroke-current dark:text-white mr-2" />
          <Link className="text-black-400 dark:text-white" to="/artists">
            Back to all collections
          </Link>
        </div>
        <CollectionsBanner />

        <div className="flex my-10 md:my-0 w-min mx-auto items-center gap-x-2 border-[2px] rounded-[20px] border-[#194185] p-1">
          {['Items', 'Activity'].map((item, index) => (
            <GroupButton
              key={index}
              onItemClicked={() => setActive(item)}
              isActive={active === item}
            >
              {item}
            </GroupButton>
          ))}
        </div>
        {active === 'Items' && <CollectionsItems />}

        {active === 'Activity' && <CollectionsActivity />}

        <div className="flex items-center justify-between" />
      </div>
    </div>
  );
}

export default Collections;
