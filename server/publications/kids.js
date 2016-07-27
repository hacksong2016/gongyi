import {Kids} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('kids.list', function (query,page,limit) {
    let selector = {status:1};
    if(query.province){
      selector.province = query.province;
    }
    if(query.gender){
      selector.gender = query.gender;
    }
    if(query.problem){
      selector.problem = {'$in':[query.problem]};
    }
    if(query.age){
      if(query.age <= 10){
        selector.age = {'$lte':10};
      }else{
        selector.age = {'$gt':10};
      }
    }
    const options = {
      sort:{_id:-1},
      limit:page*limit   //TODO 这个无限加载不友好,有待改进.
    };
    return Kids.find(selector,options);
  });
  Meteor.publish('kids', function (kidsId) {
    return Kids.find(kidsId);
  });
}
