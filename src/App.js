import React, { useEffect } from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// styles colors
import './assets/css/color/blue.css';
import './assets/css/color/crimson.css';
import './assets/css/color/orange.css';
import './assets/css/color/pink.css';
import './assets/css/color/theme-color.css';
import './assets/css/color/violet.css';

// main styles
import './assets/css/animate.css';
import './assets/css/bootstrap.css';
import './assets/css/flaticon.css';
import './assets/css/font-awesome-all.css';
import './assets/css/imagebg.css';
import './assets/css/jquery.fancybox.min.css';
import './assets/css/owl.css';
import './assets/css/responsive.css';
import './assets/css/rtl.css';
import './assets/css/style.css';
import './assets/css/switcher-style.css';
import Main from './pages/Main';

import 'animate.css';
import WOW from 'wowjs';

import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Portfolio from './pages/Portfolio';
import Portfoliodetails from './pages/PortfolioDetails';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MainTeam from './pages/MainTeam';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import 'semantic-ui-css/semantic.min.css';
import { YMaps } from 'react-yandex-maps';
import Login from './pages/Login';
function App() {
  console.log(
    "%cThis console for devolopers don't change anithhing we will take your data ❌❌❌❗",
    'color:blue',
  );
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <BrowserRouter>
      <YMaps>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/service" element={<Services />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfoliodetails" element={<Portfoliodetails />} />
          <Route path="/team" element={<MainTeam />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </YMaps>
    </BrowserRouter>
  );
}

export default App;
