import { useState } from 'react';
import { Box } from '@mui/material';
import BpTypography from '@/components/shared/typography/BpTypography';
import ItemSponsor from './ItemSponsor';
import ButtonPrimary from '@/components/common/button/ButtonPrimary';
import ModalContanctSponsor from './ModalContanctSponsor';

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
          pb: '4rem'
        }}
      >
        <Box
          sx={{
            maxWidth: '1144px',
            width: '100%',
            mx: 'auto'
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
            <Box display="flex" mb="3.5rem" gap={3}>
              <ItemSponsor />
              <ItemSponsor />
              <ItemSponsor />
              <ItemSponsor />
              <ItemSponsor />
            </Box>
            <Box width="100%" display="flex" justifyContent="center">
              <ButtonPrimary size="large" fullWidth={false} onClick={() => setOpen(true)}>
                Hagamos equipo
              </ButtonPrimary>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SectionSponsors;
