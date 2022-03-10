/* eslint-disable max-len */

import React from 'react';
import CollectionsActivity from '../../components/Collections/CollectionsActivity';
import PageTitle from '../../components/PageTitle';
import useScrollToTop from '../../hooks/useScrollToTop';

function Activity() {
  useScrollToTop();

  return (
    <div className="activity-page mt-12">
      <div className="container p-[16px] md:p-0">
        <PageTitle className="mb-6">Activity</PageTitle>
        <CollectionsActivity />
      </div>
    </div>
  );
}

export default Activity;
