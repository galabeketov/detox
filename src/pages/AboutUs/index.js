/** @format */

import React from 'react';
import Helmet from 'react-helmet';
import FeaturesTwo from '../../components/AboutUsComponents/FeatureTwo';
import MainAbout from '../../components/AboutUsComponents/MainAbout';
import PageTitleAbout from '../../components/AboutUsComponents/PageTitleAbout';
import Team from '../../components/AboutUsComponents/Team';
import CtaSection from '../../components/MainComponents/CtaSection';
import MainFooter from '../../components/MainFooter';
import MainHeader from '../../components/MainHeader';
import MobileMenu from '../../components/MobileMenu';
import ScrollTop from '../../components/ScrollTop';
import Chooseus from '../../components/ServicesComponents/Chooseus';

export default function AboutUs() {
  return (
    <div className="boxed_wrapper ltr">
      <Helmet>
        <html lang="eng" />
        <title>About us</title>
        <meta name="description" content="about detox app" />
        <meta name="theme-color" content="#fff" />
      </Helmet>
      {/* <div className="preloader"></div> */}
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
