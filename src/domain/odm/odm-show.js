const conn = require('../repositories/mongo.repository');

exports.GetAll = async () => {
  try {
    return await conn.db.connMongo.Show.find();
  } catch (error) {
    console.log('err odm-show.getall = ', error);
    return await { err: { code: 123, message: error } };
  }
};

exports.Create = async (Title, Poster) => {
  try {
    const data = await new conn.db.connMongo.Show({
      title: Title,
      poster: Poster,
    });
    data.save();
    return true;
  } catch (error) {
    console.log('err odm-show.Create =', error);
    return await { err: { code: 123, message: error } };
  }
};
