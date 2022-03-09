import React from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import NotificationButton from '../Button/NotificationButton';
import DarkModeSwitch from '../DarkModeSwitch/DarkModeSwitch';
import Explore from '../Dropdown/Explore';
import Resources from '../Dropdown/Resources';
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
      <div className="md:hidden flex justify-center">
        <NotificationButton />
      </div>
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
        <NotificationButton />
        <DarkModeSwitch />
        <Wallet />
      </div>
    </div>
  );
}

export default Topbar;
