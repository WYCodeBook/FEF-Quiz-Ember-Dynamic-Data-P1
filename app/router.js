import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('store', function() {
    this.route('cookies');
    this.route('cakes');
    this.route('cupcakes');
  });
});

export default Router;
