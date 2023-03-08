module.exports = (db) => {
    const showSchema = new db.Schema({
      title: { type: String, required: true, trim: true },
      poster: { type: String, trim: true },
    }, {
      timestamps:true,
    });
    return db.model('Show', showSchema)
  };