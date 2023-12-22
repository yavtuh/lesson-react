import React from "react";
import { NavLink } from "react-router-dom";
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__menu menu">
        <div className="header__container">
          <nav className="menu__body">
            <ul className="menu__list">
              <li className="menu__item">
                <NavLink to="/" className={({ isActive }) => 'menu__link' + (isActive ? ' active' : '')} >Home</NavLink>
              </li>
              <li className="menu__item">
                <NavLink to="/users" className={({ isActive }) => 'menu__link' + (isActive ? ' active' : '')} >Users</NavLink>
              </li>
              <li className="menu__item">
                <NavLink to="/counter" className={({ isActive }) => 'menu__link' + (isActive ? ' active' : '')} >Counter</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
