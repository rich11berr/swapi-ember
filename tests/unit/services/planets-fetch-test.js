import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | planets-fetch', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let service = this.owner.lookup('service:planets-fetch');
    assert.ok(service);
  });
});
