/** @format */

import React from 'react';
import CtaSection from '../../components/MainComponents/CtaSection';
import MainFooter from '../../components/MainFooter';
import MainHeader from '../../components/MainHeader';
import MobileMenu from '../../components/MobileMenu';
import MainPortfolio from '../../components/PortfolioComponents/MainPortfolio';
import PortfolioTitle from '../../components/PortfolioComponents/PortfolioTitle';
import ScrollTop from '../../components/ScrollTop';

export default function Portfolio() {
  return (
    <div className="boxed_wrapper ltr">
      {/* <div className="preloader"></div> */}
      <MainHeader />
      <MobileMenu />
      <PortfolioTitle />
      <MainPortfolio />
      <CtaSection />
      <MainFooter />
      <ScrollTop />
    </div>
  );
}
