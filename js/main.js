const express = require('express');
const app = express();
const port = 3000;

app.get('/', (require, response) => {
    response.send('Helo from Express!');
});

app.listen(port, (err) => {
    if (err)
        return console.log('Erro: ', err);
    console.log('Serve escutando');
});