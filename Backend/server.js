const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const session = require('express-session');
const passport = require('passport');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

// Passport Config (strategy , ser , deserialize) 
require('./config/passport')(passport);

// mongoose connection
const db_url = "mongodb+srv://admin:"+ "77YDVesgrUVqBPuZ"+"@cluster0.gygcf.mongodb.net/OnlineExaminationSystem?retryWrites=true&w=majority";
mongoose.connect(db_url , {useNewUrlParser:true ,useUnifiedTopology: true,useCreateIndex : true });


// express session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))
// passport middleware
app.use(passport.initialize());
app.use(passport.session());


// API's
app.get('/' ,function(req,res){
    res.status(200).send("Hello World");
});

app.listen(9000 , function(req ,res){
    console.log("server running at 9000");
});

app.use('/', require('./routes/home.js'));
app.use('/Teacher',require('./routes/teacher.js'));
