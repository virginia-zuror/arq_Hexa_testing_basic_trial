module.exports = (db) => {
  const movieSchema = new db.Schema({
    title: { type: String, required: true, trim: true },
    director: { type: String, required: true, trim: true },
    poster: { type: String, trim: true },
  }, {
    timestamps:true,
  });
  return db.model('Movie', movieSchema)
};
