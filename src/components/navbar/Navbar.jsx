import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";
import { RiCloseLine } from 'react-icons/ri';
import { MdLanguage, MdDarkMode } from "react-icons/md";
import useLocalStorage from 'use-local-storage';

import { changeLanguage, getLanguage } from '../../functions/language/langHandler';
import logo from '../../resources/logo.png';
import langOptions from '../../functions/language/flags';

import './navbar.css';


const Navbar = () => {
  const [toggleMenu, setToggleMenu ] = useState(false);

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  
  const { t } = useTranslation()
  return (
    <div className="farm__navbar">
      <div className="farm__navbar-links">
        <div className="farm__navbar-links_logo">
            <NavLink to="/">
              <img src={logo} />
            </NavLink>
        </div>
        <div className="farm__navbar-slogan">
          <p>{t("slogan")}</p>
        </div>
      </div>
      <div className="farm__navbar-middle">
        <div className="farm__navbar-login">
          <NavLink to="/login">
            <button type="button" >{t("Log in")}</button>
          </NavLink>
        </div>
        <div className="farm__navbar-vip">
          <NavLink to="/vip">
            <button type="button">{t("VIP")}</button>
          </NavLink>
        </div>
      </div>
      
      <div className="farm__navbar-lang">
        {toggleMenu
          ? <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
          : <MdLanguage size={27} onClick={() => setToggleMenu(true)} />}
        <div className="farm__navbar-lang-text">
        {getLanguage().slice(0, 2)}
        </div>
        {toggleMenu && (
          <div className="farm__navbar-lang_container scale-up-center">
           {
              langOptions.map(lang => {
                return (
                  <button onClick={() => changeLanguage(lang.code)} key={lang.code}>
                  
                    <img src={lang.img} />
                    <p>{lang.label}</p>
                  </button>
                )
              })
            }
          </div>
        )}
      </div>

      <div className="farm__navbar-darkmode">
        {
          theme === 'light' ?
            <MdDarkMode size={27} onClick={() => setTheme('dark') } /> :
            <MdDarkMode size={27} onClick={() => setTheme('light') } />
        
          }</div>
    </div>
  );
};

export default Navbar;