import { Box, Container, Stack } from '@mui/material';
import BpTypography from '@/components/shared/typography/BpTypography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link';

const CopyrightBar = () => {
  return (
    <Box
      sx={{
        zIndex: 0,
        height: {
          xs: 'auto',
          md: '68px'
        },
        bgcolor: 'blueBlack.900',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            width: '100%',
            mx: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 3,
            gap: '1.2rem',
            flexDirection: {
              xs: 'column',
              md: 'row'
            },
            textAlign: {
              xs: 'center',
              md: 'left'
            },
            py: {
              xs: '1.75rem',
              md: 0
            }
          }}
        >
          <BpTypography component="p" variant="titleS" color="grey.50">
            Copyright © 2025 StackUp. Todos los derechos reservados.
          </BpTypography>
          <Stack direction="row" gap="28px" color="primary.main" alignItems="center">
            <Link
              href="https://www.linkedin.com/company/stackup-ai"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              <LinkedInIcon color="inherit" />
            </Link>
            <Link
              href="https://www.facebook.com/stackupai"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              <FacebookIcon color="inherit" />
            </Link>
            <Link
              href="https://www.instagram.com/stackupai"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              <InstagramIcon color="inherit" />
            </Link>

            <Link
              href="https://www.x.com/stackupai"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              <XIcon color="inherit" />
            </Link>

            <Link
              href="https://www.youtube.com/@stackupai"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              <YouTubeIcon color="inherit" />
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
export default CopyrightBar;
