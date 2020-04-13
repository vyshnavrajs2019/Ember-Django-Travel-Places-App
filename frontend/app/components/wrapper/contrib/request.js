import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class WrapperContribRequestComponent extends Component {
	@service store;

	@tracked history  = this.args.model.history;
	@tracked about    = this.args.model.about;
	@tracked bestTime = this.args.model.bestTime;

	@action
	async handleSubmit(event){
		event.preventDefault();
		let place = await this.store.findRecord('place', this.args.model.name);
		place.about = this.about;
		place.history = this.history;
		place.bestTime = this.bestTime;
		place.save();
	}

}
