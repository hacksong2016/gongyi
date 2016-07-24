import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import  List from './components/list.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/search/', {
    name: 'search',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<List />)
      });
    }
  });
}
