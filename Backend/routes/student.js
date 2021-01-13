const express = require('express');
const router = express.Router();

const Student=require("../models/Schemas").Student;
const Class = require("../models/Schemas").Class;
const QuestionPaper = require("../models/Schemas").QuestionPaper;
const {ensureAuthenticated ,forwardAuthenticated ,allowCrossDomain } = require('../config/auth.js');

router.post("/JoinClass",allowCrossDomain, function(req,res){

    //console.log("join class " ,req.session);
    
    const Classdata = req.body ; 
    const email = req.body.email;
   
    const classId = "";
    Student.findOne({email :email}, function(err ,data){
        if(err){
            res.send("student not found");
        }
        const studentId = data._id;
        Class.findOne({
            classBranch : Classdata.classBranch,
            classSection :Classdata.classSection,
            classSubjectCode : Classdata.classSubjectCode} , function(err, cdata){
                if(err) {
                    res.send("error occured")
                }else{
                    if(cdata){
                        const classId = cdata._id;
                        const temp ={
                            classBranch : cdata.classBranch,
                            classSection : cdata.classSection,
                            classSubjectCode : cdata.classSubjectCode,
                            classSubjectName : cdata.classSubjectName,
                            classId: classId,
                        }
                        if(("filter",data.enrolledClasses.filter(e=>e.classId+""=== classId+"")).length>0){
                            res.status(201).send("already joined this class");
                        }else{
                            cdata.students.push(studentId);
                            cdata.save();
                            
                             data.enrolledClasses.push(temp); 
                            data.save();
                            res.send("insert successful");
                        }  
                    }
                }
        });
    })    
});


router.get("/getClassList/:email",allowCrossDomain, function(req,res){
    //console.log("getclasslist " ,req.session);

    const email = req.params.email;
    Student.findOne({email :email}, function(err ,data){
       if(err){
           res.send("student not found");
       }
       res.send(data.enrolledClasses);
    });
});

router.get("/classData" ,allowCrossDomain, function(req ,res){

    const email = req.query.email;
    const classId = req.query.classId;
    Class.findById(classId , function(err , data){
        if(err){
            res.send("error in finding  class data");
        }
        const dataToSend = {
            ...data._doc
        };
        const newTest = []
        dataToSend.scheduledTest.forEach((test )=>{
            newTest.push(   
                {
                    testCode : test.testCode ,
                    testName : test.testName ,
                    date : test.date,
                    startTime : test.startTime,
                    questionPaperCode : test.questionPaperCode,
                }
            );
        });
        dataToSend.scheduledTest = newTest;

        const oldTests = []
        dataToSend.oldTests.forEach((test )=>{
            newTest.push(   
                {
                    testCode : test.testCode ,
                    testName : test.testName ,
                    date : test.date,
                    startTime : test.startTime,
                    questionPaperCode : test.questionPaperCode,
                }
            );
        });
        dataToSend.oldTests = oldTests;
        res.send(dataToSend);
    })
});

router.get("/startTest" ,allowCrossDomain, function(req ,res){

    const email = req.query.email;
    const classId = req.query.classId;
    const dataToSend = {
        testCode : "",
        testName : "",

        startTime : String,
        timeLimit : Number,

        maximumMarks : Number,
        questions : [],
        
    }
    Class.findById(classId , function(err , data){
        if(err){
            res.send("error in finding  class data");
        }else{
            if(!data){
                res.send("no class found");
            }
            console.log("class",data)
            dataToSend.testCode = data.testCode;
            dataToSend.testName = data.testName;
            
            dataToSend.date = data.date;
            dataToSend.startTime = data.startTime;
            dataToSend.timeLimit = data.timeLimit;
            
            QuestionPaper.findOne({code : data.questionPaperCode} , function(err ,Paperdata){
                if(err){
                    res.send("No Question  paper found or not assigned any paper");
                }
                if(!data){
                    res.send("no question paper for req test");
                }
                dataToSend.maximumMarks = Paperdata.maximumMarks;
                dataToSend.questions=Paperdata.questions;
                res.status(200).send(dataToSend);
            });
        }
    });
});


module.exports = router;