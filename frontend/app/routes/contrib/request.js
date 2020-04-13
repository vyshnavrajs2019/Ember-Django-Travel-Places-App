import AuthenticationRequiredRoute from 'travel-places/routes/authentication-required';

export default class ContribRequestRoute extends AuthenticationRequiredRoute {
	async model(params){
		let place = await this.store.findRecord('place', params.name);
		return place;
	}
}