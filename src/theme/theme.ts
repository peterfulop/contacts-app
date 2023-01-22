const setVar = (code: string) => `var(--${code})`;

enum Fonts {
  GLYSA = 'glysa',
  LEXEND_DECA = 'lexendDeca',
}

export const theme = {
  colors: {
    G100: setVar('G100'),
    G90: setVar('G90'),
    G80: setVar('G80'),
    G70: setVar('G70'),
    G60: setVar('G60'),
    G50: setVar('G50'),
    G40: setVar('G40'),
    G30: setVar('G30'),
    G20: setVar('G20'),
    G10: setVar('G10'),
    G00: setVar('G00'),
    textPrimary: setVar('textPrimary'),
    textSecondary: setVar('textSecondary'),
    textDisabled: setVar('textDisabled'),
  },
  fonts: {
    lexendDeca: setVar(Fonts.LEXEND_DECA),
    glysa: setVar(Fonts.GLYSA),
  },
  typography: {
    H1: {
      fontFamily: setVar(Fonts.GLYSA),
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '32px',
      lineHeight: '48px',
      letterSpacing: '0%',
    },
    H2: {
      fontFamily: setVar(Fonts.GLYSA),
      fontStyle: 'normal',
      fontSize: '24px',
      lineHeight: '40px',
      letterSpacing: '0%',
    },
    H3: {
      fontFamily: setVar(Fonts.LEXEND_DECA),
      fontStyle: 'regular',
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '1%',
    },
    message: {
      fontFamily: setVar(Fonts.LEXEND_DECA),
      fontStyle: 'normal',
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '1%',
    },
  },
};

export type CustomTheme = typeof theme;
