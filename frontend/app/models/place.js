import Model, { attr, belongsTo } from '@ember-data/model';

export default class PlaceModel extends Model {
	@attr('string') name;
	@attr('string') district;
	@attr('string') state;
	@attr('string') about;
	@attr('string') history;
	@attr('string') bestTime;
	@belongsTo('contribution') contributor;
}
