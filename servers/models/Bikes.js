const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const bikesSchema = new Schema({
    "type": String,
    "name": String,
    "fullPrice": {
      "price": String,
      "priceWithInsu": String
    },
    "price": String,
    "star": String,
    "image": String,
    "info": [
      {
        "icon": String,
        "text": String
      },
      {
        "icon": String,
        "text": String
      },
      {
        "icon": String,
        "text": String
      },
      {
        "icon": String,
        "text": String
      }
    ],
    "page": String
  })


  module.exports = mongoose.model('bikes', bikesSchema)