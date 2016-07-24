import React from 'react';
import Navigation from './navigation.jsx';

const Layout = ({content = () => null }) => (
  <div>
    <div>
      <Navigation />
      {content()}
    </div>
  </div>
);

export default Layout;