/**
 * Created by Junwei on 16/7/27.
 */
import {Inject} from  'meteor/meteorhacks:inject-initial';
//在meteor加载时设置head
Inject.rawHead('viewport','<meta name="viewport" content="width=device-width, initial-scale=1">');
Inject.rawHead('favicon.ico','<meta rel="shortcut icon" content="/images/favicon.ico">');