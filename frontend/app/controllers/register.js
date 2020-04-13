import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RegisterController extends Controller {
	@service session;
	
	username = "";
	password = "";
	confPassword = "";

	@action
	async handleSignup(event){
		event.preventDefault();
		await this.session.signup(this.username, this.password, this.confPassword);
		if(this.session.isAuthenticated){
			this.set('username', "");
			this.set('password', "");
			this.set('confPassword', "");
			this.transitionToRoute('home');
		}
	}
}
