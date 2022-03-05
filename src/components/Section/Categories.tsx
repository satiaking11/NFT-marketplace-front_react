import React from 'react';
import CategoryCard from '../Card/CategoryCard';
import SectionTitle from './Title';

function ExploreCategories() {
  return (
    <section className="explore-categories mb-36 p-[16px] md:p-0">
      <SectionTitle className="mb-6">Explore categories</SectionTitle>
      <div className="grid grid-rows-1 md:grid-cols-3 gap-4">
        {['Art', 'Collectibles', 'Music', 'Metaverse', 'Assets', 'Others'].map((item, index) => (
          <CategoryCard key={item} src={`${index + 1}.png`} label={item} />
        ))}
      </div>
    </section>
  );
}

export default ExploreCategories;
