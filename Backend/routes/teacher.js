const express = require('express');
const router = express.Router();

const Teacher=require("../models/Schemas").Teacher;

router.post("/CreateClass", function(req,res){
    console.log(req.body);
    console.log(req.session);
    console.log(req.user);
})
module.exports = router;