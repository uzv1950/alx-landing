import { useEffect, useState } from 'react';
import { Box, Grid, useTheme } from '@mui/material';
import BpTypography from '@/components/shared/typography/BpTypography';
import ButtonPrimary from '@/components/common/button/ButtonPrimary';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { motion } from 'motion/react';
import Lottie from 'react-lottie-player';

const SectionStackup = () => {
  const theme = useTheme();
  const [animation, setAnimation] = useState<any>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    fetch('/lottie/stackup-dashboard.json')
      .then(res => res.json())
      .then(data => {
        setAnimation(data);
      });
  }, []);

  return (
    <Box
      component="section"
      sx={{
        mt: -20,
        width: '100%',
        overflow: 'hidden',
        pt: '8rem',
        pb: '12rem'
      }}
    >
      <Box
        sx={{
          maxWidth: '1144px',
          width: '100%',
          mx: 'auto',
          position: 'relative',
          px: '1.5rem',
          [theme.breakpoints.down('md')]: {
            '& .animation-bg': {
              width: '100%',
              height: '310px'
            },
            '& .letters-container': {
              mb: '-4rem'
            },
            '& .letters': {
              width: '100%',
              height: '70px'
            },
            '& .content-stackup': {
              ml: 0,
              mt: 3
            },
            '& button': {
              width: '100%',
              height: '56px'
            },
            '& .gradient-abstract': {
              display: 'none'
            }
          }
        }}
      >
        {/* Degradados */}
        <Box
          sx={{
            background: 'linear-gradient(270deg, #D2C8F6 0%, #FFEEC2 100%)',
            filter: 'blur(140px)',
            position: 'absolute',
            borderRadius: '50%',
            bottom: '20%',
            left: '-20%',
            width: '300px',
            height: '200px',
            transform: 'rotate(120deg)',
            opacity: 1
          }}
        />
        <Box
          sx={{
            width: '100%',
            textAlign: 'right',
            mb: -3.4
          }}
        >
          <Box
            className="letters-container"
            sx={{
              zIndex: 0,
              width: 'auto',
              position: 'relative',
              height: '110px',
              mb: -4
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Box
              sx={{
                zIndex: 0,
                position: 'absolute',
                top: 0,
                right: -50
              }}
              component={motion.img}
              src="/images/stackup-letter-1.svg"
              alt="Stackup"
              width="643px"
              height="103px"
              className="letters letters-1"
              animate={{
                opacity: hovered ? 0 : 1
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />

            <Box
              sx={{
                zIndex: 0,
                position: 'absolute',
                top: 0,
                right: -50
              }}
              component={motion.img}
              src="/images/stackup-letter-2.svg"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="letters letters-2"
              alt="Stackup"
              width="643px"
              height="103px"
              animate={{
                opacity: hovered ? 1 : 0
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          </Box>
        </Box>
        <Grid container>
          <Grid item xs={12} md={7.5} sx={{ zIndex: 1 }}>
            {!animation ? (
              <Box
                sx={{
                  width: '680px',
                  height: '620px',
                  borderRadius: '16px'
                }}
              />
            ) : (
              <Box
                className="animation-bg"
                sx={{
                  width: '680px',
                  height: '620px',
                  borderRadius: '32px',
                  overflow: 'hidden',
                  display: {
                    xs: 'none',
                    md: 'block'
                  }
                }}
              >
                <Lottie
                  animationData={JSON.parse(JSON.stringify(animation))}
                  loop
                  play
                  style={{ width: '100%', height: '100%' }}
                />
              </Box>
            )}
          </Grid>
          <Grid item xs={12} md={4.5} sx={{ display: 'flex', alignItems: 'center', zIndex: 1, position: 'relative' }}>
            <Box
              className="gradient-abstract"
              component="img"
              src="/images/degradado-stackup.svg"
              alt="degradado"
              width="100%"
              height="100%"
              sx={{
                position: 'absolute',
                width: '780px',
                height: '1040px',
                right: '-40%',
                top: '-30%',
                pointerEvents: 'none'
              }}
              aria-hidden="true"
            />
            <Box className="content-stackup" ml={2}>
              <BpTypography mb="2.5rem" component="h2" variant="h1" color="blueBlack.50">
                Nuestra Solución
              </BpTypography>
              <BpTypography mb="2.5rem" component="p" variant="h6" color="blueBlack.50">
                De nuestra experiencia en el sector hotelero nace StackUp, una plataforma integral diseñada para
                modernizar la operación hotelera.
              </BpTypography>

              <Link href="/stackup" target="_blank" rel="noopener noreferrer">
                <ButtonPrimary size="large" fullWidth={false} endIcon={<ChevronRightIcon width={24} height={24} />}>
                  Ir a StackUp
                </ButtonPrimary>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SectionStackup;
