import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";
import { RiCloseLine } from 'react-icons/ri';
import { MdLanguage, MdDarkMode, MdOutlineSearch, MdClose } from "react-icons/md";
import useLocalStorage from 'use-local-storage';

import { changeLanguage, getLanguage } from '../../functions/language/langHandler';
import logo from '../../resources/logo.png';
import langOptions from '../../functions/language/flags';

import './navbar.css';

import { searchInput, searchSubmit } from '../../functions/Utils/search';

//https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-justify-content

const refreshBackround = (th) => {
  document.getElementById('root').style.backgroundColor = (th === 'light' ? 'rgb(204, 221, 255)' : 'rgb(0, 51, 153)')
  document.body.style.backgroundColor = (th === 'light' ? 'rgb(204, 221, 255)' : 'rgb(0, 51, 153)')
}


const Navbar = () => {
  const [toggleMenu, setToggleMenu ] = useState(false);


  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');


  const { t } = useTranslation()
  return (
    <div className="farm__navbar">
      <div className="farm__navbar-left">
        <div className="farm__navbar-logo">
            <NavLink to="/">
              <img src={logo} />
            </NavLink>
        </div>
        <div className="farm__navbar-title">
          <p>{t("title")}</p>
        </div>
        <MdOutlineSearch size={20} id="search-icon" onClick={() => {document.getElementById('search-text').focus()} } />
        <div className="farm__navbar-search">
          <input type="text" id="search-text" placeholder="Search a farm!" onChange={searchInput} autoComplete="off" onKeyDown={searchSubmit}/>
        </div>
        <MdClose size={20} id="close-icon" onClick={() => {
            document.getElementById('search-text').value = "";
            let suggestions = document.getElementById('search-suggestions')
            suggestions.style.display = 'none'
            suggestions.innerHTML = ""
          }} />
        <div id="search-suggestions" />
      </div>

      <div className="farm__navbar-right">
        <NavLink to="/vip" style={{ textDecoration: 'none' }}>
          <div className="farm__navbar-vip">
            <p>{t("VIP")}</p>
          </div>
        </NavLink>

        <div className="farm__navbar-lang">
          {toggleMenu
            ? <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
            : <MdLanguage size={27} onClick={() => setToggleMenu(true)} />}
          <div className="farm__navbar-lang-text">
          {getLanguage().slice(0, 2)}
          </div>

          {toggleMenu && (
            <div className="farm__navbar-lang_container">
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
              <MdDarkMode size={27} onClick={() => { setTheme('dark'); refreshBackround('dark') }} /> :
              <MdDarkMode size={27} onClick={() => { setTheme('light'); refreshBackround('light') }} />
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;

/*
          {searchMenu
            ? <MdClose size={27} onClick={() => setSearchMenu(false)} />
            : <MdOutlineSearch size={27} onClick={() => setSearchMenu(true)} />}

            {searchMenu && (
              <div className="search-box">
                <h1>AHOJ</h1>
              </div>
          )}
*/