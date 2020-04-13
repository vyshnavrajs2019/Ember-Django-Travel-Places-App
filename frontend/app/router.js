import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
    location = config.locationType;
    rootURL = config.rootURL;
}

Router.map(function() {
    this.route('login', { path: 'signin' });
  	this.route('logout', { path: 'signout' });
  	this.route('register', { path: 'signup' });
  	this.route('contrib', function() {
        this.route('request', { path: '/:name' });
  	});
  	this.route('home', { path: '' }, function() {
        this.route('search');
  	});
  	this.route('place', { path: '/:name' });
});
