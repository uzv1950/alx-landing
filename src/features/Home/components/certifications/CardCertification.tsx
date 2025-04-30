import BpTypography from '@/components/shared/typography/BpTypography';
import { Box } from '@mui/material';

const CardCertification = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(360deg, rgba(28, 28, 28, 0.3) 0%, rgba(48, 48, 48, 0.3) 100%)',
        borderRadius: '16px',
        overflow: 'hidden'
      }}
      component="article"
    >
      <Box
        component="img"
        src="/images/certification.jpg"
        alt="Certification"
        width="100%"
        height="148px"
        sx={{
          objectFit: 'cover'
        }}
      />
      <Box p={3}>
        <BpTypography mb={1} component="h3" variant="h6" color="blueBlack.50">
          PCI Compliance
        </BpTypography>
        <BpTypography component="p" variant="bodyS" color="blueBlack.50">
          Cumplimos con los más altos estándares de seguridad en procesamiento de pagos.
        </BpTypography>
      </Box>
    </Box>
  );
};
export default CardCertification;
