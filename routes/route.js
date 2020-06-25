

const express = require('express');
const router = express.Router()
const mongoose= require('mongoose');
const Product=mongoose.model('Product')


router.get('/', (req, res)=>{
    res.render('product/modify',{
        viewTitle:"Insert Product"
    })
})
router.post('/', (req,res) => {
    if (req.body._id == '')
        insertData(req, res);
    else
        updateData(req, res);
})

function insertData(req,res){
    var product = new Product();
    product.ProductName = req.body.ProductName;
    product.ProductPrice = req.body.ProductPrice;
    product.ProductId = req.body.ProductId;
    product.save((err, doc) => {
        if (!err)
            res.redirect('product/list');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("product/modify", {
                    viewTitle: "Insert Product",
                    product: req.body
                });
            }
            else
                console.log('Error during record insertion : ' + err);
        }
    })
}

function updateData(req, res) {
    Product.findOneAndUpdate({_id: req.body._id}, req.body, { new: true }, (err, doc) => {
        if (!err) 
            res.redirect('product/list'); 
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("Product/modify", {
                    viewTitle: 'Update Product',
                    Product: req.body
                });
            }
            else
                console.log('Error during record update : ' + err);
        }
    })
}


router.get('/list', (req, res)=>{
    
    Product.find((err,docs)=>{
        if(!err)
            res.render('product/list',{
                list:docs
            })
        else{
            console.log('error in list '+ err)
        }            
    });
})


function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'ProductName':
                body['ProductNameError'] = err.errors[field].message;
                break;
            case 'ProductId':
                body['ProductIdError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}
router.get('/:id', (req, res) => {
    Product.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("product/modify", {
                viewTitle: "Update Product",
                product: doc
            });
        }
    });
});
router.get('/delete/:id', (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/product/list');
        }
        else { console.log('Error in product delete :' + err); }
    });
});
module.exports = router