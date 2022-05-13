import React from "react";
import Banner from "../../components/HomePageTwoComponents/Banner";
import FunFact from "../../components/HomePageTwoComponents/FunFact";
import PageDirection from "../../components/HomePageTwoComponents/PageDirection";
import ProcessTow from "../../components/HomePageTwoComponents/ProcessTwo";
import ServiceTwo from "../../components/HomePageTwoComponents/ServiceTwo";
import SwitcherMenu from "../../components/HomePageTwoComponents/SwitcherMenu";
import AboutSection from "../../components/MainComponents/AboutSection";
import ClientsSection from "../../components/MainComponents/ClientsSection";
import CtaSection from "../../components/MainComponents/CtaSection";
import FeatureSection from "../../components/MainComponents/FeatureSection";
import PricingSection from "../../components/MainComponents/PricingSection";
import TestimonialSection from "../../components/MainComponents/TestimonialSection";
import MainFooter from "../../components/MainFooter";
import MainHeader from "../../components/MainHeader";
import MobileMenu from "../../components/MobileMenu";
import ScrollTop from "../../components/ScrollTop";

export default function HomePageTwo() {
  return (
    <div className="boxed_wrapper ltr">
      {" "}
      {/* <div className="preloader"></div> */}
      <PageDirection />
      <SwitcherMenu />
      <MainHeader />
      <MobileMenu />
      <Banner />
      <ClientsSection />
      <FeatureSection />
      <AboutSection />
      <ServiceTwo />
      <ProcessTow />
      <FunFact />
      <TestimonialSection />
      <PricingSection />
      <CtaSection />
      <MainFooter />
      <ScrollTop/>
    </div>
  );
}
