import { Template } from 'meteor/templating';
import './updateFrancisChild.html';

Template.updateFrancisChild.onCreated(function() {
  this.autorun(() => {
    this.subscribe('publishFrancisChild', FlowRouter.getParam('id'));
  });
});

Template.updateFrancisChild.helpers({
  getDocument() {
    return collectionFrancisChilds.findOne();
  }
});
