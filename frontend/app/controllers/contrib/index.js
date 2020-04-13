import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ContribIndexController extends Controller {
	@service session;

	place = "";
	district = "";
	state = "";

	@action
	async handleContrib(event){
		event.preventDefault();
		let place = await this.store.createRecord('place', {
			name: this.place,
			district: this.district,
			state: this.state,
			about: "",
			history: "",
			best_time: ""
		});
		let contributer = await this.store.peekRecord('contribution', this.session.authUserId);
		let contributions = await contributer.contributions;
		contributions.pushObject(place);
		await place.save();
		await contributions.save();
	}

	@action
	deleteContribution(name){
		let place = this.store.peekRecord('place', name);
		place.destroyRecord();
	}
}
