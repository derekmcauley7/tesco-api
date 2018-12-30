import { moduleForModel, test } from 'ember-qunit';

moduleForModel('wine', 'Unit | Serializer | wine', {
  // Specify the other units that are required for this test.
  needs: ['serializer:wine']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
