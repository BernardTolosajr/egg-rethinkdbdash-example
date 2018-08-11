'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const foos = await this.app.rethinkdbdash.table('foos').run();
    this.ctx.body = foos;
  }
}

module.exports = HomeController;
