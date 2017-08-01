import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    doThing: function() {
      this.transitionTo('index');
    }
  }
});
