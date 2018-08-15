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

  async index() {
    const smashers = await this.app.rethinkdbdash.table('smashers').run();
    this.ctx.body = smashers;
  }

  async update() {
    const id = this.ctx.params.id;
    const { name } = this.ctx.request.body;
    const result = await this.app.rethinkdbdash
        .table('smashers').get(id).update({ name })
        .run();
    this.ctx.body = result;
  }

  async delete() {
    const id = this.ctx.params.id;
    const result = await this.app.rethinkdbdash
        .table('smashers').get(id).delete()
        .run();
    this.ctx.body = result;
  }
}

module.exports = SmashersController;
