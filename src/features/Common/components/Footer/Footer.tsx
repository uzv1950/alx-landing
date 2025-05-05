/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { Box, Grid, Link } from '@mui/material';
import BpTypography from '@/components/shared/typography/BpTypography';
import Image from 'next/image';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Lottie from 'react-lottie-player';
import useResponsive from '@/hooks/useResponsive';

const Footer = () => {
  const isSm = useResponsive('down', 'md');
  const [animationLine, setAnimationLine] = useState(null);

  useEffect(() => {
    fetch('/lottie/glow-vertical-line.json')
      .then(res => res.json())
      .then(data => {
        setAnimationLine(data);
      });
  }, []);

  return (
    <Box
      component="footer"
      sx={{
        overflow: 'hidden',
        pt: '4rem',
        pb: '2rem',
        px: {
          xs: '1.75rem',
          md: '1.75rem'
        }
      }}
    >
      <Box
        sx={{
          py: '2rem',
          px: '2rem',
          maxWidth: '1440px',
          width: '100%',
          mx: 'auto',
          borderRadius: '16px',
          background: 'linear-gradient(360deg, rgba(28, 28, 28, 0.3) 0%, rgba(48, 48, 48, 0.3) 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            background: 'linear-gradient(246.75deg, #B9EBEE 37.02%, #18A2A9 51.04%, #0A4043 67.73%)',
            position: 'absolute',
            right: '-20%',
            bottom: '-70%',
            zIndex: -1,
            width: '340px',
            height: '240px',
            filter: 'blur(100px)'
          }}
        />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={9}>
                <Box mb={3}>
                  <Image
                    src="/images/logo-altabix.svg"
                    alt="Altabix Logo"
                    width={175}
                    height={30}
                    style={{ marginBottom: '1rem' }}
                  />
                  <BpTypography color="#F1F3F6BF" component="p" variant="bodyS" sx={{ mb: 2 }}>
                    Transformando la hospitalidad con tecnología innovadora.
                  </BpTypography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}
                >
                  <Link href="/?q=politica-de-privacidad" color="inherit" underline="none">
                    <BpTypography
                      color="#fff"
                      component="span"
                      variant="bodyM"
                      sx={{
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        '&:hover': { color: 'primary.main' }
                      }}
                    >
                      Política de privacidad
                    </BpTypography>
                  </Link>
                  <Link href="/?q=terminos-y-condiciones" color="inherit" underline="none">
                    <BpTypography
                      color="#fff"
                      component="span"
                      variant="bodyM"
                      sx={{
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        '&:hover': { color: 'primary.main' }
                      }}
                    >
                      Términos y condiciones
                    </BpTypography>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} md={3} sx={{ position: 'relative' }}>
                <BpTypography color="primary.300" component="h6" variant="h6" sx={{ mb: 2 }}>
                  Sitio
                </BpTypography>
                <Box
                  component="nav"
                  sx={{
                    mt: 2.5,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}
                >
                  <Link href="/sobre-altabix" color="inherit" underline="none">
                    <BpTypography
                      color="grey.50"
                      component="span"
                      variant="bodyM"
                      sx={{
                        display: 'block',
                        mb: 1,
                        cursor: 'pointer',
                        '&:hover': { color: 'primary.main' }
                      }}
                    >
                      Sobre Altabix
                    </BpTypography>
                  </Link>
                  <Link href="/soluciones" color="inherit" underline="none">
                    <BpTypography
                      color="grey.50"
                      component="span"
                      variant="bodyM"
                      sx={{
                        display: 'block',
                        mb: 1,
                        cursor: 'pointer',
                        '&:hover': { color: 'primary.main' }
                      }}
                    >
                      Soluciones
                    </BpTypography>
                  </Link>
                  <Link href="/inversiones" color="inherit" underline="none">
                    <BpTypography
                      color="grey.50"
                      component="span"
                      variant="bodyM"
                      sx={{
                        display: 'block',
                        mb: 1,
                        cursor: 'pointer',
                        '&:hover': { color: 'primary.main' }
                      }}
                    >
                      Inversiones
                    </BpTypography>
                  </Link>
                  <Link href="/contacto" color="inherit" underline="none">
                    <BpTypography
                      color="grey.50"
                      component="span"
                      variant="bodyM"
                      sx={{
                        display: 'block',
                        mb: 1,
                        cursor: 'pointer',
                        '&:hover': { color: 'primary.main' }
                      }}
                    >
                      Contacto
                    </BpTypography>
                  </Link>
                </Box>
                {animationLine && !isSm && (
                  <Lottie
                    animationData={JSON.parse(JSON.stringify(animationLine))}
                    loop
                    speed={0.3}
                    play
                    style={{
                      width: '100px',
                      height: `500px`,
                      position: 'absolute',
                      right: -50,
                      top: 0
                    }}
                  />
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <BpTypography color="primary.300" component="h6" variant="h6" sx={{ mb: 2 }}>
              Conócenos
            </BpTypography>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: '1.5rem' }}>
              <LocationOnIcon sx={{ color: 'grey.400', mr: 1, mt: 0.5 }} />
              <BpTypography color="grey.400" component="p" variant="bodyS">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit consecuencia oficial.
              </BpTypography>
            </Box>
            <Box
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d470.3806051575437!2d-99.02230519153214!3d19.410468427365096!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fd295cd93c8d%3A0xd84fed35b9a5690b!2sFarmacia%20Bienestar!5e0!3m2!1sen!2smx!4v1746419117772!5m2!1sen!2smx"
              width="400"
              height="300"
              style={{ border: '0', borderRadius: '16px', height: '100px' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sx={{
                width: '100%',
                height: '100%',
                borderRadius: '16px'
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
