/* eslint-disable max-len */
import { useRef, useEffect, useState } from 'react';
import { Box, useTheme } from '@mui/material';
import BpTypography from '@/components/shared/typography/BpTypography';
import { motion } from 'motion/react';
import Lottie from 'react-lottie-player';
import useResponsive from '@/hooks/useResponsive';

const values = [
  {
    title: 'Innovación:',
    description:
      'Fomentar una cultura de creatividad y mejora continua, desarrollando soluciones tecnológicas de vanguardia que impulsen el crecimiento y la competitividad.'
  },
  {
    title: 'Excelencia:',
    description:
      'Compromiso con la calidad en todos los aspectos de los productos y servicios, asegurando una experiencia superior para los clientes.'
  },
  {
    title: 'Integridad:',
    description:
      'Actuar con honestidad, transparencia y ética en todas las interacciones y decisiones, ganando y manteniendo la confianza de los clientes y socios.'
  },
  {
    title: 'Orientación al Cliente: ',
    description:
      'Poner al cliente en el centro de todas las actividades, entendiendo y respondiendo a sus necesidades y superando sus expectativas.'
  },
  {
    title: 'Colaboración:',
    description:
      'Fomentar el trabajo en equipo y la cooperación tanto internamente como con los clientes y socios, para alcanzar objetivos comunes y lograr el éxito compartido.'
  },
  {
    title: 'Sostenibilidad: ',
    description:
      'Integrar prácticas sostenibles en todas las operaciones, contribuyendo al bienestar ambiental y social del sector turístico.'
  },
  {
    title: 'Sostenibilidad3: ',
    description:
      'Integrar prácticas sostenibles en todas las operaciones, contribuyendo al bienestar ambiental y social del sector turístico.'
  }
];
const SectionValues = () => {
  const theme = useTheme();
  const isSm = useResponsive('down', 'md');
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [animationLine, setAnimationLine] = useState(null);
  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    fetch('/lottie/glow-vertical-line.json')
      .then(res => res.json())
      .then(data => {
        setAnimationLine(data);
      });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop } = container;
      setScrollTop(scrollTop);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    setSectionHeight(section.clientHeight);
  }, [sectionRef]);

  return (
    <Box
      ref={sectionRef}
      component="section"
      sx={{
        width: '100%',
        py: '8rem'
      }}
    >
      <Box
        sx={{
          maxWidth: '1144px',
          width: '100%',
          mx: 'auto',
          px: '1.5rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            '& .gradient-1': {
              display: 'none'
            },
            '& .gradient-2': {
              display: 'none'
            },
            '& .gradient-3': {
              display: 'none'
            },
            '& .content': {
              mt: 2
            },
            '& .container-values': {
              pl: 2.5
            },
            '& .box-title': {
              pl: 2.5
            }
          }
        }}
      >
        <Box
          className="gradient-1"
          sx={{
            width: '380px',
            height: '70px',
            background: 'radial-gradient(circle,rgba(175, 151, 255, 1) 0%, rgba(88, 61, 181, 1) 100%)',
            position: 'absolute',
            top: '50%',
            right: '-36%',
            transform: 'rotate(90deg)',
            filter: 'blur(100px)',
            opacity: 0.6
          }}
        />
        <Box
          className="gradient-2"
          sx={{
            position: 'absolute',
            zIndex: -1,
            top: '10%',
            left: 0,
            width: '300px',
            height: '200px',
            background: 'radial-gradient(circle,rgba(29, 62, 227, 1) 0%, rgba(23, 48, 168, 1) 100%)',
            borderRadius: '50%',
            opacity: 0.2,
            filter: 'blur(100px)',
            transform: 'rotate(22deg)'
          }}
        />
        <Box
          className="title"
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
            position: 'relative'
          }}
        >
          <Box
            className="gradient-3"
            sx={{
              position: 'absolute',
              zIndex: -1,
              top: 0,
              left: -200,
              width: '300px',
              height: '200px',
              background: 'radial-gradient(circle,rgba(30, 202, 211, 1) 0%, rgba(5, 35, 37, 1) 100%)',
              borderRadius: '50%',
              opacity: 0.2,
              filter: 'blur(100px)'
            }}
          />
          <Box className="box-title">
            <Box component="img" src="/images/icon-about.svg" width={55} height={32} />
            <BpTypography component="h2" color="#F2F4F9" variant="h1">
              Nuestros valores
            </BpTypography>
          </Box>

          {animationLine && (
            <Lottie
              animationData={JSON.parse(JSON.stringify(animationLine))}
              loop
              speed={0.3}
              play
              style={{
                width: '80px',
                height: `${sectionHeight}px`,
                position: 'absolute',
                right: 0,
                ...(isSm && {
                  top: '5%',
                  left: '-2.8rem'
                })
              }}
            />
          )}
        </Box>

        <Box
          className="content"
          sx={{
            flex: 1,
            height: '100%',
            position: 'relative',
            '&::before': {
              content: '""',
              display: 'block',
              width: '100%',
              height: '160px',
              background: 'linear-gradient(0deg, rgb(20 22 25 / 43%) 0%, rgb(20 22 25) 73.86%)',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1
            },
            '&::after': {
              content: '""',
              display: 'block',
              width: '100%',
              height: '160px',
              background: 'linear-gradient(0deg, rgb(20 22 25) 0%, rgb(20 22 25 / 43%) 73.86%)',
              position: 'absolute',
              bottom: 0,
              left: 0,
              zIndex: 1
            }
          }}
        >
          <Box
            ref={containerRef}
            className="container-values"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              pt: 1,
              pl: 4,
              pb: 1,
              gap: '88px',
              height: '580px',
              overflowY: 'scroll',
              overflowX: 'hidden',
              scrollSnapType: 'y mandatory',
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              '&::-webkit-scrollbar': {
                display: 'none'
              }
            }}
          >
            <Box
              aria-hidden="true"
              style={{
                display: scrollTop < 160 ? 'block' : 'none'
              }}
            >
              <Box sx={{ height: '60px' }} />
            </Box>
            {values.map(value => (
              <Box
                key={value.title}
                component={motion.article}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <BpTypography
                  component="h3"
                  color="grey.50"
                  fontSize="2rem"
                  fontVariant="secondary"
                  variant="h3"
                  sx={{ textShadow: '0 0 15px rgba(255, 255, 255, 1)' }}
                >
                  {value.title}
                </BpTypography>
                <BpTypography
                  mt={1}
                  component="p"
                  color="grey.50"
                  variant="bodyM"
                  sx={{ textShadow: '0 0 12px rgba(255, 255, 255, 0.7)' }}
                >
                  {value.description}
                </BpTypography>
              </Box>
            ))}
            <Box
              aria-hidden="true"
              style={{
                display: scrollTop > 700 ? 'block' : 'none'
              }}
            >
              <Box sx={{ height: '60px' }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionValues;
