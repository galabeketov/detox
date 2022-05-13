/** @format */

import React from 'react';
import PageDirection from '../../components/HomePageTwoComponents/PageDirection';
import SwitcherMenu from '../../components/HomePageTwoComponents/SwitcherMenu';
import CtaSection from '../../components/MainComponents/CtaSection';
import MainFooter from '../../components/MainFooter';
import MainHeader from '../../components/MainHeader';
import MobileMenu from '../../components/MobileMenu';
import MainPortfolioDetails from '../../components/PortfolioComponents/MainPortfolioDetails';
import PageTitlePortfolioDetails from '../../components/PortfolioComponents/PageTitlePortFolioDetails';
import ScrollTop from '../../components/ScrollTop';

export default function Portfoliodetails() {
  return (
    <div className="boxed_wrapper ltr">
      {/* <div className="preloader"></div> */}
      <PageDirection />
      <SwitcherMenu />
      <MainHeader />
      <MobileMenu />
      <PageTitlePortfolioDetails />
      <MainPortfolioDetails />
      <CtaSection />
      <MainFooter />
      <ScrollTop />
    </div>
  );
}
