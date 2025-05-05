import { useState } from 'react';
import { Box } from '@mui/material';
import BpTypography from '@/components/shared/typography/BpTypography';
import ButtonPrimary from '@/components/common/button/ButtonPrimary';
import ModalContanctSponsor from './ModalContanctSponsor';
import SliderSponsors from './SliderSponsors';

const SectionSponsors = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ModalContanctSponsor open={open} onClose={() => setOpen(false)} />
      <Box
        component="section"
        sx={{
          mt: 0,
          width: '100%',
          pb: {
            xs: '6rem',
            md: '4rem'
          }
        }}
      >
        <Box
          sx={{
            maxWidth: '1144px',
            width: '100%',
            mx: 'auto',
            px: '1.5rem'
          }}
        >
          <Box>
            <BpTypography mb="2.5rem" component="h2" color="blueBlack.50" variant="h1">
              Alianzas
            </BpTypography>
            <BpTypography mb="2.5rem" component="p" color="blueBlack.50" variant="h6">
              Como parte de nuestra estrategia de crecimiento, Altabix invierte en startups tecnológicas especializadas
              en la industria turística, impulsando el desarrollo de nuevas soluciones disruptivas.
            </BpTypography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            maxWidth: '1980px',
            mx: 'auto'
            // bgcolor: 'red'
          }}
        >
          <SliderSponsors />
          <Box mt={3} width="100%" display="flex" justifyContent="center">
            <ButtonPrimary size="large" fullWidth={false} onClick={() => setOpen(true)}>
              Hagamos equipo
            </ButtonPrimary>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SectionSponsors;
