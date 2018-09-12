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
    ].join(','),
  },
  overrides: {
    MuiListItem: {
      textAlign: 'left',
      paddingTop: 0,
      paddingBottom: 0,
      margin: 'auto'
    },
    MuiListItemText: {
      primary: {
        fontWeight: 'bold',
        fontSize: '10pt'
      },
      secondary: {
        fontSize: '13pt'
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)'
      },
      inset: {
        marginLeft: 24,
        marginRight: 24
      }
    },
    MuiPaper: {
      elevation8: {
        boxShadow:
          '0px 5px 5px -3px rgba(0, 0, 0, 0.06), 0px 8px 10px 1px rgba(0, 0, 0, 0.04), 0px 3px 14px 2px rgba(0, 0, 0, 0.03)'
      }
    }
  }
});

export default theme;
