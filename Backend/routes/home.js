const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

const Schema = require('../models/Schemas');
const {ensureAuthenticated ,forwardAuthenticated } = require('../config/auth.js');

router.post('/signUp' , (req ,res)=>{
    const userType = req.body.userType;
    if(userType === 'Student'){
        const studentData= req.body;
        console.log(studentData);

        Schema.Student.findOne({ email: req.body.email }).then(user => {
            if (user) {
                res.send({ msg: 'Student already exists' })
            } else {
               const newStudent = new Schema.Student(studentData);
      
              bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newStudent.password, salt, (err, hash) => {
                  if (err) throw err;
                    newStudent.password = hash;
                  newStudent
                    .save()
                    .then(user => {
                        res.send({ msg: 'Student registration successful' });
                    })
                    .catch(err =>{ 
                        console.log(err);
                        res.send(err)}
                    );
                });
              });
            }
          });
    }
    if(userType === 'Teacher'){
        const teacherData= req.body;
        console.log(teacherData);

        Schema.Teacher.findOne({ email: req.body.email }).then(user => {
            if (user) {
                res.send({ msg: 'Teacher already exists' })
            } else {
               const newTeacher = new Schema.Teacher(teacherData);
      
              bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newTeacher.password, salt, (err, hash) => {
                  if (err) throw err;
                    newTeacher.password = hash;
                  newTeacher
                    .save()
                    .then(user => {
                        res.send({ msg: 'Teacher registration successful' });
                    })
                    .catch(err =>{ 
                        console.log(err);
                        res.send(err)}
                    );
                });
              });
            }
          });
    }
})

// Login
router.post('/login', (req, res, next) => {
    const userType = req.body.userType;
    if(userType==='Student'){
        passport.authenticate('StudentStrategy', )(req, res, function(){
           console.log(req.session);
            res.send("Student login successful");
        });
    }else{
        passport.authenticate('TeacherStrategy', )(req, res, function(err ,data){
          console.log("=========================================================");
          console.log(req);
          console.log("=========================================================");

          console.log(req.sessionID);

            res.send(data);
        });
    }   
});

module.exports = router;