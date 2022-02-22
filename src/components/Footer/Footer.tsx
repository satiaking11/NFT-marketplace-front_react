import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

function Footer() {
  return (
    <div className="container border-t border-gray-300 pt-12">
      <div className="mb-4">
        <Logo />
      </div>
      <div className="flex justify-between border-b border-gray-300 pb-12 leading-7">
        <p className="max-w-[435px] w-full dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus nulla volutpat, dictumst non, vitae aliquet enim et ut. Facilisis risus.</p>
        <div className="flex items-start gap-x-32 text-primary dark:text-white">
          <ul>
            <li>Explore</li>
            <li>Artist</li>
            <li>Activity</li>
            <li>Help Center</li>
          </ul>
          <ul>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>Contact us</li>
            <li>Blog Page</li>
            <li>Terms of Use</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between py-12">
        <p>© Company name, Inc. 2022. We love our users!</p>
        <div className="flex items-center gap-x-8">
          <p>Follow us:</p>
          <img src="/icons/instagram.svg" alt="" />
          <img src="/icons/twitter.svg" alt="" />
          <img src="/icons/facebook.svg" alt="" />
          <img src="/icons/telegram.svg" alt="" />
          <img src="/icons/discord.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
