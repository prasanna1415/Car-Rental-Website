const mongoose = require("mongoose");

const carpostSchema = mongoose.Schema({
    imageUrl:{
        type:String,
        

    },
    modelName:{
        type:String,
       
    },
    price:{
        type:Number,
        
    }
});


module.exports = mongoose.model('Post',carpostSchema);