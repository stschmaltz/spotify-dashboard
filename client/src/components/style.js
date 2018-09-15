const successCardHeader = {
  background: 'linear-gradient(60deg, #66bb6a, #43a047)',
  boxShadow:
    '0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)'
};

const dangerCardHeader = {
  background: 'linear-gradient(60deg, #ef5350, #e53935)',
  boxShadow:
    '0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)'
};

const infoCardHeader = {
  background: 'linear-gradient(60deg, #26c6da, #00acc1)',
  boxShadow:
    '0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)'
};

export const style = {
  cardHeaderRed: {
    padding: '0.75rem 1.25rem',
    marginBottom: '0',
    ...dangerCardHeader
  },
  cardHeaderYellow: {
    padding: '0.75rem 1.25rem',
    marginBottom: '0',
    ...infoCardHeader
  },
  cardHeaderGreen: {
    padding: '0.75rem 1.25rem',
    marginBottom: '0',
    ...successCardHeader
  },
  title: {
    color: '#FFFFFF',
    marginTop: '0px',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: '#777',
      fontWeight: '400',
      lineHeight: '1'
    }
  }
};
