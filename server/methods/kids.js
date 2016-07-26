import {Kids} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'kids.getProvinceCount'(query) {
      let selector = {};
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
      const pipline = [{"$match":selector},{"$group":{_id:"$province",count:{$sum:1}}}];
      return Kids.aggregate(pipline);
    }
  });
}
