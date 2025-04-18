import { memo, useEffect, useState, FC } from 'react';
import { Container, IconButton, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { RootAppBarStyle } from './styles';
import SelectLanguage from './SelectLanguage';

interface NavbarHorizontalProps {
  hiddenIconMenu: boolean;
  onToggleDrawer: () => void;
}

const NavbarHorizontal: FC<NavbarHorizontalProps> = ({ hiddenIconMenu, onToggleDrawer }) => {
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
      <Container
        sx={{ display: 'flex', justifyContent: !hiddenIconMenu ? 'space-between' : 'flex-end', alignItems: 'center' }}
        maxWidth={false}
      >
        {!hiddenIconMenu && (
          <IconButton onClick={onToggleDrawer}>
            <MenuIcon />
          </IconButton>
        )}
        <Stack direction="row" alignItems="center" gap={1}>
          <SelectLanguage />
        </Stack>
      </Container>
    </RootAppBarStyle>
  );
};

export default memo(NavbarHorizontal);
