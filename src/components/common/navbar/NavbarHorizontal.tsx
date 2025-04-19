import { memo, useEffect, useState } from 'react';
import { Container, IconButton, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { RootAppBarStyle } from './styles';
import SelectLanguage from './SelectLanguage';

const NavbarHorizontal = () => {
  const [isScrollHeader, setIsScrollHeader] = useState<boolean>(false);

  useEffect(() => {
    const onScroll: any = window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        setIsScrollHeader(true);
      } else {
        setIsScrollHeader(false);
      }
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <RootAppBarStyle isScroll={isScrollHeader}>
      <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} maxWidth={false}>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Stack direction="row" alignItems="center" gap={1}>
          <SelectLanguage />
        </Stack>
      </Container>
    </RootAppBarStyle>
  );
};

export default memo(NavbarHorizontal);
