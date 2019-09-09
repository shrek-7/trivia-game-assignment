import React, {lazy} from 'react';

// import components for routing.
const HomePage          =   lazy(()   =>   import('./scene/HomePage'));
const LandingPage       =   lazy(()   =>   import('./scene/LandingPage'));



// add route.
const routes = (props) => [
  {
    path: '/home-page',
    main: () => <HomePage {...props}/>,
    exact:  true,
  },
  {
    path: '/landing-page',
    main: () => <LandingPage {...props}/>,
    exact: true
  },
];


export default routes;