export const theme = {
  mainLayout: {
    width: '768px',
  },
  colors: {
    G100: '#141414',
    G90: '#191919',
    G80: '#1e1e1e',
    G70: '#232323',
    G60: '#282828',
    G50: '#2d2d2d',
    G40: '#323232',
    G30: '#373737',
    G20: '#3c3c3c',
    G10: '#414141',
    textPrimary: 'white',
    textSecondary: '#ffffff8f',
    textDisabled: '#ffffff52',
  },
  typography: {
    H1: {
      fontFamily: 'Glysa',
      fontStyle: 'normal',
      fontSize: '32px',
      lineHeight: '48px',
      letterSpacing: '0%',
    },
    H2: {
      fontFamily: 'Glysa',
      fontStyle: 'normal',
      fontSize: '24px',
      lineHeight: '40px',
      letterSpacing: '0%',
    },
    H3: {
      fontFamily: 'Lexend Deca',
      fontStyle: 'regular',
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '1%',
    },
    message: {
      fontFamily: 'Lexend Deca',
      fontStyle: 'regular',
      fontSize: '12px',
      lineHeight: '12px',
      letterSpacing: '1%',
    },
  },
};

export type ThemeType = typeof theme;
