import AuthenticationRequiredRoute from 'travel-places/routes/authentication-required';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ContribIndexRoute extends AuthenticationRequiredRoute {
	@service session;

	async model(){
		let userId = this.session.authUserId;
		let record = await this.store.findRecord('contribution', userId);
		let contributions = await record.get('contributions');
		return contributions;
	}

}
