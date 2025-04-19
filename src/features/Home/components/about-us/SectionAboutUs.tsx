import { Box } from '@mui/material';
import BpTypography from '@/components/shared/typography/BpTypography';
import { useHomeContextProvider } from '@/features/Common/context/home/HomeContext';

const SectionAboutUs = () => {
  const { aboutUs } = useHomeContextProvider();

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%'
      }}
    >
      <BpTypography component="h2" variant="h2">
        {aboutUs.title}
      </BpTypography>
    </Box>
  );
};
export default SectionAboutUs;
