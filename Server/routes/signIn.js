const express = require("express");
const router = express.Router();

router.route("/").get((req,res)=>{
    res.status(200).send("Hello this is signin get");
});

//takes userInfo and add to database
router.route("/").post((req,res)=>{
    res.status(200).send("new info to the database");
});

//to delete the user
router.route("/").delete((req,res)=>{
    res.status(200).send("user deleted");
});

module.exports = router;