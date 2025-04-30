/* eslint-disable max-len */
import { Box } from '@mui/material';
import BpTypography from '@/components/shared/typography/BpTypography';

const CardPerson = () => {
  return (
    <Box
      component="article"
      sx={{
        width: '216px',
        // height: '280px',
        borderRadius: '16px',
        overflow: 'hidden',
        position: 'relative',
        background:
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 46.07%, rgba(0, 0, 0, 0.6) 85.54%), linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))'
      }}
    >
      <Box
        component="img"
        src="/images/foto-person.jpg"
        width={216}
        height={280}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          left: 16,
          bottom: 16,
          zIndex: 1
        }}
      >
        <BpTypography component="p" fontWeight={500} color="grey.50" variant="bodyL">
          Roberto Martínez
        </BpTypography>
        <BpTypography component="p" fontWeight={400} color="grey.50" variant="bodyS">
          Gerente de Tecnología
        </BpTypography>
      </Box>

      {/* circles degradados */}
      <Box
        sx={{
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(4, 200, 195, 0.7) 0%, rgba(44, 255, 249, 0.28) 100%)',
          width: '143px',
          height: '143px',
          borderRadius: '50%',
          position: 'absolute',
          filter: 'blur(50px)',
          bottom: -40,
          left: -80,
          zIndex: 0
        }}
      />
      <Box
        sx={{
          background: 'radial-gradient(42.19% 42.19% at 50% 39.06%, rgba(1, 118, 224, 0.7) 0%, #0176E0 100%)',
          width: '143px',
          height: '143px',
          borderRadius: '50%',
          position: 'absolute',
          filter: 'blur(60px)',
          // backdropFilter: 'blur(80px)',
          bottom: -20,
          right: -20,
          zIndex: 0
        }}
      />
    </Box>
  );
};
export default CardPerson;
