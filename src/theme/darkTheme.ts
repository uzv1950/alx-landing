import { createTheme } from '@mui/material/styles';
import BaseTheme from './baseTheme';

const Theme = createTheme({
  ...BaseTheme,
  palette: {
    ...BaseTheme.palette,
    mode: 'dark',
    primary: {
      main: '#DD4786',
      contrastText: '#fff',
      50: '#FFF9FD',
      100: '#FCEDF3',
      200: '#F8DAE7',
      300: '#F5C8DB',
      400: '#EDA2C2',
      500: '#E675A4'
    },
    secondary: {
      main: '#6A50FC',
      contrastText: '#fff',
      100: '#F4F3FF',
      200: '#F1EEFF',
      300: '#E1DCFE',
      400: '#D3CBFF',
      500: '#B4A7FD',
      600: '#8F7CFD'
    },
    success: {
      main: '#43C568'
    },
    error: {
      main: '#F44336'
    },
    info: {
      main: '#6277F2'
    },
    warning: {
      main: '#FBEB45'
    },
    background: {
      default: '#212121', // background body
      paper: '#424242'
    },
    grey: {
      100: '#FFFFFF',
      200: '#F4F4F4',
      300: '#EAE9EA',
      400: '#D4D3D4',
      500: '#BFBDBE',
      600: '#939092',
      700: '#5F5A5C',
      800: '#292326'
    },
    custom: {
      white: '#fff'
    }
  },
  components: {
    ...BaseTheme.components,
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained-white' },
          style: {
            textTransform: 'none',
            background: '#fff',
            ':hover': {
              background: '#fff'
            },
            color: '#212529'
          }
        },
        {
          props: { variant: 'outlined2' },
          style: {
            textTransform: 'none',
            background: 'transparent',
            border: '1px solid #D6D9E2',
            color: '#212529'
          }
        }
      ]
    }
  }
});

const DarkTheme = Theme;

export default DarkTheme;
