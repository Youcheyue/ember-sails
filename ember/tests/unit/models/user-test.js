import {
  moduleForModel,
  test
  } from 'ember-qunit';

moduleForModel('user', 'User', {
  // Specify the other units that are required for this test.
  needs: ['model:identity', 'model:identity-type']
});

test('it exists', function () {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});