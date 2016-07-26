import {createApp} from 'mantra-core';
import initContext from './configs/context';
import {DocHead} from 'meteor/kadira:dochead';

// modules
import coreModule from './modules/core';
import searchModule from './modules/search';

// init context
const context = initContext();
DocHead.addMeta({name: "viewport", content: "width=device-width, initial-scale=1"});
DocHead.addMeta({rel: "shortcut icon", content: "/images/favicon.ico"});

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(searchModule);
app.init();
