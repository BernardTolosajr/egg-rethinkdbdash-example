'use strict';

const Controller = require('egg').Controller;

class SmashersController extends Controller {
  async create() {
    const { name } = this.ctx.request.body;
    const result = await this.app.rethinkdbdash.table('smashers').insert({
      name
    }).run()
    this.ctx.body = result;
  }
}

module.exports = SmashersController;
