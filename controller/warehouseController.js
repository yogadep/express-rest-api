const connection = require('../config/db');

// Get All Warehouse
const getAllwarehouses = (req, res) => {
  
    connection.query('SELECT * FROM warehouse', (err,rows) => {
        if(err){
            return res.status(500).json({ message: err.message });
        }
        res.json({ success: true, data: rows });
    });
};

// Get Warehouse By Id_warehouse
const getWarehouseById = (req, res) => {
    let id_warehouse = req.params.id_warehouse;

    connection.query('SELECT * FROM warehouse WHERE id_warehouse = ?', id_warehouse, (err,rows)=> {
        if(err){
            return res.status(500).json({ message: err.message });
        }
        res.json({ success: true, data: rows });
    });
};

// Add warehouse
const createWarehouse = (req,res) => {
    let warehouse_location = req.body.warehouse_location;

    if(!warehouse_location){
        return res.status(400).json({ message: 'Field location warehouse harus diisi' });
    }

    let formData = {
        warehouse_location,
    }
    connection.query('INSERT INTO warehouse SET ?', formData, (err, result) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        } else {                
            res.json({ success: true, message: 'Data Berhasil Disimpan!' });
        }
    });
};

// Update Warehouse
const updateWarehouse = (req, res) => {
    let id_warehouse = req.params.id_warehouse;
    let warehouse_location = req.body.warehouse_location;

    if(!warehouse_location){
        return res.status(400).json({ message: 'Field warehouse location harus diisi' });
    };

    let formData = {
        warehouse_location
    }
    connection.query('UPDATE warehouse SET ? WHERE id_warehouse = ?', [formData, id_warehouse], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Terjadi kesalahan saat mengubah data', err });
        } else {     
            res.json({ success: true, message: 'Data Berhasil Diubah!' });           
        }
    });
}

// Delete Warehouse
const deleteWarehouse = (req,res) => {
    let id_warehouse = req.params.id_warehouse;

    connection.query('DELETE FROM warehouse WHERE id_warehouse = ? ', id_warehouse, (err, result) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        } else {
            res.json({ success: true, message: 'Data Berhasil Dihapus!' });
        }
    })
}

module.exports = {
    getAllwarehouses,
    getWarehouseById,
    createWarehouse,
    updateWarehouse,
    deleteWarehouse,
}