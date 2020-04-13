import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | un-authentication', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:un-authentication');
    assert.ok(route);
  });
});
