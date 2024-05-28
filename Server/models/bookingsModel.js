const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({

    pickupDate:{
        type:String,
       
    },
    returnDate:{
        type:String,
        
    },
    location:{
        type:String,
    },
    phone:{
        type:Number,
    },
    modelName:{
        type:String,
    },
    price:{
        type:String,
    }

});


module.exports = mongoose.model('Book',bookingSchema);