import { ThemeOptions } from '@mui/material';

export type FontVariant = 'primary' | 'secondary' | 'tertiary';

export const FONT_FAMILY_VARIANT: Record<FontVariant, string> = {
  primary: 'Montserrat, Helvetica, Arial, sans-serif',
  secondary: 'Montserrat, Helvetica, Arial, sans-serif',
  tertiary: 'Montserrat, Helvetica, Arial, sans-serif'
};

// Agregar types para sobrescribir las variante
// del componente de button
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    'contained-white': true;
    outlined2: true;
  }
}

// Agregar nuevas variantes para la paleta de colores
declare module '@mui/material/styles/createPalette' {
  interface Palette {
    custom: {
      white: string;
    };
  }
  interface PaletteOptions {
    custom: {
      white: string;
    };
  }

  interface PaletteColor {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }
}

const BaseTheme: ThemeOptions = {
  typography: {
    fontFamily: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontSize: '3rem', // 48px
      '@media (max-width: 520px)': {
        fontSize: '2.5rem' // 40px
      }
    },
    h2: {
      fontSize: '2.5rem' // 40px
    },
    h3: {
      fontSize: '2.25rem' // 36px
    },
    h4: {
      fontSize: '2rem' // 32px
    },
    h5: {
      fontSize: '1.5rem' // 24px
    },
    h6: {
      fontSize: '1.25rem' // 20px
    },
    subtitle1: {
      fontSize: '1.125rem' // 18px
    },
    subtitle2: {
      fontSize: '1rem' // 16px
    },
    body1: {
      fontSize: '1rem' // 16px
    },
    body2: {
      fontSize: '0.875rem' // 14px
    },
    button: {
      fontFamily: FONT_FAMILY_VARIANT.primary,
      textTransform: 'none'
    }
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1300,
      xl: 1536
    }
  },
  zIndex: {
    drawer: 1000
  },
  components: {
    MuiCssBaseline: {
      // styleOverrides: {
      //   '*::-webkit-scrollbar': {
      //     width: '0.12em'
      //   },
      //   '*::-webkit-scrollbar-thumb': {
      //     borderRadius: '20px',
      //     backgroundColor: '#6c6c6c',
      //     opacity: 0.25
      //   }
      // }
    },

    MuiStack: {
      defaultProps: {
        direction: 'row'
      }
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: '#F2F2F2' // Cambia el color aquí
        }
      }
    }
  }
};

export default BaseTheme;
