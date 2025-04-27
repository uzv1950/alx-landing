import { Box, Container, Stack } from '@mui/material';
import BpTypography from '@/components/shared/typography/BpTypography';
import ButtonPrimary from '@/components/common/button/ButtonPrimary';
import ButtonSecondary from '@/components/common/button/ButtonSecondary';

const SectionHero = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        width: '100%',
        height: 'calc(100vh - 80px)'
      }}
    >
      <Box
        sx={{
          height: '100%',
          maxWidth: '1280px',
          width: '100%',
          // border: '1px solid #555',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 14.5rem 1fr 1fr',
          gridTemplateRows: 'repeat(4, 1fr)',
          gridTemplateAreas: `
            "a b c d e"
            "f g h i j"
            "k l m n o"
            "p q r s t"
          `
        }}
      >
        <Box sx={{ gridArea: 'f', gridColumn: 'f / g', maxWidth: '445px', width: '100%' }}>
          <BpTypography
            textAlign="right"
            component="h1"
            color="grey.50"
            variant="h1"
            lineHeight="80px"
            fontSize="3.75rem"
          >
            Innovación con experiencia
          </BpTypography>
        </Box>

        <Box
          component="article"
          sx={{
            mt: '5.375rem',
            gridArea: 'n',
            gridColumn: 'n / o'
          }}
        >
          <BpTypography mb="1.5rem" component="h2" variant="titleM" color="grey.50">
            En Altabix llevamos más de 20 años desarrollando soluciones para el sector hotelero. Hoy, conectamos esa
            trayectoria con innovación real y alianzas estratégicas para ayudarte a crecer, operar mejor y mirar al
            futuro sin complicaciones.
          </BpTypography>
          <Stack gap={2}>
            <ButtonPrimary fullWidth={false} size="large">
              Contáctanos
            </ButtonPrimary>
            <ButtonSecondary fullWidth={false} size="large">
              Conoce STACKUP
            </ButtonSecondary>
          </Stack>
        </Box>

        <Box
          component="img"
          src="/images/glow-curve-line.svg"
          aria-hidden="true"
          sx={{
            ml: 4,
            height: '100%',
            gridArea: 'c',
            gridColumn: 'c',
            gridRow: 'c / r'
          }}
        />
      </Box>
    </Container>
  );
};

export default SectionHero;
