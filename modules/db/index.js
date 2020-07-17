// const MongoClient= require('mongodb').MongoClient;

// let state = {
//   db: null
// };

// let connect = (url, done) =>{
//   if (state.db) {
//     return done();
//   }
//   MongoClient.connect(url, function (err, client) {
//     if (err) {
//       return done(err);
//     }
//     state.db=client.db('myAPI');
//     done();
//   })
// }

// let get =  () => {
//   return state.db;
// }


// module.exports = {connect, get}