'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/smashers', controller.smashers.create);
  router.get('/smashers', controller.smashers.index);
  router.put('/smashers/:id', controller.smashers.update);
};
