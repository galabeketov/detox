/** @format */

import React from 'react';
import CtaSection from '../../components/MainComponents/CtaSection';
import MainFooter from '../../components/MainFooter';
import MainHeader from '../../components/MainHeader';
import MobileMenu from '../../components/MobileMenu';
import ScrollTop from '../../components/ScrollTop';
import PageTitle from '../../components/ServicesComponents/PageTitle';
import MainService from '../../components/ServicesComponents/MainService';
import Chooseus from '../../components/ServicesComponents/Chooseus';
import TestimonialSection from '../../components/MainComponents/TestimonialSection';

// jquery

export default function Services() {
  return (
    <div className="boxed_wrapper ltr">
      <MainHeader />
      <MobileMenu />
      <PageTitle />
      <MainService />
      <Chooseus />
      <TestimonialSection />
      <CtaSection />
      <MainFooter />
      <ScrollTop />
    </div>
  );
}
