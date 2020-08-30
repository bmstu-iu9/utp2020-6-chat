const MongoClient = require("mongodb").MongoClient;
const mongoClient = new MongoClient("mongodb://127.0.0.1:27017");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const express = require("express");
const app = express();
const jsonParser = express.json();



const UserScheme = new Schema({
    login: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
})
const User = mongoose.model("User", UserScheme);


const ChatScheme = new Schema({
    authors_id: [{
        type: mongoose.Schema.Types.ObjectId
    }],
    messages:[{
        author: mongoose.Schema.Types.ObjectId,
        mess: String,
        created:{
            type: Date,
            default: Date.now
        }
    }]
})


const Chat = mongoose.model("Chat", ChatScheme);

module.exports = mongoose.model('User', UserScheme);
module.exports = mongoose.model('Chat', ChatScheme);

mongoose.connect("mongodb://127.0.0.1:27017/web-chat", {useNewUrlParser:true}, (err) => {
    if(err)
        return console.log(err);
    app.listen(3000, () => {
        console.log("Сервер ожидает подключения...");
    });
});

MongoClient.connect((err, client) => {
    const db = client.db("web-chat");
});

app.get('/api/users/:id', (req, res) => {
    const id = req.params.id;
    User.findOne({_id: id}, (err, user) => {
        if(err) return console.log(err);
        res.send(user);
    });
});

app.post("/api/users", jsonParser, (req, res) => {
    if(!req.body) return res.sendStatus(400);

    const userLogin = req.body.username;
    const userPass = req.body.password;
    const user = new User({login: userLogin, password: userPass});

    user.save((err) => {
        if(err) return console.log(err);
        res.send(user);
    })
})