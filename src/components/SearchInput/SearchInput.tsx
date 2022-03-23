import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

import Icon from '../Icon/Icon';
import './SearchInput.sass';
import useComponentVisible from '../../hooks/useComponentVisible';
import DefaultCard from '../Card/DefaultCard';

type Props = {
  className?: string;
};
function SearchInput({ className = '' }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true);
  const { pathname } = useLocation();

  const handleChange = (event: { target: HTMLInputElement }) => {
    if (event.target.value !== '') {
      setIsOpen(true);
      setIsComponentVisible(true);
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className={classNames('search relative', className)}>
      <input
        type="text"
        placeholder="Search items, collections and artists"
        className="search-input"
        onChange={handleChange}
      />
      <Icon name="search" className="search-icon" />

      {isOpen && (
        <div ref={ref}>
          {isComponentVisible && setIsOpen && (
            <DefaultCard className=" absolute w-full px-8 py-9">
              <h5 className="font-bold text-black-400 mb-4 dark:text-white">Items</h5>
              {[
                {
                  title: 'Meta Cowboy: Prelude',
                  name: 'Iva Ryan',
                },
                {
                  title: 'Meta Cowboy: Prelude',
                  name: 'Iva Ryan',
                },
                {
                  title: 'Meta Cowboy: Prelude',
                  name: 'Iva Ryan',
                },
              ].map((item, index) => (
                <div className="flex mb-6">
                  <img
                    src={`/images/nft-cover/collections/${index + 1}.png`}
                    className="rounded-lg mr-4"
                    alt="nft item"
                    height={48}
                    width={48}
                  />

                  <div>
                    <p className="font-bold text-light-gray-400 dark:text-light-gray">
                      {item.title}
                    </p>
                    <Link
                      to={`/artist-profile?artist=${item.name}`}
                      className="text-link dark:text-link-dark"
                    >
                      {item.name}
                    </Link>
                  </div>
                </div>
              ))}
              <hr className="mt-2 mb-8" />

              <h5 className="font-bold text-black-400 mb-4 dark:text-white">Artists</h5>
              {[
                {
                  name: 'Met Bommer',
                },
                {
                  name: 'Met Bommer',
                },
              ].map((item, index) => (
                <div className="flex mb-6">
                  <img
                    src={`/images/avatar/artists/${index + 1}.png`}
                    height={48}
                    width={48}
                    alt="artist"
                    className="rounded-lg mr-4"
                  />
                  <p className="font-bold text-light-gray-400 dark:text-light-gray">{item.name}</p>
                </div>
              ))}
              <Link to="/search" className="text-primary dark:text-white">
                View all results
              </Link>
            </DefaultCard>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchInput;
