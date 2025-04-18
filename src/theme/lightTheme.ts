import { createTheme } from '@mui/material/styles';
import BaseTheme from './baseTheme';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const Theme = createTheme({
  ...BaseTheme,
  palette: {
    ...BaseTheme.palette,
    mode: 'light',
    primary: {
      main: '#4151BB',
      contrastText: '#fff',
      50: '#E7E9F7',
      100: '#B6BCE5',
      200: '#929BD8',
      300: '#606EC6',
      400: '#4151BB',
      500: '#1226AA',
      600: '#10239B',
      700: '#10239B',
      800: '#0A155E',
      900: '#081047'
    },
    secondary: {
      main: '#7DD2FF',
      contrastText: '#fff',
      50: '#EFF9FF',
      100: '#CCEEFF',
      200: '#B4E5FF',
      300: '#92D9FF',
      400: '#7DD2FF',
      500: '#5CC7FF',
      600: '#54B5E8',
      700: '#418DB5',
      800: '#336D8C',
      900: '#27546B'
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
      default: '#FBFBFB', // background body
      paper: '#FFFFFF'
    },
    grey: {
      50: '#FFFFFF',
      100: '#FBFBFB',
      200: '#F2F3F7',
      300: '#E8EAF3',
      400: '#D8DBE4',
      500: '#C0C4D2',
      600: '#969AAC',
      700: '#727688',
      800: '#4D5163',
      900: '#3E414E',
      A100: '#1D1E24'
    },
    custom: {
      white: '#ffffff'
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
          padding: '8px 12px'
        },
        sizeMedium: {
          height: '40px',
          padding: '8px 16px'
        },
        sizeLarge: {
          height: '48px',
          padding: '12px 24px',
          fontWeight: 600
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
