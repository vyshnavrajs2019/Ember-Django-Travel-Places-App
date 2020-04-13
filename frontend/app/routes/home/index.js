import Route from '@ember/routing/route';

export default class HomeIndexRoute extends Route {
	async model(){
		let places = await this.store.findAll('place');
		return places;
	}
}
