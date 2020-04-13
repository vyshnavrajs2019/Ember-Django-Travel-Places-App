import Model, { attr, hasMany } from '@ember-data/model';

export default class ContributionModel extends Model {
	@attr('string') username;
	@hasMany('place', { async: true }) contributions;
}
