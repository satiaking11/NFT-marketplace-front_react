import React from 'react';

type Props = {
  src: string;
  label: string;
}

function CategoryCard({
  src,
  label,
}: Props) {
  return (
    <div className="p-3 bg-white dark:bg-black-900 rounded-[44px]">
      <img src={`/images/categories/${src}`} alt="" className="w-full" />
      <p className="text-center mt-3 text-xl">{label}</p>
    </div>
  );
}

export default CategoryCard;
