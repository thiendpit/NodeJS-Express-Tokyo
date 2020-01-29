const express = require("express");
const app = express();

const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/users', (req, res) => {
    res.render('users');
});
app.listen(port, () => console.log("Listen on port", port));