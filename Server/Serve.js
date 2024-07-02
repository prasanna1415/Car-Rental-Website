const connectDb = require('./config/dbAuth');
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");


const user = require('./models/userModel');
const posts = require('./models/postModel');
const bookings = require('./models/bookingsModel');

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

//connecting to database
connectDb();


//sign up
app.post("/register", async (req, res) => {


    const { username, email, password } = req.body;
    if(username == "admin" || password == "admin"){


        res.json({ message: "The username cannot be admin please choose anything else :)" });


    }else{


        try {
            // Check if a user with the same username or email already exists
            const existingUser = await user.findOne({ $or: [{ name: username }, { email }] });
    
            if (existingUser) {
                // User already exists, return an error response
                return res.status(400).json({ message: "Username or email already exists" });
            }
    
            // Hashing the password
            const hashedPassword = password;
    
            // Save user data to database
            const newUser = await user.create({ name: username, email, password: hashedPassword });
            res.json({ message: "Registration successful" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }

    }

});



// Assuming user is your MongoDB collection
let email = '';
app.post("/login", async(req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user by username
        const ress = await user.findOne({ name: username });

        if (ress) {
            // Check if the password matches
            if (ress.password === password) {
                // Password matches, user is authenticated
                res.json({ message: `Welcome ${ress.name}` });
                
                // Set the email variable to the user's email
                email = ress.email;
                
            } else {
                // Password doesn't match
                res.status(401).json({ message: "Incorrect password" });
            }
        } else {
            // User not found
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});




app.post('/post',async(req,res)=>{
    const {imageUrl , modelName , price} = req.body;


    try {
        // Check if a post already exists
        const existingPost = await posts.findOne({ $or: [{ imageUrl}, { modelName } ] });

        if (existingPost) {
            // post already exists, return an error response
            return res.status(400).json({ message: "post already exists" });
        }


        // Save post data to database
        const newPost = await posts.create({ imageUrl , modelName , price });
        res.json({ message: "post added" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }

}
)

app.get('/post', async (req, res) => {
    try {
        const postList = await posts.find();
        res.json(postList);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
});




app.post('/book', async(req,res) =>{

    const { pickupDate,returnDate,location , phone,modelName } = req.body;
    try{
        const booked = await bookings.create({ pickupDate , returnDate , location , phone, modelName});
        res.json({ message: "Processing by our team!!  you'll get a call if all goes well"});

    }catch(e){
        console.error(e);
        res.status(500).json({ message: "Internal server error" });
    }
})



app.delete('/post/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        await posts.findByIdAndDelete(postId);
        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
//update post feture code .....


 app.put('/updatephoto/:id', async (req, res) => {
    const { imageUrl } = req.body;
    const { id } = req.params;

    try {
        // Update the post by id with imageUrl
        const result = await posts.updateOne(
            { _id: new mongoose.Types.ObjectId(id) }, // Filter by post _id
            { $set: { imageUrl: imageUrl } } // Update imageUrl field
        );

        if (result.nModified === 0) {
            return res.status(404).json({ error: 'Post not found or imageUrl already set to provided value' });
        }

        res.status(200).json({ message: 'Image URL updated successfully' });

    } catch (error) {
        console.error('Error updating image URL:', error);
        res.status(500).json({ error: 'Failed to update image URL' });
    }
});


app.put('/updateprice/:id', async (req, res) => {
    const { price } = req.body;
    const { id } = req.params;

    try {
        // Update the post by id with price
        const result = await posts.updateOne(
            { _id: new mongoose.Types.ObjectId(id) }, // Filter by post _id
            { $set: { price: price } } // Update price field
        );

        if (result.nModified === 0) {
            return res.status(404).json({ error: 'Post not found or price already set to provided value' });
        }

        res.status(200).json({ message: 'price updated successfully' });

    } catch (error) {
        console.error('Error updating price:', error);
        res.status(500).json({ error: 'Failed to update price' });
    }
});

app.put('/updatename/:id', async (req, res) => {
    const { modelName } = req.body;
    const { id } = req.params;

    try {
        // Update the post by id with price
        const result = await posts.updateOne(
            { _id: new mongoose.Types.ObjectId(id) }, // Filter by post _id
            { $set: { modelName: modelName } } // Update name field
        );

        if (result.nModified === 0) {
            return res.status(404).json({ error: 'Post not found or Name already set to provided value' });
        }

        res.status(200).json({ message: 'Name updated successfully' });

    } catch (error) {
        console.error('Error updating name:', error);
        res.status(500).json({ error: 'Failed to update name' });
    }
});


app.get('/book', async (req, res) => {
    try {
        const bookingList = await bookings.find();
        res.json(bookingList);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
});




app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

