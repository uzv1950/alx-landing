import { NavbarHorizontal, SelectLanguage } from '@/components/common/navbar';
import { Box } from '@mui/material';
import SectionHero from '../components/hero/SectionHero';
import SectionAboutUs from '../components/about-us/SectionAboutUs';
import SectionTeam from '../components/team/SectionTeam';
import SectionSponsors from '../components/sponsors/SectionSponsors';
import SectionCertifications from '../components/certifications/SectionCertifications';
import SectionStackup from '../components/stackup/SectionStackup';
import SectionHistory from '../components/history/SectionHistory';
import SectionValues from '../components/values/SectionValues';
import SectionContact from '../components/contact/SectionContact';

const HomePage = () => {
  return (
    <Box>
      <SectionHero />
      <SectionAboutUs />
      <SectionValues />
      <SectionHistory />
      <SectionStackup />
      <SectionCertifications />
      <SectionSponsors />
      <SectionTeam />
      <SectionContact />
    </Box>
  );
};

export default HomePage;
