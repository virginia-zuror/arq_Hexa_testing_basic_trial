const config = require('config-yml');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const magic = require('../../utils/magic');
const movie = require('../entities/entity-movie');
const show = require('../entities/entity-show');

dotenv.config();

let db = {};

if (config.db.mongodb && config.db.mongodb.length > 0) {
  config.db.mongodb.map((c) => {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db[c.nameconn] = {};
    db[c.nameconn].conn = mongoose;
    db[c.nameconn].Movie = movie(mongoose);
    db[c.nameconn].Show = show(mongoose);
  });
  exports.db = db;
  magic.LogInfo('Connected to DB 😁');
} else {
  magic.LogDanger(`DB doesn't exist 😐`);
}
