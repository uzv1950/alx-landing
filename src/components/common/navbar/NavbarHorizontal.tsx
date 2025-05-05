import { memo, useState } from 'react';
import BpTypography from '@/components/shared/typography/BpTypography';
import { AppBar, Box, Container, Divider, IconButton, Stack } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Link from 'next/link';
import SelectLanguage from './SelectLanguage';
import ButtonSecondary from '../button/ButtonSecondary';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';

const MENU_ITEMS = [
  { title: 'Sobre Altabix', href: '/sobre-altabix' },
  { title: 'Soluciones', href: '/soluciones' },
  { title: 'Certificaciones', href: '/certificaciones' },
  { title: 'Inversiones', href: '/inversiones' },
  { title: 'Nuestro equipo', href: '/nuestro-equipo' }
];

type AppBarStyledProps = {
  isScroll: boolean;
};

const AppBarStyled = styled(AppBar, {
  shouldForwardProp: (prop: string) => !['isScroll'].includes(prop)
})<AppBarStyledProps>(({ theme, isScroll }) => ({
  marginTop: '22px !important',
  boxShadow: 'none',
  background: 'transparent',
  position: isScroll ? 'fixed' : 'initial',
  padding: '0 1rem',
  transition: theme.transitions.create(['top', 'position'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.leavingScreen
  }),
  [theme.breakpoints.down('md')]: {
    position: 'fixed'
  }
}));

type Props = {
  isScroll: boolean;
};

const NavbarHorizontal = ({ isScroll }: Props) => {
  const theme = useTheme();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <AppBarStyled isScroll={isScroll}>
      <Container
        maxWidth="lg"
        sx={{
          zIndex: 9,
          borderRadius: '12px',
          padding: '0.875rem',
          height: !openMenu ? '64px' : 'auto',
          ...(isScroll && {
            background: 'linear-gradient(180deg, rgba(28, 28, 28, 0.5) 0%, rgba(48, 48, 48, 0.5) 100%)',
            backdropFilter: 'blur(12px)'
          }),
          transition: 'all 0.3s ease-in-out',
          [theme.breakpoints.down('md')]: {
            background: 'linear-gradient(180deg, rgba(28, 28, 28, 0.5) 0%, rgba(48, 48, 48, 0.5) 100%)',
            backdropFilter: 'blur(12px)',
            '& .navbar-items': {
              display: 'none'
            },
            '& .btn-contact': {
              display: 'none'
            },
            '& .btn-menu': {
              display: 'flex'
            },
            '& .logo-altabix': {
              display: 'none'
            },
            '& .logo-altabix-sm': {
              display: 'block'
            }
          }
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ height: '100%' }}>
          <Stack direction="row" alignItems="center" spacing="2rem">
            <Link href="/" passHref title="Ir a la página principal">
              <Box
                className="logo-altabix"
                component="img"
                src="/images/logo-altabix.svg"
                alt="Ir a la página principal"
                width={175}
                height={28}
                sx={{ display: 'block' }}
              />
              <Box
                className="logo-altabix-sm"
                component="img"
                src="/images/logo-altabix-sm.svg"
                alt="Ir a la página principal"
                width={50}
                height={28}
                sx={{ display: 'none' }}
              />
            </Link>
            <Stack className="navbar-items" direction="row" gap={3} alignItems="center">
              {MENU_ITEMS.map(item => (
                <Link key={item.href} href={item.href} passHref style={{ textDecoration: 'none', margin: 0 }}>
                  <BpTypography component="p" variant="bodyM" color="grey.50">
                    {item.title}
                  </BpTypography>
                </Link>
              ))}
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <SelectLanguage />
            <ButtonSecondary size="medium" className="btn-contact">
              Contacto
            </ButtonSecondary>
            <IconButton
              sx={{ display: 'none', color: 'grey.50' }}
              className="btn-menu"
              onClick={() => setOpenMenu(!openMenu)}
            >
              {openMenu ? (
                <XMarkIcon width={26} height={26} color="inherit" />
              ) : (
                <Bars3Icon width={26} height={26} color="inherit" />
              )}
            </IconButton>
          </Stack>
        </Stack>
        {openMenu && (
          <>
            <Divider sx={{ mt: 3 }} color="#18898F" />
            <Stack pt={3} pb={4} pl={2} direction="column" gap={2.5} alignItems="flex-start">
              {MENU_ITEMS.map(item => (
                <Link key={item.href} href={item.href} passHref style={{ textDecoration: 'none', margin: 0 }}>
                  <BpTypography fontWeight={500} component="p" variant="bodyM" color="grey.50">
                    {item.title}
                  </BpTypography>
                </Link>
              ))}
            </Stack>
          </>
        )}
      </Container>
    </AppBarStyled>
  );
};
export default memo(NavbarHorizontal);
