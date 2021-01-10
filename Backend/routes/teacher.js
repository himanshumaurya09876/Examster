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

router.get("/getClassList/:email", function(req,res){
    const email=req.params.email;
    const classList=[];

    Teacher.findOne({email:email},function(err,data){
        if(err){
            console.log(err);
        } else {
            if(data){
                const ClassIDs=data.classes;
                ClassIDs.forEach(function(id,index){
                    Class.findById(id,function(err,classData){
                        if(err){
                            console.log(err);
                        } else {
                            if(classData){
                                const specificData = {
                                    classID : classData._id,
                                    classBranch : classData.classBranch,
                                    classSection : classData.classSection,
                                    classSubjectCode : classData.classSubjectCode,
                                    classSubjectName : classData.classSubjectName,
                                };
                               classList.push(specificData);
                            } else {
                                console.log("ClassData is empty");
                            }
                        }

                        if(index === ClassIDs.length-1){
                            console.log(classList);
                            console.log(ClassIDs);
                            res.send(classList);
                        }
                    })
                })
            } else {
                console.log("teacher ka classList data nhi hai");
            }
        }
    });
});

module.exports = router;