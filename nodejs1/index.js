const express = require("express");
const app = express();

const port = 3000;

app.get('/', (req, res) => res.send("<h1>Thien Kute</h1>"));

app.get('/user', (req, res) => res.send('User List'));

app.listen(port, () => console.log('Listen on port ', port));