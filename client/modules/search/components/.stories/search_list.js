import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import SearchList from '../search_list.jsx';

storiesOf('search.SearchList', module)
  .add('default view', () => {
    return (
      <SearchList />
    );
  })
