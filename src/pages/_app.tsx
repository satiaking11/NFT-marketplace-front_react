import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Topbar from '../components/Topbar/Topbar';
import { RootState } from '../store';
import AboutUs from './AboutUs';
import Home from './Home';
import Artists from './Artists';
import Explore from './Explore';
import ArtistProfile from './Artists/profile';
import Collections from './Collections';
import NFT from './NFT';
import Activity from './Activity';
import HelpCenter from './HelpCenter';
import Preposition from './Preposition';
import Bids from './Bids';
import PageNotFound from './PageNotFound';
import Search from './Search';

function App() {
  const { darkMode } = useSelector((state: RootState) => state.settings);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(darkMode ? 'light' : 'dark');
    root.classList.add(darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="min-h-screen dark:bg-black-900 bg-white dark:text-[#E5E5E5]">
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/artist-profile" element={<ArtistProfile />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/nft" element={<NFT />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/preposition" element={<Preposition />} />
          <Route path="/Bids" element={<Bids />} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
