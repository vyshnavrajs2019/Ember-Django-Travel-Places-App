import Route from '@ember/routing/route';

export default class HomeSearchRoute extends Route {
	queryParams = {
		search: {
			refreshModel: true
		}
	};
	
	async model(params){
		let places = await this.store.query('place', params);
		return places;
	}
}
