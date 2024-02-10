var express = require('express');
var router = express.Router();

//import database
let connection = require('../config/db');
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controller/productsController');

router.get('/', getAllProducts);

router.get('/:id', getProductById);

router.post('/', createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

module.exports = router;
