import React from 'react';
import NftDetail from '../../components/NftDetail/NftDetail';
import NoDataFound from '../../components/NoDataFound/NoDataFound';
import PageTitle from '../../components/PageTitle';

function Preposition() {
  const data = [1, 2, 3, 4];
  return (
    <div className="preposition mt-12 mb-20 px-4 xl:px-0">
      <div className="container">
        <PageTitle>
          My Propositions
          <span className="ml-4 text-red-400 text-5xl font-semibold">{data.length}</span>
        </PageTitle>
        {data.length === 0 && <NoDataFound />}
        {data.map(() => (
          <NftDetail preposition />
        ))}
      </div>
    </div>
  );
}

export default Preposition;
