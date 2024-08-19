import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useLocalStorage from 'use-local-storage';

import { CTA, Navbar, Footer } from './components';
import { Home, Vip, Farms } from './pages';

import './App.css'


export default function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  return (
    <div className="wrapper">
      <div className="ear-left ad-container"/>
      <div className="ear-right ad-container"/>
      <Router>
        <div className="App" data-theme = {theme} >
          <Navbar />
          <div className="ear-middle ad-container"/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vip" element={<Vip />} />
            <Route path="/farm" element={<Farms />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  )
}
