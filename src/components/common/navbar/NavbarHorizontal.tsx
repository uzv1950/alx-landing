import { memo, useEffect, useState } from 'react';
import BpTypography from '@/components/shared/typography/BpTypography';
import { AppBar, Box, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import SelectLanguage from './SelectLanguage';
import ButtonSecondary from '../button/ButtonSecondary';

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
  transition: theme.transitions.create(['top', 'position'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.leavingScreen
  })
}));

const NavbarHorizontal = () => {
  const [isScrollHeader, setIsScrollHeader] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrollHeader(window.scrollY > 60);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AppBarStyled isScroll={isScrollHeader}>
      <Container
        maxWidth="lg"
        sx={{
          borderRadius: '12px',
          padding: '0.875rem 0',
          ...(isScrollHeader && {
            background: 'linear-gradient(180deg, rgba(28, 28, 28, 0.5) 0%, rgba(48, 48, 48, 0.5) 100%)',
            backdropFilter: 'blur(12px)'
          })
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ height: '100%' }}>
          <Stack direction="row" alignItems="center" spacing="2rem">
            <Link href="/" passHref title="Ir a la página principal">
              <Box
                component="img"
                src="/images/logo-altabix.svg"
                alt="Ir a la página principal"
                width={175}
                height={28}
              />
            </Link>
            <Stack direction="row" gap={3} alignItems="center">
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
            <ButtonSecondary>Contacto</ButtonSecondary>
          </Stack>
        </Stack>
      </Container>
    </AppBarStyled>
  );
};
export default memo(NavbarHorizontal);
