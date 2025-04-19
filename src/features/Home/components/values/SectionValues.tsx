import { Box } from '@mui/material';
import BpTypography from '@/components/shared/typography/BpTypography';

const SectionValues = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%'
      }}
    >
      <BpTypography component="h2" variant="h2">
        Values
      </BpTypography>
    </Box>
  );
};

export default SectionValues;
