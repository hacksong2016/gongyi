import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Map from '../map.jsx';

storiesOf('search.Map', module)
  .add('default view', () => {
    return (
      <Map />
    );
  })
