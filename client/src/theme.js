import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ae52d4',
      main: '#7b1fa2',
      dark: '#4a0072',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff5c8d',
      main: '#d81b60',
      dark: '#a00037',
      contrastText: '#fff'
    }
  },
  typography: {
    fontFamily: [
      'Lato',
      '"Helvetica Neue"',
      'Helvetica',
      'Arial',
      'sans-serif'
    ].join(',')
  },
  overrides: {
    MuiTableCell: {
      root: {
        padding: '4px 36px 4px 24px'
      },
      body: {
        fontSize: 16
      },
      header: {
        fontSize: 16
      }
    }
  }
});

export default theme;
