const express = require("express");
//init app
const app = express();
const low = require("lowdb");
const FileSync = require('lowdb/adapters/FileSync');
const shortid = require("shortid");
const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({users: []})
    .write();

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// port
const port = 3000;

// set view engine
app.set('view engine', 'pug');
app.set('views', './views');
// home route
app.get('/', (req, res) => {
    res.render('index', {
        users: db.get('users').value()
    });
    
});

// search  user route
app.get('/search_user', (req, res) => {
    let name = req.query.name;
    let matchUsers = db.get('users').value().filter(user => {
        return user.name.indexOf(name) !== -1;
    });
    res.render('search_user', {
        users: matchUsers
    });
});

// create user get
app.get('/create_user', (req, res) => {
    res.render('create_user');
});

// get id user
app.get('/:id', (req, res) => {
    let id = req.params.id;
    let user = db.get('users').find({ id: id}).value();

    res.render('view', {
        user: user
    });
});

// create user post
app.post('/create_user', (req, res) => {
    req.body.id = shortid.generate();
    db.get('users').push(req.body).write();
    res.redirect('/');
});
// start server
app.listen(port, () => {
    console.log("Listen on port ", port);
});
