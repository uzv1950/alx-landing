import SectionHero from '../components/hero/SectionHero';
import SectionAboutUs from '../components/about-us/SectionAboutUs';
import SectionTeam from '../components/team/SectionTeam';
import SectionSponsors from '../components/sponsors/SectionSponsors';
import SectionCertifications from '../components/certifications/SectionCertifications';
import SectionStackup from '../components/stackup/SectionStackup';
import SectionHistory from '../components/history/SectionHistory';
import SectionValues from '../components/values/SectionValues';
import SectionContact from '../components/contact/SectionContact';
import { Box } from '@mui/material';

const HomePage = () => {
  return (
    <>
      <SectionHero />
      <Box pt="2rem" pb="2rem">
        <SectionAboutUs />
      </Box>
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <SectionValues />
      </Box>
      <SectionHistory />
      <SectionStackup />
      <SectionCertifications />
      <SectionSponsors />
      <SectionTeam />
      <SectionContact />
    </>
  );
};

export default HomePage;
