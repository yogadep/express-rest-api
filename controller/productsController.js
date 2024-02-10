const connection = require('../config/db');

// Get All Products
const getAllProducts = (req, res) => {
    connection.query('SELECT * FROM product', (err,rows) => {
        if(err){
            return res.status(500).json({ message: err.message });
        }
        res.json({ success: true, data: rows });
    });
};

const getProductById = (req, res) => {
    let id = req.params.id;

    connection.query('SELECT * FROM product WHERE id = ?', id, (err,rows)=> {
        if(err){
            return res.status(500).json({ message: err.message });
        }
        res.json({ success: true, data: rows });
    });
};

// Add Product
const createProduct = (req,res) => {
    let name = req.body.name;
    let price = req.body.price;

    if(!name || !price){
        return res.status(400).json({ message: 'Field name dan price harus diisi dengan lengkap' });
    }

    if(isNaN(price)){
        return res.status(400).json({ message: 'Field price harus berupa angka' });
    }

    let formData = {
        name,
        price
    }
    connection.query('INSERT INTO product SET ?', formData, (err, result) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        } else {                
            res.json({ success: true, message: 'Data Berhasil Disimpan!' });
        }
    });
};

// Update Product
const updateProduct = (req, res) => {
    let id = req.params.id;
    let name = req.body.name;
    let price = req.body.price;

    if(!name || !price){
        return res.status(400).json({ message: 'Field name dan price harus diisi dengan lengkap' });
    };

    if(isNaN(price)){
        return res.status(400).json({ message: 'Field price harus berupa angka' });
    };

    let formData = {
        name,
        price
    }
    connection.query('UPDATE product SET ? WHERE id = ?', [formData, id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Terjadi kesalahan saat mengubah data' });
        } else {     
            res.json({ success: true, message: 'Data Berhasil Diubah!' });           
        }
    });
}

// Delete Product
const deleteProduct = (req,res) => {
    let id = req.params.id;

    connection.query('DELETE FROM product WHERE id = ? ', id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        } else {
            res.json({ success: true, message: 'Data Berhasil Dihapus!' });
        }
    })
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
}

