import {Kids} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'kids.getProvinceCount'() {
      const pipline = [{"$group":{_id:"$province",count:{$sum:1}}}];
      return Kids.aggregate(pipline);
    }
  });
}
