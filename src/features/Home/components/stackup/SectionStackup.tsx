import { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import BpTypography from '@/components/shared/typography/BpTypography';
import ButtonPrimary from '@/components/common/button/ButtonPrimary';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { motion } from 'motion/react';
import Lottie from 'react-lottie-player';

const SectionStackup = () => {
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
          position: 'relative'
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
                right: 0
              }}
              component={motion.img}
              src="/images/stackup-letter-1.svg"
              alt="Stackup"
              width="643px"
              height="103px"
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
                right: 0
              }}
              component={motion.img}
              src="/images/stackup-letter-2.svg"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
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
                sx={{
                  width: '680px',
                  height: '620px',
                  borderRadius: '32px',
                  overflow: 'hidden'
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
            <Box ml={2}>
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
