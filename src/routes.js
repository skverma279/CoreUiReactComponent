import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  // { path: '/theme/colors', name: 'Colors', component: Colors },
  // { path: '/theme/typography', name: 'Typography', component: Typography },
  // { path: '/base', name: 'Base', component: Cards, exact: true },
  // { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs }
];

export default routes;
