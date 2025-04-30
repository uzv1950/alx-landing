import { useState } from 'react';
import { Box, Tabs, Tab, Grid, Stack } from '@mui/material';
import BpTypography from '@/components/shared/typography/BpTypography';
import { motion } from 'motion/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/16/solid';
import ButtonTertiary from '@/components/common/button/ButtonTertiary';

const TIME_LINE_DATA = [
  {
    order: 1,
    year: '2010',
    title: 'Inicio de la empresa',
    description: 'Nuestra empresa fue fundada en 2010'
  },
  {
    order: 2,
    year: '2015',
    title: 'Inicio de la empresa',
    description: 'Nuestra empresa fue fundada en 2010'
  },
  {
    order: 3,
    year: '2020',
    title: 'Inicio de la empresa',
    description: 'Nuestra empresa fue fundada en 2010'
  },
  {
    order: 4,
    year: '2025',
    title: 'Inicio de la empresa',
    description: 'Nuestra empresa fue fundada en 2010'
  }
];

const SectionHistory = () => {
  const [hovered, setHovered] = useState<'left' | 'right' | null>('right');
  const [value, setValue] = useState('2010');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const next = () => {
    const currentIndex = TIME_LINE_DATA.findIndex(item => item.year === value);
    const nextIndex = currentIndex + 1;
    setValue(TIME_LINE_DATA[nextIndex].year);
  };

  const previous = () => {
    const currentIndex = TIME_LINE_DATA.findIndex(item => item.year === value);
    const previousIndex = currentIndex - 1;
    setValue(TIME_LINE_DATA[previousIndex].year);
  };

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        pt: '9rem',
        pb: '9rem'
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
        {/* degradados */}
        <Box
          sx={{
            bgcolor: '#D2C8F6',
            filter: 'blur(100px)',
            position: 'absolute',
            borderRadius: '50%',
            top: '20%',
            left: '-22%',
            width: '220px',
            height: '150px',
            transform: 'rotate(25deg)',
            opacity: 1
          }}
        />
        <Box
          sx={{
            bgcolor: '#6E4CE2',
            filter: 'blur(100px)',
            position: 'absolute',
            borderRadius: '50%',
            top: '30%',
            left: '-30%',
            width: '220px',
            height: '150px',
            transform: 'rotate(25deg)',
            opacity: 1
          }}
        />
        <Box
          sx={{
            background: 'linear-gradient(246.75deg, #B9EBEE 37.02%, #18A2A9 51.04%, #0A4043 67.73%)',
            filter: 'blur(70px)',
            position: 'absolute',
            borderRadius: '50%',
            bottom: '3%',
            right: '-20%',
            width: '200px',
            height: '170px',
            transform: 'rotate(25deg)',
            opacity: 1
          }}
        />
        {/* degradados */}

        <Box mb="4rem">
          <BpTypography mb={2} component="h2" color="blueBlack.50" variant="h1">
            Nuestra historia
          </BpTypography>
          <BpTypography component="p" color="blueBlack.50" variant="bodyM" maxWidth="680px">
            Cada paso en nuestro camino ha sido clave para definir quiénes somos hoy. Nuestra experiencia muestra los
            logros que han marcado nuestra evolución.
          </BpTypography>
        </Box>

        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label=""
            sx={{
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 3,
                left: 0,
                zIndex: 0,
                width: '100%',
                height: '1px',
                background: 'linear-gradient(90deg, #565655 0%, #BCBCBA 100%)',
                opacity: 1
              },
              color: 'grey.50',
              '& .MuiTab-root': {
                pt: 2,
                zIndex: 1,
                color: 'grey.50',
                position: 'relative',
                fontSize: '1.25rem',
                fontWeight: 400,
                '&.Mui-selected': {
                  color: 'grey.50',
                  fontWeight: 700,
                  textDecoration: 'underline'
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '0',
                  left: '50%',
                  transform: 'translate(-50%, 0%)',
                  width: '9px',
                  height: '9px',
                  bgcolor: 'primary.100',
                  opacity: 1,
                  borderRadius: '10px'
                }
              },
              '& .MuiTabs-indicator': {
                display: 'none'
              }
            }}
            slotProps={{}}
          >
            {TIME_LINE_DATA.map(item => (
              <Tab key={item.year} label={item.year} value={item.year} />
            ))}
          </Tabs>
        </Box>

        <Grid mt="4rem" container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex'
            }}
          >
            <Stack sx={{ ml: '20px' }} direction="row" justifyContent="flex-start" gap={0} alignItems="center">
              <Box
                component={motion.img}
                src="/images/history-1.jpg"
                width="230px"
                height="210px"
                alt="Left"
                onHoverStart={() => setHovered('left')}
                onHoverEnd={() => setHovered('right')}
                animate={{
                  scale: hovered === 'left' ? 1.2 : hovered === 'right' ? 0.8 : 1,
                  filter: hovered === 'right' ? 'blur(4px)' : 'blur(0px)'
                }}
                sx={{
                  width: hovered === 'left' ? '230px' : '200px',
                  height: hovered === 'left' ? '210px' : '199px',
                  borderRadius: '40px',
                  zIndex: hovered === 'left' ? 1 : 0
                }}
              />
              <Box
                component={motion.img}
                src="/images/history-2.jpg"
                width="230px"
                height="210px"
                alt="Right"
                onHoverStart={() => setHovered('right')}
                onHoverEnd={() => setHovered('right')}
                animate={{
                  scale: hovered === 'right' ? 1.2 : hovered === 'left' ? 0.8 : 1,
                  filter: hovered === 'left' ? 'blur(4px)' : 'blur(0px)'
                }}
                transition={{ type: 'spring', stiffness: 100 }}
                sx={{
                  width: hovered === 'right' ? '230px' : '200px',
                  height: hovered === 'right' ? '210px' : '199px',
                  borderRadius: '40px',
                  marginLeft: '-20px !important',
                  zIndex: hovered === 'right' ? 1 : 0
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <BpTypography mb="2.4rem" component="h3" color="blueBlack.50" variant="h2">
              {value}
            </BpTypography>
            <BpTypography component="p" color="blueBlack.50" variant="bodyL">
              Crecimos exponencialmente en el rubro de la tecnología para la hotelería y todo su proceso.
            </BpTypography>

            <Stack mt="3rem" direction="row" justifyContent="flex-start" gap={0} color="grey.50">
              <ButtonTertiary
                fullWidth={false}
                sx={{ color: 'grey.50', minWidth: '40px', height: '40px' }}
                onClick={previous}
                disabled={value === TIME_LINE_DATA[0].year}
              >
                <ArrowLeftIcon width="24px" height="24px" />
              </ButtonTertiary>
              <ButtonTertiary
                fullWidth={false}
                sx={{ color: 'grey.50', minWidth: '40px', height: '40px' }}
                onClick={next}
                disabled={value === TIME_LINE_DATA[TIME_LINE_DATA.length - 1].year}
              >
                <ArrowRightIcon width="24px" height="24px" />
              </ButtonTertiary>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SectionHistory;
