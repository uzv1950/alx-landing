import { Box } from '@mui/material';
import BpTypography from '@/components/shared/typography/BpTypography';

const SectionCertifications = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%'
      }}
    >
      <BpTypography component="h2" variant="h2">
        Certifications
      </BpTypography>
    </Box>
  );
};

export default SectionCertifications;
