const greenCardHeader = {
  background: 'linear-gradient(60deg, #66bb6a, #43a047)',
  boxShadow:
    '0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)',
};

const redCardHeader = {
  background: 'linear-gradient(60deg, #ef5350, #e53935)',
  boxShadow:
    '0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)',
};
const yellowCardHeader = {
  background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
  boxShadow:
    '0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)',
};
const blueCardHeader = {
  background: 'linear-gradient(60deg, #26c6da, #00acc1)',
  boxShadow:
    '0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)',
};
const roseCardHeader = {
  background: 'linear-gradient(60deg, #ec407a, #d81b60)',
  boxShadow:
    '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)',
};

export const styles = theme => ({
  root: {
    padding: '0.5rem',
    maxWidth: '450px',
    [theme.breakpoints.up('lg')]: {
      maxWidth: '33%',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
  cardHeaderRed: {
    padding: '0.75rem 1.25rem',
    marginBottom: '0',
    ...redCardHeader,
  },
  cardHeaderYellow: {
    padding: '0.75rem 1.25rem',
    marginBottom: '0',
    ...yellowCardHeader,
  },
  cardHeaderGreen: {
    padding: '0.75rem 1.25rem',
    marginBottom: '0',
    ...greenCardHeader,
  },
  cardHeaderBlue: {
    padding: '0.75rem 1.25rem',
    marginBottom: '0',
    ...blueCardHeader,
  },
  cardHeaderRose: {
    padding: '0.75rem 1.25rem',
    marginBottom: '0',
    ...roseCardHeader,
  },
  title: {
    color: theme.palette.white.main,
    marginTop: '0px',
    fontWeight: '300',
    fontFamily: "'Roboto', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: '#777',
      fontWeight: '400',
      lineHeight: '1',
    },
  },
});
