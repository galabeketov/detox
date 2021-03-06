import React from 'react';
import BlogGrid from '../../components/BlogComponents/BlogGrid';
import BlogTitle from '../../components/BlogComponents/BlogTitle';
import CtaSection from '../../components/MainComponents/CtaSection';
import MainFooter from '../../components/MainFooter';
import MainHeader from '../../components/MainHeader';
import MobileMenu from '../../components/MobileMenu';
import ScrollTop from '../../components/ScrollTop';

// jquery

export default function Blog() {
  return (
    <div className="boxed_wrapper ltr">
      <MainHeader />
      <MobileMenu />
      <BlogTitle />
      <BlogGrid />
      <CtaSection />
      <MainFooter />
      <ScrollTop />
    </div>
  );
}
