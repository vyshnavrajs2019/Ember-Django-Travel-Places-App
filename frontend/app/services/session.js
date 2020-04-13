import Service from '@ember/service';
import fetch from 'fetch';

export default class SessionService extends Service {
	authToken = null;
	authUserId = null;
	authBaseURL = 'http://localhost:8000/api/auth/';
	authErrors = [];

	get isAuthenticated(){
		if(this.get('authToken') == null)
			return false;
		return true;
	}

	signout(){
		this.set('authToken', null);
		this.set('authUserId', null);
	}

	handleAuthResponse(data){
		let token = data.token;
		let userId = data.id;
		this.set('authUserId', userId);
		this.set('authToken', token);
	}

	async handleRequest(url, reqData, headers={}){
		try{
			const response = await fetch(url, {
				method: "POST",
				body: JSON.stringify(reqData),
				headers: headers
			});
			const data = await response.json();
			this.handleAuthResponse(data)
		} catch(error){
			this.authErrors.clear();
			this.authErrors.pushObject(error);
		}
	}

	async signin(username, password){
		const url = this.authBaseURL + 'signin/';
		const data = { username, password };
		await this.handleRequest(url, data, {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		});
	}

	async signup(username, password, confPassword){
		const url = this.authBaseURL + 'signup/';
		const data = { username, password, password2: confPassword };
		await this.handleRequest(url, data, {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		});
	}
}
