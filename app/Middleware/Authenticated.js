"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const responseHelper = require("../helpers/response");

class Authenticated {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request, auth, response }, next) {
    // call next to advance the request
    try {
      await auth.check();
      await next();
    } catch (error) {
      return responseHelper(response, {
        status: 401,
        message: "Bearer Token tidak ada / salah",
        error,
      });
    }
  }
}

module.exports = Authenticated;
