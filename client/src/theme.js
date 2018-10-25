import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ae52d4',
      main: '#7b1fa2',
      dark: '#4a0072',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff5c8d',
      main: '#d81b60',
      dark: '#a00037',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: [
      'Lato',
      '"Helvetica Neue"',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  overrides: {
    MuiTableCell: {
      root: {
        padding: '0.5rem',
      },
      body: {
        fontSize: '0.9rem',
      },
      header: {
        fontSize: '1rem',
      },
    },
  },
});

export default theme;
