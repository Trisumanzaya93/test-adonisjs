"use strict";

const User = use("App/Models/User");
const { validate } = use("Validator");
const responseHelper = require("../../../helpers/response");

class RegisterController {
  async register({ request, response }) {
    try {
      const rules = {
        username: "required",
        email: "required|unique:users, email",
        password: "required",
      };
      const message = {
        "username.required": "Username tidak boleh kosong",
        "email.required": "Email tidak boleh kosong",
        "email.unique": "Email tidak boleh sama",
        "password.required": "password tidak boleh kosong",
      };
      const validation = await validate(request.all(), rules, message);

      if (validation.fails()) {
        const error = validation.messages();
        return responseHelper(response, {
          status: 400,
          message: error[0].message,
        });
      }
      const user = await User.create({
        username: request.input("username"),
        email: request.input("email"),
        password: request.input("password"),
      });
      return responseHelper(response, {
        status: 200,
        message: "register succes",
      });
    } catch (error) {
      return responseHelper(response, {
        status: 500,
        message: "Terjadi Error",
        error,
      });
    }
  }
  async login({ request, auth, response }) {
    try {
      const { email, password } = request.all();
      const result = await auth
        .authenticator("jwt")
        .withRefreshToken()
        .attempt(email, password);
      return responseHelper(response, {
        data: result,
        status: 200,
        message: "login succes",
      });
    } catch (error) {
      return responseHelper(response, {
        status: 400,
        message: "email/password salah",
      });
    }
  }
}

module.exports = RegisterController;
