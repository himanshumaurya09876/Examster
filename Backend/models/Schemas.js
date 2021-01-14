const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    password :String,
    collegeID : String,
    classes : [ String ],
    questionPaperIDs :[ String],
}) ;


const StudentSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    password :String,
    collegeID : String,
    enrolledClasses : [
        {
            classBranch : String,
            classSection : String,
            classSubjectCode : String,
            classSubjectName : String,
            classId:String,
        }
    ],
}) ;

const TestSchema = new mongoose.Schema({
    testCode : String ,
    testName : String ,
    
    date : String,
    startTime : String,

    questionPaperCode : String,
    studentResponse : [
        {
            studentEmail : String,
            response :[],
            marks : Number
        }
    ]
});

const ClassSchema = new mongoose.Schema({
    teacherEmail : String,
    students : [  String],
    classBranch : String,
    classSection : String,
    classSubjectCode : String,
    classSubjectName : String, 
    scheduledTest : [TestSchema],
    oldTests :[ TestSchema],
});

const QuestionPaperSchema = new mongoose.Schema({
    paperCode : String,
    paperName : String,
    timeLimit : Number,
    questionsList :[Object],
    answerList : [Object],
    maximumMarks:Number
});

const Type1 = new mongoose.Schema({
    question : String,
    type : Number ,
    choice1 : String,
    choice2 : String,
    choice3 : String,
    choice4 : String,
    answer : [Number],
    points :Number ,
});

const Type3 = new mongoose.Schema({
    question : String,
    type : Number ,
    answer :String,
    points :Number ,
});

const Type4 = new mongoose.Schema({
    question : String,
    type : Number ,
    answer :{
        data : Buffer,
        contentType : String,
    },
    points :Number ,
});

module.exports = {
    Teacher : new mongoose.model('Teacher' ,TeacherSchema),
    Student :  new mongoose.model('Student' ,StudentSchema),
    Test    : new mongoose.model('Test' ,TestSchema),
    Class  : new mongoose.model("Class" ,ClassSchema ),
    QuestionPaper : new mongoose.model("QuestionPaper",QuestionPaperSchema),
    Type1         : Type1,
    Type3         : Type3,
    Type4         : Type4,
};