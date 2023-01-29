const fs = require('fs');
let path = require('path');

const dbPlatos = JSON.parse(
    fs.readFileSync(path.join(__dirname, './productos.json'), 'utf-8')
);

module.exports = dbPlatos;

