import React from 'react';

type Props = {
  cover: string;
  avatar?: string | null | undefined;
  children: React.ReactNode;
  size?: string;
}

function Card({
  cover,
  avatar,
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
      className="group card bg-white dark:bg-black-900 rounded-3xl overflow-hidden shadow-card flex flex-col"
      style={{ width }}
    >
      <img draggable="false" src={cover} alt="" />
      {avatar && (
        <div
          className="border-2 border-white dark:border-black rounded-full h-[123px] w-[123px] mx-auto -mt-20 overflow-hidden"
        >
          <img src={avatar} alt="" className="object-cover" />
        </div>
      )}
      {children}
    </div>
  );
}

export default Card;
