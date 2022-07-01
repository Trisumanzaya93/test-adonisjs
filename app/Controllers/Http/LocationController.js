"use strict";

const Location = use("App/Models/Location");
const responseHelper = require("../../helpers/response");

class LocationController {
  async getAllLocation({ request, response }) {
    try {
      const location = new Location();
      const data = await location.getData();
      return responseHelper(response, {
        data,
        status: 200,
        message: "get all location succes",
      });
    } catch (error) {
      return responseHelper(response, {
        status: 500,
        message: "Terjadi Error",
        error,
      });
    }
  }
  async getLocationById({ request, response }) {
    try {
      const { id } = request.body;
      if (!id) {
        return responseHelper(response, {
          status: 400,
          message: "input harus ada",
        });
      }

      const location = new Location();
      const data = await location.findById(id);
      if (data.length === 0)
        return responseHelper(response, {
          data,
          status: 404,
          message: "data tidak ditemukan",
        });
      return responseHelper(response, {
        data,
        status: 200,
        message: "get Location by id succes",
      });
    } catch (error) {
      return responseHelper(response, {
        status: 500,
        message: "Terjadi Error",
        error,
      });
    }
  }
  async getKotaById({ request, auth, response }) {
    try {
      const { kota_id } = request.body;
      if (!kota_id) {
        return responseHelper(response, {
          status: 400,
          message: "input harus ada",
        });
      }

      const location = new Location();
      const data = await location.findKotaById(kota_id);
      return responseHelper(response, {
        data,
        status: 200,
        message: "get Location by id succes",
      });
    } catch (error) {
      return responseHelper(response, {
        status: 500,
        message: "Terjadi Error",
        error,
      });
    }
  }
}

module.exports = LocationController;
