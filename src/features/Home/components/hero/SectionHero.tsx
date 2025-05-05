import { useEffect, useState } from 'react';
import { Box, Container, Stack, useTheme } from '@mui/material';
import BpTypography from '@/components/shared/typography/BpTypography';
import ButtonPrimary from '@/components/common/button/ButtonPrimary';
import ButtonSecondary from '@/components/common/button/ButtonSecondary';
import Lottie from 'react-lottie-player';
import useResponsive from '@/hooks/useResponsive';

const SectionHero = () => {
  const theme = useTheme();
  const isSm = useResponsive('down', 'md');
  const [animationLine, setAnimationLine] = useState(null);

  useEffect(() => {
    fetch('/lottie/glow-curve-line.json')
      .then(res => res.json())
      .then(data => {
        setAnimationLine(data);
      });
  }, []);

  return (
    <Container
      maxWidth={false}
      sx={{
        height: '100vh',
        width: '100%',
        [theme.breakpoints.up(1920)]: {
          height: '820px'
        }
      }}
    >
      <Box
        sx={{
          height: '100%',
          maxWidth: '1280px',
          width: '100%',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 14.5rem 1fr 1fr',
          gridTemplateRows: 'repeat(4, 1fr)',
          gridTemplateAreas: `
            "a b c d e"
            "f g h i j"
            "k l m n o"
            "p q r s t"
            `,
          [theme.breakpoints.down('md')]: {
            display: 'flex',
            flexDirection: 'column',
            pt: '18rem',
            pb: '9rem',
            '& .hero-title': {
              marginBottom: '2.063rem'
            },
            '& .btn-contact': {
              height: '3.375rem'
            }
          },
          position: 'relative'
        }}
      >
        {animationLine && isSm && (
          <Lottie
            animationData={JSON.parse(JSON.stringify(animationLine))}
            loop
            speed={0.3}
            play
            style={{
              position: 'absolute',
              width: '60px',
              height: '740px',
              top: '39%',
              left: '-1.2rem'
            }}
          />
        )}
        <Box
          sx={{
            gridArea: {
              xs: 'a',
              md: 'f'
            },
            gridColumn: {
              xs: 'a / b',
              md: 'f / g'
            },
            maxWidth: '445px',
            width: '100%'
          }}
          className="hero-title"
        >
          <BpTypography
            sx={{
              textAlign: {
                xs: 'left',
                md: 'right'
              },
              fontSize: {
                xs: '2.5rem',
                md: '3.75rem'
              },
              lineHeight: {
                xs: '48px',
                md: '80px'
              }
            }}
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
          className="hero-content"
          sx={{
            mt: {
              xs: '1rem',
              md: '5.375rem'
            },
            gridArea: 'n',
            gridColumn: 'n / o'
          }}
        >
          <BpTypography mb="1.5rem" component="h2" variant="titleM" color="grey.50">
            En Altabix llevamos más de 20 años desarrollando soluciones para el sector hotelero. Hoy, conectamos esa
            trayectoria con innovación real y alianzas estratégicas para ayudarte a crecer, operar mejor y mirar al
            futuro sin complicaciones.
          </BpTypography>
          <Stack
            gap={2}
            sx={{
              flexDirection: {
                xs: 'column',
                md: 'row'
              }
            }}
          >
            <ButtonPrimary className="btn-contact" fullWidth={false} size="large">
              Contáctanos
            </ButtonPrimary>
            <ButtonSecondary className="btn-contact" fullWidth={false} size="large">
              Conoce STACKUP
            </ButtonSecondary>
          </Stack>
        </Box>
        {animationLine && !isSm && (
          <Box
            aria-hidden="true"
            sx={{
              ml: 4,
              height: '100%',
              gridArea: 'c',
              gridColumn: 'c',
              gridRow: 'c / r'
            }}
            className="hero-animation"
          >
            <Lottie
              animationData={JSON.parse(JSON.stringify(animationLine))}
              loop
              speed={0.3}
              play
              style={{
                width: '80px',
                height: '100%'
              }}
            />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default SectionHero;
