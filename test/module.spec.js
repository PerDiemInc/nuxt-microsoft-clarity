const tap = require('tap')


tap.test('module need to export meta', done => {
  const m = require('../lib/module');
  tap.ok(m.meta, 'meta is not exported');
  tap.ok(m.meta.name, 'package name is not defined');
  done.end();
});

tap.test('module should call addPlugin', done => {
  let called = false;
  const m = tap.mock('../lib/module', {
    'this': () => {
      called = true;
    }
  });
  m({ id: 't1' });
  tap.equal(called, true, 'addPlugin was not called');
  done.end();
});
