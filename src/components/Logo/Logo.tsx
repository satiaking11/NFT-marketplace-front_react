import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function Logo() {
  const { darkMode } = useSelector((state: RootState) => state.settings);
  return (
    <img src={`/images/logo-${darkMode ? 'light' : 'dark'}.svg`} alt="logo" />
  );
}

export default Logo;
