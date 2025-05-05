/* eslint-disable max-len */
import { Box, useTheme } from '@mui/material';
import BpTypography from '@/components/shared/typography/BpTypography';
import { useHomeContextProvider } from '@/features/Common/context/home/HomeContext';
import CardAbout from './card/CardAbout';

const SectionAboutUs = () => {
  const theme = useTheme();
  const { aboutUs } = useHomeContextProvider();

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        px: '1.5rem',
        [theme.breakpoints.down('md')]: {
          pt: '14rem'
        }
      }}
    >
      <Box
        sx={{
          maxWidth: '1144px',
          width: '100%',
          mx: 'auto'
        }}
      >
        <BpTypography component="h2" color="#F2F4F9" variant="h1">
          {aboutUs.title}
        </BpTypography>

        <Box
          sx={{
            mt: '2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(2, 390px)',
            gridTemplateAreas: `
              "card1 card2 card3"
              "card4 card5 card6"
            `,
            columnGap: '1.5rem',
            rowGap: '2.5rem',
            position: 'relative',
            [theme.breakpoints.down('md')]: {
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              '& .article-2': {
                mt: '15rem'
              }
            }
          }}
        >
          <Box
            component="img"
            src="/images/layer_about.svg"
            aria-hidden="true"
            sx={{
              pointerEvents: 'none',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-51%, -57%)',
              maxWidth: '846px',
              width: '100%',
              height: '541px',
              objectFit: 'contain',
              zIndex: -1,
              [theme.breakpoints.down('md')]: {
                left: '0',
                top: '18%',
                transform: 'none'
              }
            }}
          />

          <CardAbout
            title={aboutUs.data.mission.title}
            description={aboutUs.data.mission.description}
            sx={{
              gridArea: 'card1'
            }}
          />

          <CardAbout
            title={aboutUs.data.mission.title}
            description={aboutUs.data.mission.description}
            className="article-2"
            sx={{
              gridArea: 'card5'
            }}
          />
          <CardAbout
            title={aboutUs.data.vision.title}
            description={aboutUs.data.vision.description}
            sx={{
              gridArea: 'card6'
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default SectionAboutUs;
