import React from 'react';
import ContactTitle from '../../components/ContactComponents/ContactTitle';
import ContactUs from '../../components/ContactComponents/ContactUs';
import MyMap from '../../components/ContactComponents/Map';
import CtaSection from '../../components/MainComponents/CtaSection';
import MainFooter from '../../components/MainFooter';
import MainHeader from '../../components/MainHeader';
import MobileMenu from '../../components/MobileMenu';
import ScrollTop from '../../components/ScrollTop';

// jquery

export default function Contact() {
  return (
    <div className="boxed_wrapper ltr">
      {/* <div class="preloader"></div> */}
      <MainHeader />
      <MobileMenu />
      <ContactTitle />
      <MyMap />
      <ContactUs />
      <CtaSection />
      <MainFooter />
      <ScrollTop />
    </div>
  );
}
