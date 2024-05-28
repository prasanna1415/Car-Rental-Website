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
    }
});


module.exports = mongoose.model('Book',bookingSchema);