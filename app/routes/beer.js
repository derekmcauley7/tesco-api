import Route from '@ember/routing/route';
import Ember from 'ember';
export default Route.extend({
  model(){
    return this.store.findAll('beer');
  },
  actions: {
    search: function(value){
      var val = value;
      console.log(val);
      remainingBeers: Ember.computed.filterBy('Beer', 'name', val);
    }
  }
});
