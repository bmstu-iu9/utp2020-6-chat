const MongoClient= require('mongodb').MongoClient;

let state = {
  db: null
};

let connect = (url, done) =>{
  if (state.db) {
    console.log("подключение к mongo уже установлено\n")
    return done();
  }
  MongoClient.connect(url,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  (err, client) => {
    if (err) {
      console.log("ошибка при подключении к mongo\n")
      return done(err);
    }
    state.db=client.db('myAPI');
    console.log("удачное подключение к mongo\n")
    done();
  })
}

let get =  () => {
  if (state.db===null) {
    console.log("обращение к БД без установленного подключения\n")
  }
  return state.db;
}

module.exports = {connect, get}
