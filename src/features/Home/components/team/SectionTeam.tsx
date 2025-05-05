import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import BpTypography from '@/components/shared/typography/BpTypography';
import SliderTeamPeople from './SliderTeamPeople';
import Lottie from 'react-lottie-player';

const SectionTeam = () => {
  const [animationLine, setAnimationLine] = useState<any>(null);

  useEffect(() => {
    fetch('/lottie/glow-curve-line.json')
      .then(res => res.json())
      .then(data => {
        setAnimationLine(data);
      });
  }, []);

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        pt: '2rem',
        pb: '12rem'
      }}
    >
      <Box
        sx={{
          maxWidth: '1144px',
          width: '100%',
          mx: 'auto',
          px: '1.5rem',
          position: 'relative'
        }}
      >
        {animationLine && (
          <Lottie
            animationData={JSON.parse(JSON.stringify(animationLine))}
            loop
            speed={0.3}
            play
            style={{
              position: 'absolute',
              top: '25%',
              left: '-7%',
              width: '80px',
              height: '560px',
              transform: 'scaleX(-1)'
            }}
          />
        )}
        {animationLine && (
          <Lottie
            animationData={JSON.parse(JSON.stringify(animationLine))}
            loop
            speed={0.3}
            play
            style={{
              position: 'absolute',
              top: '25%',
              right: '-7%',
              width: '80px',
              height: '560px'
            }}
          />
        )}
        {/* Degradados */}
        <Box
          sx={{
            background:
              'linear-gradient(246.75deg, rgba(30, 202, 211, 0.3) 37.02%, rgba(1, 109, 168, 0.3) 51.04%, rgba(1, 55, 169, 0.3) 67.73%)',
            width: '450px',
            height: '405px',
            position: 'absolute',
            top: '15%',
            left: '-32%',
            zIndex: -1,
            transform: 'rotate(135deg)',
            filter: 'blur(80px)'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '20%',
            right: '-20%',
            zIndex: -1,
            transform: 'rotate(155deg)',
            filter: 'blur(100px)',
            background: '#6E4CE2',
            width: '255px',
            height: '100px'
          }}
        />
        {/* Degradados */}
        <Box>
          <BpTypography mb="2.5rem" component="h2" color="grey.50" variant="h1">
            Nuestro equipo
          </BpTypography>
          <BpTypography mb="2.5rem" component="p" color="grey.50" variant="bodyM">
            Nuestro equipo está formado por expertos en tecnología, gestión hotelera y transformación digital, con años
            de experiencia en el diseño de sistemas y plataformas de administración y conectividad. En Altabix,
            combinamos conocimiento, visión y tecnología para redefinir el futuro de la industria hotelera.
          </BpTypography>

          <Box
            component="img"
            src="/images/foto-team.png"
            width={1000}
            height={411}
            sx={{
              width: '100%',
              height: {
                xs: '180px',
                md: '411px'
              },
              borderRadius: '16px',
              objectFit: 'cover'
            }}
          />

          <Box mt="2.5rem">
            <SliderTeamPeople />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionTeam;
