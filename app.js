'use strict';

module.exports = app => {
  app.beforeStart(async () => {
    await app.rethinkdbdash.tableCreate('smashers').run();
  });
};

