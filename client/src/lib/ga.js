import ReactGA from 'react-ga';

const isProduction = process.env.NODE_ENV === 'production';
const empty = () => null;

function initializeGa() {
  try {
    ReactGA.initialize('UA-132226898-2' /* , { debug: !isProduction } */);
  } catch (err) {
    empty(err);
  }
}

initializeGa();

export function trackPageView(location) {
  try {
    console.log('Tracking View');
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(location);
  } catch (err) {
    empty(err);
  }
}
