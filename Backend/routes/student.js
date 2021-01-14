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

router.get("/attempTest",allowCrossDomain,function(req,res){
    const questionPaperCode = req.query.questionPaperCode;
    
    QuestionPaper.findOne({paperCode : questionPaperCode} , function(err ,data){
        if(err){
            res.send("No Question  paper found or not assigned any paper");
        }
        if(!data){
            res.send("no question paper for req test");
        }
        res.status(200).send({
            maximumMarks : data.maximumMarks,
            questionsList:  data.questionsList,
            timeLimit : data.timeLimit
        });
    });
})

router.post("/attempTest",allowCrossDomain,function(req,res){
    const {studentEmail , classId , testCode,testName ,questionPaperCode ,
        response} = req.body;

    QuestionPaper.findOne({paperCode : questionPaperCode}, function(err ,Paperdata){
        if(err || !Paperdata){
            res.send("question paper not found");
        }
                
        Class.findById(classId , function(err ,data){
            data.scheduledTest = data.scheduledTest.map((aTest , outerIndex)=>{

                if(aTest.testCode== testCode && aTest.testName==testName){

                    const actualAnswer = Paperdata.answerList;
                    const marksScored = 0 ;
                    response.forEach((studentAnswer , index)=>{
                        if(studentAnswer.toString() === actualAnswer[index].toString() ){
                            marksScored = marksScored +Number(Paperdata.questionsList[index].points);
                        }
                        if(index === response.length-1){
                            aTest.studentResponse.push(
                                { studentEmail : studentEmail,
                                   response : response,
                                    marks : Number(marksScored)
                                }
                            )
                            return aTest;
                          
                        }
                    })
                }else{
                            return aTest;
                }
                if(outerIndex === data.scheduledTest.length-1 ){
                    console.log("data changed in response " ,data);
                    console.log(data.scheduledTest);
                    data.save(function(err , data){
                       if(err){
                        console.log(err)
                       }
                        console.log(data);
                    });
                }
            });
        });          
    })       
});
module.exports = router;



  // return{
                            //     ...element,
                            //     studentResponse : [
                            //             ...element.studentResponse ,
                            //         { studentEmail : studentEmail,
                            //             response : response,
                            //             marks : Number(marksScored)
                            //         }
                            //     ]
                            
                            // }