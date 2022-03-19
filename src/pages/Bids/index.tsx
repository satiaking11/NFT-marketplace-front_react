import React from 'react';
import NftDetail from '../../components/NftDetail/NftDetail';
import NoDataFound from '../../components/NoDataFound/NoDataFound';
import PageTitle from '../../components/PageTitle';

function Bids() {
  const data = [1, 2, 3, 4];
  return (
    <div className="preposition mt-12 mb-20">
      <div className="container">
        <PageTitle>
          Pending Bids
          <span className="ml-4 text-red-400 text-5xl font-semibold">
            {data.length}
          </span>
        </PageTitle>
        {data.length === 0 && <NoDataFound />}
        {data.map(() => (
          <NftDetail bids />
        ))}
      </div>
    </div>
  );
}

export default Bids;
