import React from 'react';
import CtaSection from '../../components/MainComponents/CtaSection';
import MainFooter from '../../components/MainFooter';
import MainHeader from '../../components/MainHeader';
import PageTitleTeam from '../../components/MainTeamComponents/PageTitteTeam';
import TeamSection from '../../components/MainTeamComponents/TeamSection';
import MobileMenu from '../../components/MobileMenu';
import ScrollTop from '../../components/ScrollTop';

// jquery

export default function MainTeam() {
  return (
    <div className="boxed_wrapper ltr">
      <MainHeader />
      <MobileMenu />
      <PageTitleTeam />
      <TeamSection />
      <CtaSection />
      <MainFooter />
      <ScrollTop />
    </div>
  );
}
