import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeSwitch from '../DarkModeSwitch/DarkModeSwitch';
import Explore from '../Dropdown/Explore';
import Resources from '../Dropdown/Resources';
import Icon from '../Icon/Icon';
import Logo from '../Logo/Logo';
import SearchInput from '../SearchInput/SearchInput';
import Wallet from '../Wallet/Wallet';
import './Topbar.sass';

function Topbar() {
  return (
    <div className="topbar container w-full relative z-50">
      <div className="flex items-center">
        <div className="mr-4">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <SearchInput />
      </div>
      <div className="flex gap-x-10 flex-grow justify-end items-center">
        <ul className="flex gap-x-6">
          <li>
            <Explore />
          </li>
          <li>
            <Link to="/artists">Artists</Link>
          </li>
          <li>
            <Link to="/activity">Activity</Link>
          </li>
          <li>
            <Resources />
          </li>
        </ul>
        <button type="button">
          <Icon name="bell" className="stroke-current dark:text-white" />
        </button>
        <DarkModeSwitch />
        <Wallet />
      </div>
    </div>
  );
}

export default Topbar;
