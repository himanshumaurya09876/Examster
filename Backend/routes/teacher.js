const express = require('express');
const router = express.Router();

const Teacher=require("../models/Schemas").Teacher;

router.post("/CreateClass", function(req,res){
    console.log(req.session);
    console.log(req.user);
    const id = req.user.userId;
    Teacher.findByIdAndUpdate({_id : id} , {$push : {"classes" : req.body}} , 
        function(err,data){
            if(err){
                res.status(500).send("insert aborted");
            }else{
                res.status(200).send("insert ok");
            }
    })
})
module.exports = router;