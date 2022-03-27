/* eslint-disable max-len */

import React from 'react';
import FeaturedArtists from '../../components/Section/FeaturedArtists';
import PageTitle from '../../components/PageTitle';
import useScrollToTop from '../../hooks/useScrollToTop';
import ArtistsList from '../../components/Section/ArtistsList';

function Artist() {
  useScrollToTop();

  return (
    <div className="artists-page mt-12">
      <div className="container p-[16px] xl:p-0">
        <PageTitle className="mb-6">Artists</PageTitle>
        <FeaturedArtists />
        <ArtistsList />
      </div>
    </div>
  );
}

export default Artist;
