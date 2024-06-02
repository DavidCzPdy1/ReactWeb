import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useLocalStorage from 'use-local-storage';

import { CTA, Navbar, Footer } from './components';
import { Home, Login, Vip } from './pages';

import './App.css'


export default function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  return (
    <Router>
      <div className="App" data-theme = {theme} >
        <div className="gradient__bg">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/vip" element={<Vip />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
