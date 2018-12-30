import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    goTo(route){
      this.transitionTo(route)
    }
  }
});
