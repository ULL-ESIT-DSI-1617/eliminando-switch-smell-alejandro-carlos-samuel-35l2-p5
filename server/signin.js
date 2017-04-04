var bcrypt = require('bcrypt-nodejs');
var fs = require('fs');

var users = {
    "users": [{
            "username": "dsi1617",
            "password": bcrypt.hashSync("dsi1617password")
        }
    ]
};

var usersjson = JSON.stringify(users);
fs.writeFile("users.json", usersjson);
