import { Button, CircularProgress, makeStyles } from '@material-ui/core';
import React ,{useState , useEffect} from 'react';
import './ClassTest.css';
import Type1 from './Type1';
import Type2 from './Type2';
import Type3 from './Type3';
import Type4 from './Type4';
import Axios from "../../Axios.js";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


const useStyles3 = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
     
      },
    },
  }));

function ClassTest(props) {
    const user = props.location.state.user;
    const [minutes, setMinutes ] = useState(0);
    const [seconds, setSeconds ] =  useState(3);
    const [testData,setTestData] = useState({
        subjectName : props.location.state.classSubjectName,
        subjectCode : props.location.state.classSubjectCode,

        testName : props.location.state.testData.testName,
       
        questionPaperCode : props.location.state.testData.questionPaperCode,
        questionsList :[],
        maximumMarks : 0,
    });
    const [closeTest , setCloseTest] = useState(false);
    const [saveResponse , setSaveResponse] = useState(false);
    const [answers,setAnswers]=useState([]);
    const screenfull = require('screenfull');
    const classes = useStyles3();

    useEffect(() => {
        screenfull.request();
    }, [])

    useEffect( async(e) => {
        if (screenfull.isEnabled) {
            screenfull.on('change', (e) => {
                if(screenfull.isFullscreen === false){
                    setMinutes(0);
                    setSeconds(0);
                }  
            });
        }
    }, [screenfull])
        
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                    onSubmit();
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000);
        return ()=> {
            clearInterval(myInterval);
          };
    });

    useEffect(() => {
        loadTestData();
    }, [])
    
    const loadTestData = async(event)=>{
        await  Axios.get('/Student/attempTest?questionPaperCode='+testData.questionPaperCode ,{withCredentials: true},
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                // "Access-Control-Allow-Origin": "*",
               "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
        })
        .then(data=>{

            data = data.data;
            setAnswers([]);
            // handle.enter();
            data.questionsList.forEach(element => {
                setAnswers(prev=>[...prev , -2]);
            });
            setTestData((prev)=>{
                return{
                    ...prev,
                    maximumMarks : data.maximumMarks,
                    questionsList:  data.questionsList,
                }
            });
            setMinutes(data.timeLimit);
            setSeconds(0);
        });

    }

    function addAnswer(answer , index){
        setAnswers((prevData) => {
            return (
                    prevData.map((ans,id) => {
                    if(id === index){
                        return answer;
                    } else {
                        return ans;
                    }
                })
            )
        })     
    }

    const onSubmit = async(event)=>{
       setTimeout(async()=>{
            setSaveResponse(true);
            const dataToSend={
                studentEmail :user.email,
                classId : props.location.state.classId,
                testCode : props.location.state.testData.testCode,
                testName  :  props.location.state.testData.testName,
                questionPaperCode :props.location.state.testData.questionPaperCode, 
                response : answers,
                maximumMarks : testData.maximumMarks,
            }
            await Axios.post('/Student/attempTest' , JSON.stringify(dataToSend), //{withCredentials: false},
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(data=>{
                setSaveResponse(false);
                setCloseTest(true);            
            });
       },100); 
        
    }
   

    if(closeTest){
        screenfull.exit();
        return <Redirect to={{
            pathname: "/student/class",
            state: { 
                user:user,
                classId :props.location.state.classId }
          }}/> 
    }

    return (
            <div >
            { saveResponse ? 
                <div >
                    <div style={{  height:"100%",
                        marginTop :"20%",
                        marginLeft:"50%",
                        textAlign:"center"}}>
                        <div className={classes.root}>
                            <CircularProgress 
                            size={80}
                            color={'secondary'}
                            />
                        </div>
                    </div>
                    <div >
                    <h2 style={{margin:"20px 0" , marginLeft:"38%"}}>Wait while we save your Response</h2> 
                    </div>
                </div>
                :
                <div  className="classtest">
                <div className="classtest__header">
                    <div className="classtest__headerLeft">
                        <div className="classtest__headerSubjectName">
                            <p>{testData.subjectName + " ["+testData.subjectCode +"]"}</p>
                        </div>
                        <br />
                        <div className="classtest__headerTestName">
                            <p>{testData.testName}</p>
                        </div>
                        <div className="classtest__headerMaxMarks">
                            <p>{"Maximum Marks : "+testData.maximumMarks}</p>
                        </div>
                    </div>
                    <div className="classtest__headerRemTime">
                        <p>Time Left: {minutes+" : "+seconds}</p>
                    </div>
                </div>
                <div className="classtest__body">
                    {testData.questionsList.map((aQuestion,index) => {
                        switch(aQuestion.questionType){
                            case "type1":return <Type1 key={index} id={index} questionData={aQuestion} addAnswer={addAnswer}/>;
                            break;
                            case "type2":return <Type2 key={index} id={index} questionData={aQuestion} addAnswer={addAnswer} />;
                            break;
                            case "type3":return <Type3 key={index} id={index} questionData={aQuestion} addAnswer={addAnswer} />;
                            break;
                            case "type4":return <Type4 key={index} id={index} questionData={aQuestion} addAnswer={addAnswer} />;
                            break;
                        }
                    })}
                </div>
                <div style={{
                                width : "fit-content",
                                margin:"20px auto"
                            }}>
                    <Button style={{
                                width : "fit-content",
                                minWidth :"100px",
                                height:"50px",
                                borderBottom:"1px solid black",
                                backgroundColor:"white",
                                fontSize:"20px",
                                color:"purple",
                                fontWeight:"500",
                            }}
                            onClick={()=>{
                                onSubmit();
                                }}   
                        >
                        Submit
                    </Button>
                </div>
                </div>
            }
            </div>
    )
}

export default ClassTest;
