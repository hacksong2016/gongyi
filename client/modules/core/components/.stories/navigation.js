import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Navigation from '../navigation.jsx';

storiesOf('core.Navigation', module)
  .add('default view', () => {
    return (
      <Navigation />
    );
  })
