import RESTAdapter from '@ember-data/adapter/rest';
import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends RESTAdapter {
	@service session;

	host = "http://localhost:8000"
	namespace = "api"
	get headers(){
		let headers_ = {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
		if(this.session.isAuthenticated){
			headers_['Authorization'] = `Token ${ this.session.authToken }`;
		}
		return headers_;
	}
}
