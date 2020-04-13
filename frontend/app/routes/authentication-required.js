import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AuthenticationRequiredRoute extends Route {
	@service session;

	beforeModel(transition){
		if(!this.session.isAuthenticated){
			let loginController = this.controllerFor('login');
			loginController.set('prevTransition', transition);
			this.transitionTo('login');
		}
	}
}
