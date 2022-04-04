import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | sw-button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<SwButton />`);

    assert.dom(this.element).hasText('');

    await render(hbs`
      <SwButton>
        template block text
      </SwButton>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
