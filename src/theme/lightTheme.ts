import { createTheme } from '@mui/material/styles';
import BaseTheme from './baseTheme';

const Theme = createTheme({
  ...BaseTheme,
  palette: {
    ...BaseTheme.palette,
    mode: 'light',
    primary: {
      main: '#1ECAD3',
      contrastText: '#fff',
      50: '#E9FAFB',
      100: '#DDF7F8',
      200: '#B9EFF1',
      300: '#1ECAD3',
      400: '#1BB6BE',
      500: '#18A2A9',
      600: '#17989E',
      700: '#12797F',
      800: '#0D5B5F',
      900: '#0B474A'
    },
    primaryOpacity: {
      50: '#1ECAD31A',
      100: '#1ECAD333',
      200: '#1ECAD34D',
      300: '#1ECAD366',
      400: '#1ECAD380',
      500: '#1ECAD399',
      600: '#1ECAD3B2',
      700: '#1ECAD3CC',
      800: '#1ECAD3E5',
      900: '#1ECAD3'
    },
    secondary: {
      main: '#6E4CE2',
      contrastText: '#fff',
      50: '#F1EDFC',
      100: '#E9E4FB',
      200: '#D2C8F6',
      300: '#6E4CE2',
      400: '#6344CB',
      500: '#583DB5',
      600: '#5339AA',
      700: '#422E88',
      800: '#312266',
      900: '#271B4F'
    },
    secondaryOpacity: {
      50: '#6E4CE21A',
      100: '#6E4CE233',
      200: '#6E4CE24D',
      300: '#6E4CE266',
      400: '#6E4CE280',
      500: '#6E4CE299',
      600: '#6E4CE2B2',
      700: '#6E4CE2CC',
      800: '#6E4CE2E5',
      900: '#6E4CE2'
    },
    success: {
      main: '#91D91C',
      contrastText: '#fff',
      50: '#EDFBCC',
      100: '#D9F79F',
      200: '#BFEF67',
      300: '#A4E239',
      400: '#91D91C',
      500: '#66A010',
      600: '#4F7A11',
      700: '#406014',
      800: '#375215',
      900: '#1B2D06'
    },
    error: {
      main: '#F04E48',
      contrastText: '#fff',
      50: '#FEE3E2',
      100: '#FECCCA',
      200: '#FCA8A5',
      300: '#F87671',
      400: '#F04E48',
      500: '#DD2C25',
      600: '#BA211B',
      700: '#991F1B',
      800: '#7F211D',
      900: '#450C0A'
    },
    info: {
      main: '#6277F2',
      contrastText: '#fff'
    },
    warning: {
      main: '#FFB822',
      contrastText: '#fff',
      50: '#FFFAEB',
      100: '#FEE6AC',
      200: '#FED06D',
      300: '#FFB822',
      400: '#F59F13',
      500: '#EA8707',
      600: '#DD6E02',
      700: '#AA4D0E',
      800: '#77300D',
      900: '#461702'
    },
    background: {
      default: '#141619', // background body
      paper: '#FFFFFF'
    },
    grey: {
      50: '#FEFEFE',
      100: '#FEFEFD',
      200: '#FCFCFB',
      300: '#F6F5F3',
      400: '#DDDDDB',
      500: '#C5C4C2',
      600: '#B9B8B6',
      700: '#949392',
      800: '#6F6E6D',
      900: '#3E414E'
    },
    blueBlack: {
      50: '#E7E8E9',
      100: '#DBDCDE',
      200: '#B5B7BA',
      300: '#101820',
      400: '#0E161D',
      500: '#0D131A',
      600: '#0C1218',
      700: '#0A0E13',
      800: '#070B0E',
      900: '#06080B'
    }
  },
  components: {
    ...BaseTheme.components,
    MuiSelect: {
      styleOverrides: {
        root: {
          '& .MuiSelect-select': {
            padding: '0px !important'
          },
          '&.MuiInputBase-sizeSmall': {
            height: '40px',
            padding: '8px 12px'
          },
          '&.MuiInputBase-sizeMedium': {
            height: '48px',
            padding: '8px 16px'
          },
          '&.MuiOutlinedInput-root.MuiInputBase-colorPrimary .MuiSelect-icon': {
            color: '#7A92C5'
          },
          '&.MuiOutlinedInput-root.MuiInputBase-colorPrimary fieldset': {
            border: '2px solid #4151BB !important'
          }
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: '0px 4px 12px 0px #47656F33'
          },
          '&.Mui-disabled': {
            backgroundColor: '#E8EAF3',
            color: '#969AAC',
            fontWeight: 600
          },
          '&.MuiButton-colorWarning:not(.Mui-disabled)': {
            fontWeight: 600,
            color: '#1D1E24'
          },
          '&.MuiButton-colorWarning:hover': {
            backgroundColor: '#F59F13'
          }
        },
        sizeSmall: {
          height: '40px',
          padding: '8px 12px',
          borderRadius: '8px',
          fontSize: '0.75rem'
        },
        sizeMedium: {
          height: '40px',
          padding: '8px 16px',
          borderRadius: '8px',
          fontSize: '0.875rem'
        },
        sizeLarge: {
          height: '48px',
          padding: '12px 24px',
          fontWeight: 600,
          borderRadius: '12px',
          fontSize: '1rem'
        }
      },
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
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& input::placeholder': {
            color: '#727688',
            opacity: '1' /* Asegura que el color no sea transparente */
          },
          '& .MuiOutlinedInput-root': {
            background: '#FBFBFB',
            '& fieldset': {
              border: '1px solid #C0C4D2'
            }
          },
          '& .MuiSvgIcon-root': {
            color: '#727688'
          },
          '& .MuiOutlinedInput-root.Mui-disabled': {
            background: '#F2F3F7'
          }
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          '& .MuiTab-root': {
            fontWeight: 600
          },
          '& .MuiTab-root.Mui-selected': {
            background: '#E7E9F7',
            borderRadius: '12px 12px 0px 0px'
          },
          '& button.MuiTab-textColorPrimary': {
            color: '#10239B',
            '&.Mui-disabled': {
              fontWeight: 400
            }
          }
        },
        indicator: {
          display: 'none'
        }
      }
    }
  }
});

// const LightTheme = responsiveFontSizes(Theme)
const LightTheme = Theme;

export default LightTheme;
