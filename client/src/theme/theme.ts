enum Fonts {
  GLYSA = 'glysa',
  LEXEND_DECA = 'lexendDeca',
}

enum Colors {
  G100 = 'G100',
  G90 = 'G90',
  G80 = 'G80',
  G70 = 'G70',
  G60 = 'G60',
  G50 = 'G50',
  G40 = 'G40',
  G30 = 'G30',
  G20 = 'G20',
  G10 = 'G10',
  G00 = 'G00',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DISABLED = 'disabled',
  ERROR = 'error',
}

const setVar = (code: string) => `var(--${code})`;

export const theme = {
  colors: {
    G100: setVar(Colors.G100),
    G90: setVar(Colors.G90),
    G80: setVar(Colors.G80),
    G70: setVar(Colors.G70),
    G60: setVar(Colors.G60),
    G50: setVar(Colors.G50),
    G40: setVar(Colors.G40),
    G30: setVar(Colors.G30),
    G20: setVar(Colors.G20),
    G10: setVar(Colors.G10),
    G00: setVar(Colors.G00),
    primary: setVar(Colors.PRIMARY),
    secondary: setVar(Colors.SECONDARY),
    disabled: setVar(Colors.DISABLED),
    error: setVar(Colors.ERROR),
  },
  fonts: {
    lexendDeca: setVar(Fonts.LEXEND_DECA),
    glysa: setVar(Fonts.GLYSA),
  },
  typography: {
    H1: {
      color: setVar(Colors.PRIMARY),
      fontFamily: setVar(Fonts.GLYSA),
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '32px',
      lineHeight: '48px',
      letterSpacing: '0%',
    },
    H2: {
      color: setVar(Colors.PRIMARY),
      fontFamily: setVar(Fonts.GLYSA),
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '24px',
      lineHeight: '40px',
      letterSpacing: '0%',
    },
    H3: {
      color: setVar(Colors.PRIMARY),
      fontFamily: setVar(Fonts.LEXEND_DECA),
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '1%',
    },
    P: {
      fontFamily: setVar(Fonts.LEXEND_DECA),
      fontStyle: 'normal',
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '1%',
    },
  },
};

export const breakPoints = {
  xs: '0px',
  sm: ' 576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
};

export type CustomTheme = typeof theme;
