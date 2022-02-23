import React from 'react';

type Props = {
  children: React.ReactNode;
  size?: string;
}

function ArtistCard({
  children,
  size = 'base',
}: Props) {
  let width = 0;

  if (size === 'base') {
    width = 302;
  } else if (size === 'lg') {
    width = 411;
  } else if (size === 'xs') {
    width = 251;
  }

  return (
    <div
      className="card bg-white dark:bg-black-900 rounded-3xl overflow-hidden shadow-card flex flex-col"
      style={{ width }}
    >
      {children}
    </div>
  );
}

export default ArtistCard;
