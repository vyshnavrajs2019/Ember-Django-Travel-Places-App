import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import {inject as service} from '@ember/service'

export default class SearchFormComponent extends Component {
	@service router;

	@tracked query = "";
	
	@action
	searchPlaces(event){
		event.preventDefault();
		let q = this.query.trim();
		if(q.length){
			this.router.transitionTo('home.search', {
				queryParams: {
					search: this.query
				}
			})
		}
	}
}
