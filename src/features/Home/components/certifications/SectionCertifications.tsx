import { Box } from '@mui/material';
import BpTypography from '@/components/shared/typography/BpTypography';
import CardCertification from './CardCertification';
import { Grid } from '@mui/material';
import TestSlider from './TestSlider';
import SliderCertificiations from './SliderCertificiations';

const SectionCertifications = () => {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        pt: '3rem',
        pb: '14rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          maxWidth: '1144px',
          width: '100%',
          mx: 'auto',
          position: 'relative',
          px: '1.5rem'
        }}
      >
        <Box
          component="img"
          src="/images/gradient-curve.svg"
          aria-hidden="true"
          sx={{
            pointerEvents: 'none',
            zIndex: -1,
            position: 'absolute',
            top: '-20%',
            left: '-45%',
            width: '786px',
            height: '453px',
            objectFit: 'fill',
            transform: 'rotate(324deg)'
          }}
        />
        <Box
          sx={{
            background: 'linear-gradient(246.75deg, #B9EBEE 37.02%, #18A2A9 51.04%, #0A4043 67.73%)',
            filter: 'blur(100px)',
            position: 'absolute',
            borderRadius: '50%',
            bottom: '5%',
            right: '-20%',
            width: '270px',
            height: '170px'
          }}
        />
        <BpTypography mb="2.5rem" textAlign="center" component="h2" variant="h1" color="blueBlack.50">
          Certificaciones
        </BpTypography>
        <SliderCertificiations />
        {/* <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <CardCertification />
          </Grid>
          <Grid item xs={12} md={4}>
            <CardCertification />
          </Grid>
          <Grid item xs={12} md={4}>
            <CardCertification />
          </Grid>
        </Grid> */}
        {/* <TestSlider /> */}
      </Box>
    </Box>
  );
};

export default SectionCertifications;
