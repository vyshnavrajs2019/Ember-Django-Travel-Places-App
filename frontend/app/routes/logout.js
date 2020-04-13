import AuthenticationRequiredRoute from 'travel-places/routes/authentication-required';
import { inject as service } from '@ember/service';

export default class LogoutRoute extends AuthenticationRequiredRoute {
	@service session;

	beforeModel(){
		this.session.signout();
		this.store.unloadAll();
		super.beforeModel();
	}
}
