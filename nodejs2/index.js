const express = require("express");

// init app
const app = express();

// port
const port = 3000;

// load view engine
app.set('view engine', 'pug');
app.set('views', './views');

// home route
app.get('/', (req, res) => {
    let users = [
        {
            id: 1,
            name: 'Thien'
        },
        {
            id: 2,
            name: 'Thinh'
        },
        {
            id: 3,
            name: 'Thanh'
        }
    ];
    res.render('index', {
        usersList: 'Users List',
        users: users
    });
});

// add route
app.get('/users/add', (req, res) => {
    res.render('add_user', {
        usersList: 'add users'
    });
});

// start server
app.listen(port, () => console.log("Listen on port", port));