import React from 'react';
import BlogGrid from '../../components/BlogComponents/BlogGrid';
import BlogTitle from '../../components/BlogComponents/BlogTitle';
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
import SwitcherMenu from '../../components/MainComponents/Switcher-Menu';
import TestimonialSection from '../../components/MainComponents/TestimonialSection';
import MainFooter from '../../components/MainFooter';
import MainHeader from '../../components/MainHeader';
import MobileMenu from '../../components/MobileMenu';
import PageDirection from '../../components/PageDirection';
import ScrollTop from '../../components/ScrollTop';

// jquery

export default function Blog() {
  return (
    <div className="boxed_wrapper ltr">
      <MainHeader />
      <SwitcherMenu />
      <PageDirection />
      <MobileMenu />
      <BlogTitle />
      <BlogGrid />
      <CtaSection />
      <MainFooter />
      <ScrollTop />
    </div>
  );
}
