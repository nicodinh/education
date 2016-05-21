import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.publish('publishFrancisChild', function(childId) {
  check(childId, String);
  return collectionFrancisChilds.find({_id: childId});
});

Meteor.publish('publishFrancisChilds', function() {
  return collectionFrancisChilds.find({});
});
