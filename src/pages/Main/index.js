import React from 'react';
import Helmet from 'react-helmet';
import AboutSection from '../../components/MainComponents/AboutSection';
import BannerSection from '../../components/MainComponents/BannerSection';
import ClientsSection from '../../components/MainComponents/ClientsSection';
import CtaSection from '../../components/MainComponents/CtaSection';
import FeatureSection from '../../components/MainComponents/FeatureSection';
import NewsSection from '../../components/MainComponents/NewsSection';
import PricingSection from '../../components/MainComponents/PricingSection';
import ProcessSection from '../../components/MainComponents/ProcessSection';
import ProjectSection from '../../components/MainComponents/ProjectSection';
import ServiceSection from '../../components/MainComponents/ServiceSection';
import TestimonialSection from '../../components/MainComponents/TestimonialSection';
import MainFooter from '../../components/MainFooter';
import MainHeader from '../../components/MainHeader';
import MobileMenu from '../../components/MobileMenu';
import ScrollTop from '../../components/ScrollTop';

// jquery

export default function Main() {
  return (
    <div className="boxed_wrapper ltr">
      <Helmet>
        <html lang="eng" />
        <title>Home Page</title>
        <meta name="description" content="Home page Detox app" />
        <meta name="theme-color" content="#fff" />
      </Helmet>
      {/* <div class="preloader"></div> */}
      <MainHeader />
      <MobileMenu />
      <BannerSection />
      <FeatureSection />
      <AboutSection />
      <ProcessSection />
      <ServiceSection />
      <TestimonialSection />
      <ProjectSection />
      <ClientsSection />
      <PricingSection />
      <NewsSection />
      <CtaSection />
      <MainFooter />
      <ScrollTop />
    </div>
  );
}
