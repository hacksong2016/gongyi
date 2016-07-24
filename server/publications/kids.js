import {Kids} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('kids.list', function (query,page) {
    const selector = {};
    if(query.province){
      selector.province = query.province;
    }
    page = page || 1;
    const options = {
      sort:{_id:-1},
      skip:(page-1)*10,
      limit:10
    };
    return Kids.find(selector,options);
  });
  Meteor.publish('kids', function (kidsId) {
    return Kids.find(kidsId);
  });
}
