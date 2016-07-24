import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Map from '../components/map.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  getProvinceCount:actions.map.getProvinceCount
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Map);
