import React ,{useState , useEffect}from 'react';
import TList from './TList';
import { Button, TextField, makeStyles } from '@material-ui/core';

import './TestList.css';
import axios from '../../Axios';
const qs = require('querystring')

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      margin:"20px auto",
      outlineWidth: "0",
      border: "none",
      width: "80%",
      fontSize: "20px",
      backgroundColor: "white",
      borderRadius: "5px",
      textAlign: "center"
    },
}));

function TestList(props) {
    const classes=useStyles();
    const defaultAssignTest ={
        testName : "",
        testCode : "",
        time : "",
        questionPaperCode : "",
    };
    
    const [newTest, setNewTest] = useState(false);
    const {user , currentClass}=props.location.state;
    const [assignTest , setAssignTest] = useState(defaultAssignTest);

    const [scheduledTest,setScheduledTest]=useState([]);
    const [completedTest,setCompletedTest]=useState([]);
    
    useEffect(() => {
        loadClassTestData();
    }, [])

    const loadClassTestData = async(event)=>{
        await  axios.get('/Teacher/classData?' +"email="+ user.email+"&classId="+currentClass.classId,{withCredentials: true},
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                // "Access-Control-Allow-Origin": "*",
               "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                       }
        })
        .then(data=>{
            setScheduledTest(data.data.scheduledTest);
            setCompletedTest(data.data.oldTests);
        });
    }

    function handleChange(event ){
        const {name , value }=event.target;
        setAssignTest((prev)=>{
            return {
                ...prev,
                [name] : value,
            }
        })
    }
    const submit = async(event)=> {

        if(assignTest.testName==="" || assignTest.testCode==="" ||
           assignTest.time==="" || assignTest.questionPaperCode===""){
               alert("Fill all the fields");
               return ;
        }
        setAssignTest(defaultAssignTest);
        setNewTest(false);

        const newTestFormat={
            testCode : assignTest.testCode ,
            testName : assignTest.testName  ,
            
            date : assignTest.time.substring(0,10),
            startTime : assignTest.time.substring(12),

            questionPaperCode : assignTest.questionPaperCode,
            studentResponse : []
        }

        await  axios.post('/Teacher/assignTest?' +"email="+ user.email+"&classId="+currentClass.classId ,qs.stringify(newTestFormat),{withCredentials: true},
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                // "Access-Control-Allow-Origin": "*",
               "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                       }
        })
        .then(data=>{
            if(data.status === 201){
                alert("Question paper doesnot exist. Please enter a valid Question Paper Code");
            } else {
                loadClassTestData();
            }
        });
    }
    return (
        <div className="testList__body">
            <div style={{ backgroundImage : "url("+ "../Images/Student/head.png"+")" , }}
                className="teacher__list__details">
                    <h3 className="teacher__classDetails">Class : {currentClass.classBranch +" - "+currentClass.classSection}</h3>
                    <h3 className="teacher__subjectDetails">Subject : {currentClass.classSubjectName +" - "+currentClass.classSubjectCode}</h3>
            </div>

            <div className="teacher__completedTestBody">
                <h2 className="teacher__completedTest">Scheduled Tests / Running Test</h2>
                { (scheduledTest && scheduledTest.length > 0) ?
                    <TList
                        testList ={scheduledTest}
                    />
                    :
                    <div className="emptyState" >
                         <h2>You have no Scheduled Assigned Test</h2> 
                    </div> 
                }
            </div>

            <div className="teacher__completedTestBody">
                <h2 className="teacher__completedTest">Past Test</h2>
                { (completedTest && completedTest.length >0)?
                    <TList
                        testList ={completedTest}
                    />
                    :
                    <div className="emptyState" >
                        <h2>No Past Test</h2> 
                    </div>
                }
            </div>
           <div style={{
                            width : "fit-content",
                            margin:"20px auto"
                        }}>
                <Button style={{
                            width : "200px",
                            height:"50px",
                            backgroundColor:"cyan",
                        }}
                        onClick={()=>{
                                setNewTest((prev)=>{return !prev;});
                            }}
                        
                    >
                        New Test
                </Button>
            </div>

            {newTest &&
                <div className="teacher__newTest">
                    <input 
                        type="text" 
                        placeholder="Test Name"
                        name="testName"
                        value={assignTest.testName}
                        onChange={handleChange}
                        />
                    <input 
                        type="text" 
                        placeholder="Test Code"
                        name="testCode"
                        value={assignTest.testCode}
                        onChange={handleChange}
                        />
                    <form className={classes.container} noValidate>
                        <TextField
                            id="datetime-local"
                            variant="filled"
                            label="Scheduled Date and Time"
                            type="datetime-local"
                            name="time"
                            onChange={handleChange}
                            value={assignTest.time}
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    </form>
                    <input 
                        type="text" 
                        placeholder="Question Paper Code"
                        name="questionPaperCode"
                        value={assignTest.questionPaperCode}
                        onChange={handleChange}
                        />
                    <div style={{
                            width : "fit-content",
                            margin:"20px auto"
                        }}>
                        
                        <div className="teacher__assignButton">
                            <Button 
                                style={{
                                        width : "200px",
                                        height:"50px",
                                        backgroundColor:"cyan",
                                }}
                                onClick={submit}    
                                >
                                    Assign
                            </Button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default TestList
