import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('signup');
  this.route('home');
  this.route('newrequest');
  this.route('EmployeeDetail');
  this.route('uploaddoc');
  this.route('header');
  this.route('bankdashboard');
});

export default Router;
