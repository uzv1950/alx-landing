/* eslint-disable max-len */
import { useState } from 'react';
import { Box } from '@mui/material';
import BpTypography from '@/components/shared/typography/BpTypography';
import { motion } from 'motion/react';

const CardPerson = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      component="article"
      className="card-person"
      sx={{
        width: '100%',
        borderRadius: '16px',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
        background:
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 46.07%, rgba(0, 0, 0, 0.6) 85.54%), linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
        component={motion.div}
        animate={{ left: isHovered ? 100 : -80 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15, duration: 2 }}
        sx={{
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(4, 216, 209, 0.77) 0%, rgba(44, 255, 249, 0.28) 100%)',
          width: '143px',
          height: '143px',
          borderRadius: '50%',
          position: 'absolute',
          filter: 'blur(50px)',
          bottom: -30,
          left: -80,
          zIndex: 2
        }}
      />
      <Box
        component={motion.div}
        animate={{
          ...(isHovered && {
            top: 0,
            right: -80
          }),
          ...(!isHovered && {
            bottom: -20,
            right: -20
          })
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 15, duration: 2 }}
        sx={{
          background: 'radial-gradient(42.19% 42.19% at 50% 39.06%, rgba(1, 118, 224, 0.7) 0%,rgb(2, 97, 185) 100%)',
          width: '143px',
          height: '143px',
          borderRadius: '50%',
          position: 'absolute',
          filter: 'blur(50px)',
          bottom: -20,
          right: -20,
          zIndex: 0
        }}
      />
    </Box>
  );
};
export default CardPerson;
