const axios = require("axios");
const db = require("../models");

module.exports = {
  findAll: function(req, res) {

    const { query: params } = req;
    console.log("\r\rBook\r\r");
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
      .then(results =>
        results.data.items.filter(
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      .then(books => res.json(books));
  }
};