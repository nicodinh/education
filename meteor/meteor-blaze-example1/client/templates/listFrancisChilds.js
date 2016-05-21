import { Template } from 'meteor/templating';
import './listFrancisChilds.html';

Template.listFrancisChilds.onCreated(function() {
  this.autorun(() => {
    this.subscribe('publishFrancisChilds');
  });
});

Template.listFrancisChilds.helpers({
  getDocuments() {
    return collectionFrancisChilds.find().fetch();
  }
});
