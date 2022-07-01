"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const axios = require("axios");

class Location {
  constructor() {
    this.url = "https://kasirpintar.co.id/allAddress.txt";
    this.address_kecamatan = [];
    this.address_kelurahan = [];
    this.address_kota = [];
    this.address_provinsi = [];
  }
  async getData() {
    try {
      const response = await axios.get(this.url);
      this.address_kecamatan = response.data.address_kecamatan;
      this.address_kelurahan = response.data.address_kelurahan;
      this.address_kota = response.data.address_kota;
      this.address_provinsi = response.data.address_provinsi;
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async findById(id) {
    const result = await this.getData();
    let data = [];
    if (id.length === 7) {
      data = this.address_kecamatan;
    }
    if (id.length === 2) {
      data = this.address_provinsi;
    }
    if (id.length === 10) {
      data = this.address_kelurahan;
    }
    if (id.length === 4) {
      data = this.address_kota;
    }

    return data.filter((item) => item.id === id);
  }
  async findKotaById(id) {
    const result = await this.getData();
    let data = this.address_kecamatan;
    return data.filter((item) => item.kota_id === id);
  }
}

module.exports = Location;
