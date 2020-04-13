import JSONSerializer from 'ember-data/serializers/json';
import { underscore } from '@ember/string';

export default class ApplicationSerializer extends JSONSerializer {
	keyForAttribute(attr){
		return underscore(attr);
	}
}
