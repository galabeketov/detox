/** @format */

import React from 'react';
import CtaSection from '../../components/MainComponents/CtaSection';
import SwitcherMenu from '../../components/MainComponents/Switcher-Menu';
import MainFooter from '../../components/MainFooter';
import MainHeader from '../../components/MainHeader';
import MobileMenu from '../../components/MobileMenu';
import PageDirection from '../../components/PageDirection';
import ScrollTop from '../../components/ScrollTop';
import PageTitle from '../../components/ServicesComponents/PageTitle';
import MainService from '../../components/ServicesComponents/MainService';
import Chooseus from '../../components/ServicesComponents/Chooseus';
import TestimonialTwo from '../../components/HomePageThreeComponents/TestimonialTwo';

// jquery

export default function Services() {
  return (
    <div className="boxed_wrapper ltr">
      <MainHeader />
      <SwitcherMenu />
      <PageDirection />
      <MobileMenu />
      <PageTitle />
      <MainService />
      <Chooseus />
      <TestimonialTwo />
      <CtaSection />
      <MainFooter />
      <ScrollTop />
    </div>
  );
}
