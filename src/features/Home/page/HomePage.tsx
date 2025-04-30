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
// import SectionServices from '../components/services/SectionServices';
// react-lottie-player
import Lottie from 'react-lottie-player';
import animationData from '../../../../public/lottie/glow-curve-line.json';

const HomePage = () => {
  return (
    <>
      <SectionHero />
      <Box pt="2rem" pb="8rem">
        <SectionAboutUs />
      </Box>
      <Box
        py="8rem"
        sx={{
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <SectionValues />
      </Box>
      {/* <Box> */}
      <SectionHistory />
      {/* </Box> */}
      {/* <Box py="8.5rem"> */}
      <SectionStackup />
      {/* </Box> */}
      <SectionCertifications />
      <SectionSponsors />
      <SectionTeam />
      <SectionContact />

      {/* <Box
        pt="10rem"
        pb="20rem"
        sx={{
          border: '1px solid red',
          position: 'relative'
        }}
      >
        <Lottie
          animationData={JSON.parse(JSON.stringify(animationData))}
          loop
          speed={0.5}
          play
          style={{
            width: '100px',
            height: '400px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </Box> */}
    </>
  );
};

export default HomePage;
