var express = require('express');
var path = require('path');

var productsRouter = require('./routes/products');
let warehousesRouter = require('./routes/warehouses');

var app = express();
var port = 3000; 

// Middleware untuk mengurai body dengan tipe application/json
app.use(express.json());

// Middleware untuk mengurai body dengan tipe application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/products', productsRouter);

app.use('/warehouses', warehousesRouter)
 
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}/`);
});

module.exports = app;
