const express = require("express");
//init app
const app = express();
// port
const port = 3000;
// users list
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
        name: 'Quynh'
    },
    {
        id: 4,
        name: 'Thanh'
    }
];

// set view engine
app.set('view engine', 'pug');
app.set('views', './views');
// home route
app.get('/', (req, res) => {
    
    res.render('index', {
        users: users
    });
});

// search  user route
app.get('/search_user', (req, res) => {
    let name = req.query.name;
    let matchUsers = users.filter(user => {
        return user.name.indexOf(name) !== -1;
    });
    res.render('search_user', {
        users: matchUsers
    });
});

// start server
app.listen(port, () => {
    console.log("Listen on port ", port);
});
