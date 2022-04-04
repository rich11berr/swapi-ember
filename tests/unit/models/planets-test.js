import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | planets', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('planets', {});
    assert.ok(model);
  });
});
