import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';
import LanguageToggle from '../DropDawnLanguage';
const data = [
  {
    id: 1,
    name: 'Home',
    className: 'dropdown',
    navigation: '',
    // menu: [{ id: 101, name: '', className: '' }],
  },
  {
    id: 2,
    name: 'Service',
    className: 'dropdown',
    navigation: 'service',
  },
  {
    id: 3,
    name: 'Blog',
    className: 'dropdown',
    navigation: 'blog',
  },
  {
    id: 4,
    name: 'Contact',
    className: 'dropdown',
    navigation: 'contact',
  },
  {
    id: 5,
    name: 'About Us',
    className: 'dropdown',
    navigation: 'aboutus',
    icon: <FaAngleDown />,
    menu: [
      { id: 101, name: 'Team', className: '', navigation: 'team' },
      { id: 102, name: 'About Us', className: '', navigation: 'aboutus' },
    ],
  },
  {
    id: 6,
    name: '',
    className: '',
    navigation: '',
    icon: <LanguageToggle />,
  },
];

export default function MainHeader() {
  const navigate = useNavigate();
  return (
    <div>
      <header className="main-header">
        <div className="outer-container ">
          <div className="header-upper clearfix ">
            <div className="outer-box pull-left d-flex align-items-center">
              <div className="logo-box pull-left">
                <figure className="logo">
                  <a onClick={() => navigate('/')}>
                    <img src="images/logo.png" alt="" />
                  </a>
                </figure>
              </div>
              <div className="menu-area pull-left">
                {/* <!--Mobile Navigation Toggler--> */}
                <div className="mobile-nav-toggler">
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent">
                    <ul className="navigation clearfix">
                      {data.map((item) => (
                        <li
                          key={item.id}
                          className={item.className ? item.className : ''}>
                          <NavLink
                            to={`/${item.navigation ? item.navigation : ''}`}>
                            {item.name}
                            {item.icon ? item.icon : ''}
                            {item.menu ? (
                              <ul>
                                {item.menu.map((i) => (
                                  <li key={i.id}>
                                    <NavLink
                                      to={`/${
                                        i.navigation ? i.navigation : ''
                                      }`}>
                                      {/* {i.name} */}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              ''
                            )}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <div className="menu-right-content pull-right">
              <div className="phone">
                Call Us <a href="tel:880762009">+880.762.009</a>
              </div>
              <div className="btn-box">
                <NavLink to={'/login'}>Login</NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* <!--sticky Header--> */}
        <div className="sticky-header">
          <div className="container clearfix d-flex align-items-center justify-content-between">
            <figure className="logo-box">
              <a onClick={() => navigate('/')}>
                <img src="images/small-logo.png" alt="" />
              </a>
            </figure>
            <div className="menu-area">
              <nav className="main-menu clearfix">
                <div
                  className="collapse navbar-collapse show clearfix "
                  id="navbarSupportedContent">
                  <ul className="navigation clearfix">
                    {data.map((item) => (
                      <li
                        key={item.id}
                        className={
                          item.className ? item.className : 'dropdown'
                        }>
                        <NavLink
                          to={`/${item.navigation ? item.navigation : ''}`}>
                          {item.name}
                          {item.icon ? item.icon : ''}
                          {item.menu ? (
                            <ul>
                              {item.menu.map((i) => (
                                <li key={i.id}>
                                  <NavLink
                                    to={`/${
                                      i.navigation ? i.navigation : ''
                                    }`}></NavLink>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            ''
                          )}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
