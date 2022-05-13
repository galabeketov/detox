import React from "react";
import AboutFour from "../../components/HomePageThreeComponents/AboutFour";
import AboutThree from "../../components/HomePageThreeComponents/AboutThree";
import BannerThree from "../../components/HomePageThreeComponents/BannerThree";
import NewsTwo from "../../components/HomePageThreeComponents/NewsTwo";
import ServiceThree from "../../components/HomePageThreeComponents/ServiceThree";
import TestimonialTwo from "../../components/HomePageThreeComponents/TestimonialTwo";
import FunFact from "../../components/HomePageTwoComponents/FunFact";
import PageDirection from "../../components/HomePageTwoComponents/PageDirection";
import SwitcherMenu from "../../components/HomePageTwoComponents/SwitcherMenu";
import ClientsSection from "../../components/MainComponents/ClientsSection";
import CtaSection from "../../components/MainComponents/CtaSection";
import MainFooter from "../../components/MainFooter";
import MainHeader from "../../components/MainHeader";
import MobileMenu from "../../components/MobileMenu";
import ScrollTop from "../../components/ScrollTop";

export default function HomePageThree() {
  return (
    <div className="boxed_wrapper ltr">
      {" "}
      {/* <div className="preloader"></div> */}
      <PageDirection />
      <SwitcherMenu />
      <MainHeader />
      <MobileMenu />
      <BannerThree />
     <ClientsSection />
          <AboutThree />
          <ServiceThree />
      <AboutFour />
          <FunFact />
          <TestimonialTwo />
          <NewsTwo/>
      <CtaSection />
      <MainFooter />
      <ScrollTop />
    </div>
  );
}
