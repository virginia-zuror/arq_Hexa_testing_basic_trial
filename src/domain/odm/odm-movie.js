const conn = require('../repositories/mongo.repository');

exports.GetAll = async () => {
  try {
    return await conn.db.connMongo.Movie.find();
  } catch (error) {
    console.log('err odm-movie.getall = ', error);
    return await { err: { code: 123, message: error } };
  }
};

exports.Create=async(Title, Director, Poster)=>{
    try {
        const data = await new conn.db.connMongo.Movie({
            title: Title, 
            director: Director, 
            poster: Poster,
        });
        data.save();
        return true;
    } catch (error) {
        console.log("err odm-movie.Create =", error);
        return await { err:{code: 123, message:error }};
    }
}