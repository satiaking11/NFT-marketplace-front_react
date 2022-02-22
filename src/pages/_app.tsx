import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Topbar from '../components/Topbar/Topbar';
import { RootState } from '../store';
import AboutUs from './AboutUs/AboutUs';
import Home from './Home/Home';

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
