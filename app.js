const express = require('express');
const app = express();

const port = 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world');
});

app.listen(port, () => console.log(
    `Notre application Node est démarrée sur : http://localhost:${port}`)
)

/* 
    Pourquoi utilise t-on require et non pas import ?
    require() est une fonction native propre à NodeJS, 
    elle permet de charger un module entier 
*/