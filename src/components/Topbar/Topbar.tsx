import React from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
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
    <div className="flex topbar container w-full relative z-50 p-[16px] md:p-0">
      <div className="md:hidden flex justify-center">
        <BurgerMenu />
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <SearchInput className="hidden md:block" />
      </div>
      <button className="md:hidden relative flex items-center mt-2" type="button">
        <Icon name="bell" size={30} className="stroke-current dark:text-white" />
        <span className="absolute top-[10px] right-[-2px] flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 dark:bg-red-800 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-400 dark:bg-red-800" />
        </span>
      </button>
      <div className="hidden md:flex gap-x-10 flex-grow justify-end items-center">
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
        <button className="relative" type="button">
          <Icon name="bell" className="stroke-current dark:text-white" />
          <span className="absolute top-[10px] right-[-2px] flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 dark:bg-red-800 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-400 dark:bg-red-800" />
          </span>
        </button>
        <DarkModeSwitch />
        <Wallet />
      </div>
    </div>
  );
}

export default Topbar;
