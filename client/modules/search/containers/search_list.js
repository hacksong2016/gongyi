import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import SearchList from '../components/search_list.jsx';

export const composer = ({context,query,page}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.subscribe('kids.list',query,page).ready()){
    const options = {sort:{_id:-1}};
    const lists = Collections.Kids.find({},options).fetch();
    onData(null, {lists});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SearchList);
