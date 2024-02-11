let express = require('express');
let router = express.Router();

//import database
let connection = require('../config/db');
const { getAllwarehouses, getWarehouseById, createWarehouse, updateWarehouse, deleteWarehouse, } = require('../controller/warehouseController');

router.get('/', getAllwarehouses);

router.get('/:id_warehouse', getWarehouseById);

router.post('/', createWarehouse);

router.put('/:id_warehouse', updateWarehouse);

router.delete('/:id_warehouse', deleteWarehouse);

module.exports = router;