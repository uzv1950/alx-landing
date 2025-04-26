import { ThemeOptions } from '@mui/material';
import { Montserrat, Varela_Round } from 'next/font/google';

export type FontVariant = 'primary' | 'secondary' | 'tertiary';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600']
});

const varelaRound = Varela_Round({
  subsets: ['latin'],
  weight: ['400']
});

export const FONT_FAMILY_VARIANT: Record<FontVariant, string> = {
  primary: varelaRound.style.fontFamily,
  secondary: montserrat.style.fontFamily,
  tertiary: montserrat.style.fontFamily
};

// Extiende TypographyVariants para nuevos variants
declare module '@mui/material/styles' {
  interface TypographyVariants {
    titleL: React.CSSProperties;
    titleM: React.CSSProperties;
    titleS: React.CSSProperties;
    bodyL: React.CSSProperties;
    bodyM: React.CSSProperties;
    bodyS: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    titleL?: React.CSSProperties;
    titleM?: React.CSSProperties;
    titleS?: React.CSSProperties;
    bodyL?: React.CSSProperties;
    bodyM?: React.CSSProperties;
    bodyS?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    titleL: true;
    titleM: true;
    titleS: true;
    bodyL: true;
    bodyM: true;
    bodyS: true;
  }
}

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
    primaryOpacity: {
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
    };
    secondaryOpacity: {
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
    };
    blueBlack: {
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
    };
  }
  interface PaletteOptions {
    primaryOpacity: {
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
    };
    secondaryOpacity: {
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
    };
    blueBlack: {
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
    // fontFamily: [montserrat.style.fontFamily, varelaRound.style.fontFamily, 'Helvetica', 'Arial', 'sans-serif'].join(
    //   ','
    // ),
    h1: {
      fontWeight: 400,
      fontFamily: varelaRound.style.fontFamily,
      fontSize: '3rem' // 48px
    },
    h2: {
      fontWeight: 400,
      fontSize: '2.5rem', // 40px
      fontFamily: varelaRound.style.fontFamily
    },
    h3: {
      fontWeight: 400,
      fontSize: '2.25rem', // 36px
      fontFamily: varelaRound.style.fontFamily
    },
    h4: {
      fontWeight: 400,
      fontSize: '2rem', // 32px
      fontFamily: varelaRound.style.fontFamily
    },
    h5: {
      fontWeight: 400,
      fontSize: '1.5rem', // 24px
      fontFamily: varelaRound.style.fontFamily
    },
    h6: {
      fontWeight: 400,
      fontSize: '1.25rem', // 20px
      fontFamily: varelaRound.style.fontFamily
    },
    titleL: {
      fontWeight: 400,
      fontSize: '1.125rem', // 18px
      fontFamily: varelaRound.style.fontFamily
    },
    titleM: {
      fontWeight: 400,
      fontSize: '1rem', // 16px
      fontFamily: varelaRound.style.fontFamily
    },
    titleS: {
      fontWeight: 400,
      fontSize: '0.875rem', // 14px
      fontFamily: varelaRound.style.fontFamily
    },
    bodyL: {
      fontWeight: 400,
      fontSize: '1.125rem', // 18px
      fontFamily: montserrat.style.fontFamily
    },
    bodyM: {
      fontWeight: 400,
      fontSize: '1rem', // 16px
      fontFamily: montserrat.style.fontFamily
    },
    bodyS: {
      fontWeight: 400,
      fontSize: '0.875rem', // 14px
      fontFamily: montserrat.style.fontFamily
    },
    subtitle1: {
      fontSize: '1.125rem' // 18px
    },
    subtitle2: {
      fontSize: '1rem' // 16px
    },
    body1: {
      fontSize: '1rem', // 16px
      fontFamily: montserrat.style.fontFamily
    },
    body2: {
      fontSize: '0.875rem', // 14px
      fontFamily: montserrat.style.fontFamily
    },
    button: {
      fontFamily: montserrat.style.fontFamily,
      textTransform: 'none'
    }
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 744,
      md: 960,
      lg: 1440,
      xl: 1920
    }
  },
  zIndex: {
    drawer: 9
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
