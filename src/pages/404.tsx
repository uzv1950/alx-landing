import BpButton from '@/components/shared/button/BpButton';
import BpTypography from '@/components/shared/typography/BpTypography';
import { Box } from '@mui/material';
import Link from 'next/link';

const Page404 = () => {

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh'
      }}
    >
      <Box textAlign="center">
        <BpTypography component="h1" variant="h1">
          404
        </BpTypography>
        <BpTypography component="h2" variant="h2">
          Page not found
        </BpTypography>

        <Link href="/">
          <BpButton color="warning" variant="contained" sx={{ mt: 4 }}>
            Go back to Home
          </BpButton>
        </Link>
      </Box>
    </Box>
  );
};
export default Page404;
