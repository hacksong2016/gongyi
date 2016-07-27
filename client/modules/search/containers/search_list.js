import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import SearchList from '../components/search_list.jsx';

export const composer = ({context,query,page}, onData) => {
  const {Meteor, Collections} = context();
  const listHandle = Meteor.subscribeWithPagination('kids.list',query,page,10);
  if(listHandle.ready()){
    const options = {sort:{_id:-1}};
    const lists = Collections.Kids.find({},options).fetch();
    onData(null, {lists});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  helpKids:actions.helpme.helpKids
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SearchList);
