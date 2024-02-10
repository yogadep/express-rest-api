var express = require('express');
var router = express.Router();

//import database
var connection = require('../config/db');
const { getAllProducts, getProductById, createProduct, updateProduct } = require('../controller/productsController');

/**
 * INDEX KELAS
 */
router.get('/', getAllProducts);

router.get('/:id', getProductById);

router.post('/', createProduct);

router.put('/:id', updateProduct);

module.exports = router;
