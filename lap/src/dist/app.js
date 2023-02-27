"use strict";
exports.__esModule = true;
var express_1 = require("express");
var uuid_1 = require("uuid");
var app = express_1["default"]();
app.use(express_1["default"].json());
var port = 3000;
var users = [];
app.get('/', function (req, res) {
    res.json(users);
});
app.post('/', function (req, res) {
    var user = req.body;
    user.id = uuid_1.v4();
    users.push(user);
    res.json({
        message: "user added"
    });
});
app["delete"]('/', function (req, res) {
    var email = req.body.email;
    res.json(users.filter(function (e) { return e.email !== email; }));
});
app.put('/', function (req, res) {
    if (req.body.username === undefined) {
        res.send('please enter the new Data');
    }
    else {
        users.find(function (e) {
            if (e.username === req.body.username) {
                e.email = req.body.email;
                e.passwore = req.body.passwore;
            }
        });
        res.json(users);
    }
});
app.listen(port, function () {
    console.log('server start');
});
