import { FC, useEffect, useState } from 'react';
import { Box, BoxProps, Stack } from '@mui/material';
import BpTypography from '@/components/shared/typography/BpTypography';
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import { motion, useAnimation } from 'motion/react';

type CardAboutProps = BoxProps & {
  title: string;
  description: string;
};

const CardAbout: FC<CardAboutProps> = ({ title, description, ...props }) => {
  const controlsGradientY = useAnimation();
  const controlsGradientX = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      controlsGradientY.start({
        opacity: 1,
        y: 290,
        transition: {
          y: {
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 4,
            ease: 'easeInOut'
          },
          opacity: { duration: 0.5 }
        }
      });
      controlsGradientX.start({
        opacity: 1,
        x: 290,
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 3,
            ease: 'easeInOut'
          },
          opacity: { duration: 0.5 }
        }
      });
    } else {
      // Oculta el degradado con fade out
      controlsGradientY.start({
        opacity: 0,
        transition: { duration: 0.5 }
      });
      controlsGradientX.start({
        opacity: 0,
        transition: { duration: 0.5 }
      });
    }
  }, [isHovered, controlsGradientY, controlsGradientX]);

  return (
    <Box
      component="article"
      {...props}
      sx={{
        ...props.sx,
        background: 'linear-gradient(360deg, #141719 0%, #1E2225 100%)',
        transition: 'all 1s cubic-bezier(0.4, 0, 1, 1)',
        '.card-content': {
          transition: 'all 1s linear'
        },
        '&:hover': {
          background: '#F2F2F2',
          '.card-content': {
            background: '#F2F2F2'
          },
          '.card-about-title': {
            color: 'blueBlack.800'
          },
          '.card-about-description': {
            color: 'blueBlack.800'
          },
          '&::before': {
            display: 'none'
          }
        },
        borderRadius: '16px',
        padding: '1px',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-34%',
          left: '-44%',
          width: '680px',
          height: '659px',
          backgroundImage: 'conic-gradient(#1DA6AD 20deg, transparent 120deg)',
          animation: 'rotar 10s linear infinite',
          zIndex: 1,
          filter: 'blur(10px)'
        },
        '@keyframes rotar': {
          from: {
            transform: 'rotate(0deg)'
          },
          to: {
            transform: 'rotate(-360deg)'
          }
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        className="card-content"
        sx={{
          position: 'relative',
          zIndex: 2,
          background: 'linear-gradient(360deg, #141719 0%, #1E2225 100%)',
          width: '100%',
          height: '100%',
          borderRadius: '16px',
          padding: '24px'
        }}
      >
        <Box
          className="card-about-gradient-1"
          component={motion.div}
          sx={{
            background: 'radial-gradient(circle,rgba(30, 202, 211, 1) 0%, rgba(30, 202, 211, 1) 100%)',
            position: 'absolute',
            width: '100px',
            height: '100px',
            filter: 'blur(70px)',
            top: 0,
            right: 0,
            zIndex: 3
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={controlsGradientY}
        />
        <Box
          component={motion.div}
          className="card-about-gradient-2"
          sx={{
            background: 'radial-gradient(circle,rgba(88, 50, 171, 1) 0%, rgb(82, 33, 187) 100%)',
            position: 'absolute',
            width: '100px',
            height: '100px',
            filter: 'blur(80px)',
            bottom: -20,
            left: 0,
            zIndex: 3
          }}
          initial={{
            opacity: 0,
            x: '-20px'
          }}
          animate={controlsGradientX}
        />
        <Stack gap={1} alignItems="center" sx={{ position: 'relative', zIndex: 2 }}>
          <Box
            sx={{
              width: '32px',
              height: '32px',
              bgcolor: 'blueBlack.800',
              borderRadius: '8px',
              padding: '8px'
            }}
          >
            <ArrowRightIcon style={{ color: '#fff', transform: 'rotate(316deg)' }} />
          </Box>
          <BpTypography className="card-about-title" component="h3" variant="bodyL" color="grey.50" fontSize="2rem">
            {title}
          </BpTypography>
        </Stack>
        <BpTypography className="card-about-description" mt="3.5rem" component="p" variant="bodyS" color="grey.50">
          {description}
        </BpTypography>
      </Box>
    </Box>
  );
};
export default CardAbout;
