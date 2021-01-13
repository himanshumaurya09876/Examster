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

// const testList =[
//     {
//         testName : "ClassTest-1",
//         testCode : "CT1-CO326",
//     },
//     {
//         testName : "ClassTest-2",
//         testCode : "CT2-CO326",
//     },
//     {
//         testName : "SurpriseTest-1",
//         testCode : "ST1-CO326",
//     }
// ]

function TestList(props) {
    const classes=useStyles();
    const defaultAssignTest ={
        name : "",
        code : "",
        time : "",
        questionPaperCode : "",
    };
    
    const [newTest, setNewTest] = useState(false);
    const {email , classId}=props.location.state;
    const [assignTest , setAssignTest] = useState(defaultAssignTest);

    const [scheduledTest,setScheduledTest]=useState([]);
    const [completedTest,setCompletedTest]=useState([]);
    
    useEffect(() => {
        loadClassTestData();
    }, [])

    const loadClassTestData = async(event)=>{
        await  axios.get('/Teacher/classData?' +"email="+ email+"&classId="+classId,{withCredentials: true},
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                // "Access-Control-Allow-Origin": "*",
               "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                       }
        })
        .then(data=>{
            console.log("class data ",data);
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

        if(assignTest.name==="" || assignTest.code==="" ||
           assignTest.time==="" || assignTest.questionPaperCode===""){
               alert("Fill all the fields");
               return ;
        }
        setAssignTest(defaultAssignTest);
        setNewTest(false);
        await  axios.post('/Teacher/assignTest?' +"email="+ email+"&classId="+classId ,qs.stringify(assignTest),{withCredentials: true},
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                // "Access-Control-Allow-Origin": "*",
               "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                       }
        })
        .then(data=>{
            console.log("class data ",data);
        });
    }
    return (
        <div className="testList__body">
            {
                <TList
                    testList ={testList}
                    />
            }
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
                        name="name"
                        value={assignTest.name}
                        onChange={handleChange}
                        />
                    <input 
                        type="text" 
                        placeholder="Test Code"
                        name="code"
                        value={assignTest.code}
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
