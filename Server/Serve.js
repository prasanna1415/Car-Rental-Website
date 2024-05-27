const connectDb = require('./config/dbAuth');
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const user = require('./models/userModel');
const posts = require('./models/postModel');

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

//log in

app.post("/login", async(req,res) =>{
    const {username , password} = req.body;

    try{
        const broisLegit = await user.findOne({ $or: [{ name: username }, { password }] });

        if(broisLegit){
            res.json({ message: `Welcome ${broisLegit.name}`});
        } else {
            res.status(401).json({ message: "Incorrect username or password" });
        }

    } catch(er){
        console.error(er);
        res.status(500).json({ message: "Internal server error"});
    }
})


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




//no of post in db
    app.get('/getPost', async (req , res) =>{
        try{
            const postCount = await posts.countDocuments({});
            res.json(postCount);
        } catch(err){
            console.log(err);
            res.status(500).json({message : 'Internal server error'});
        }
    })



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
