import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LoginController extends Controller {
	@service session;
	
	username = "";
	password = "";

	@action
	async handleSignin(event){
		event.preventDefault();
		await this.session.signin(this.username, this.password);
		if(this.session.isAuthenticated){
			this.set('username', "");
			this.set('password', "");
			this.transitionToRoute('home');
		}
	}
}
