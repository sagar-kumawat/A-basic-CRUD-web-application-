const mongoose = require('mongoose');


var productschema = new mongoose.Schema({
    ProductName:{
        type: String, 
        required:'Required field'
    },
    ProductPrice:{
        type:String,
    },
    ProductId:{
        type:String,
        required:'Required field'
    }
});
mongoose.model('Product', productschema);