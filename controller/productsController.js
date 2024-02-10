const connection = require('../config/db');

const getAllProducts = (req, res) => {
    connection.query('SELECT * FROM product', (err,rows) => {
        if(err){
            res.send('error', err);
            res.json({
                data: ''
            });
        }else {
            res.json({
                data: rows
            });
        }
    });
};

const getProductById = (req, res) => {
    let id = req.params.id;

    connection.query(`SELECT * FROM product WHERE id = ${id}`, (err,rows)=> {
        if(err){
            res.send('error', err);
            res.json({
                data: ''
            });
        }else {
            res.json({
                data: rows
            });
        }
    });
};

const createProduct = (req,res) => {
    let name = req.body.name;
    let price = req.body.price;

    // if(!name){
    //     res.json({pesan :'Field name belum diisi, Field harus diisi dengan lengkap'});
    //     return;
    // }else if(!price){
    //     res.json({pesan :'Field price belum diisi, Field harus diisi dengan lengkap'});
    //     return;
    // }else{
    //     let formData = {
    //         name,
    //         price
    //     }
    //     connection.query('INSERT INTO product SET ?', formData, (err, result) => {
    //         if (err) {
    //            res.json({pesan :'Data gagal disimpan'});
    //         } else {                
    //             res.send('Data Berhasil Disimpan!');
    //         }
    //     });
    // };
    if(!name || !price){
        res.json({pesan :'Field name dan price belum diisi, Field harus diisi dengan lengkap'});
        return;
    }

    if(isNaN(price)){
        res.json({pesan :'Field price harus berupa angka'});
        return;
    }

    let formData = {
        name,
        price
    }
    connection.query('INSERT INTO product SET ?', formData, (err, result) => {
        if (err) {
            res.json({pesan :'Data gagal disimpan'});
        } else {                
            res.send('Data Berhasil Disimpan!');
        }
    });
};

const updateProduct = (req, res) => {
    let id = req.params.id;
    let name = req.body.name;
    let price = req.body.price;

    if(!name || !price){
        res.json({pesan :'Field name dan price belum diisi, Field harus diisi dengan lengkap'});
        return;
    };

    if(isNaN(price)){
        res.json({pesan :'Field price harus berupa angka'});
        return;
    };

    let formData = {
        name,
        price
    }
    connection.query(`UPDATE product SET ? WHERE id = ${id}`, formData, (err, result) => {
        if (err) {
            res.json({pesan :'Data gagal diubah', err});
        } else {                
            res.send('Data Berhasil Diubah!');
        }
    });
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
}

