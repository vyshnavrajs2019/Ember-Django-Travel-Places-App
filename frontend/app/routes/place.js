import Route from '@ember/routing/route';

export default class PlaceRoute extends Route {
	async model(params){
		let name = params.name;
		try{
			let place = await this.store.findRecord('place', name);
			return place;
		}
		catch(err){
			console.log(err);
		}
	}
}
