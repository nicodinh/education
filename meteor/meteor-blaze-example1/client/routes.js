FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('publicLayout', {content: 'public'});
  }
});

FlowRouter.route('/francis/child/new', {
  action: function() {
    BlazeLayout.render('publicLayout', {content: 'insertFrancisChild'});
  }
});

FlowRouter.route('/francis/childs', {
  action: function() {
    BlazeLayout.render('publicLayout', {content: 'listFrancisChilds'});
  }
});

FlowRouter.route('/francis/update/child/:id', {
  action: function() {
    BlazeLayout.render('publicLayout', {content: 'updateFrancisChild'});
  }
});
