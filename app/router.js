import EmberRouter from '@ember/routing/router';
import config from 'capstone-project/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('planets');
  this.route('planet', { path: 'planets/:planet_id' });
});
