const express = require('express');
const router = express.Router();

const Teacher=require("../models/Schemas").Teacher;
const Class = require("../models/Schemas").Class;

router.post("/CreateClass", function(req,res){
    
    const Classdata = req.body ;
    
    const email = req.body.email;
    const newClass = new Class(Classdata);
    newClass.save()
    .then((data)=>{
        Teacher.findOneAndUpdate({email : email} , {$push : {classes : data._id}} , 
        function(err,data){
            if(err){
                console.log(err);
                res.status(500).send("error in adding class in teacher ");
            }else{
                res.status(200).send("insert ok");
            }
        }); 
    });
    

        
});
module.exports = router;