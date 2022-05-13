/** @format */

import React from 'react';
import FeaturesTwo from '../../components/AboutUsComponents/FeatureTwo';
import MainAbout from '../../components/AboutUsComponents/MainAbout';
import PageTitleAbout from '../../components/AboutUsComponents/PageTitleAbout';
import Team from '../../components/AboutUsComponents/Team';
import PageDirection from '../../components/HomePageTwoComponents/PageDirection';
import SwitcherMenu from '../../components/HomePageTwoComponents/SwitcherMenu';
import CtaSection from '../../components/MainComponents/CtaSection';
import MainFooter from '../../components/MainFooter';
import MainHeader from '../../components/MainHeader';
import MobileMenu from '../../components/MobileMenu';
import ScrollTop from '../../components/ScrollTop';
import Chooseus from '../../components/ServicesComponents/Chooseus';

export default function AboutUs() {
  return (
    <div className='boxed_wrapper ltr'>
      {/* <div className="preloader"></div> */}
      <PageDirection />
      <SwitcherMenu />
      <MainHeader />
      <MobileMenu />
      <PageTitleAbout />
      <MainAbout />
      <FeaturesTwo />
      <Chooseus />
      <Team />
      <CtaSection />
      <MainFooter />
      <ScrollTop />
    </div>
  );
}
