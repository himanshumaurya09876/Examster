import { Button } from '@material-ui/core';
import React ,{useState , useEffect} from 'react';
import './ClassTest.css';
import Type1 from './Type1';
import Type2 from './Type2';
import Type3 from './Type3';
import Type4 from './Type4';
import Axios from "../../Axios.js";

// const testData = {
//     subjectName : "",
//     subjectCode : "",
//     testName : "",
//     questionPaper :{
//     },
//     minuteLimit : 0,
//     maximumMarks : 0,
// }

function ClassTest(props) {

     
    const [minutes, setMinutes ] = useState(0);
    const [seconds, setSeconds ] =  useState(10);
    const [testData,setTestData] = useState({
        subjectName : props.location.state.classSubjectName,
        subjectCode : props.location.state.classSubjectCode,

        testName : props.location.state.testData.testName,
       
        questionPaperCode : props.location.state.testData.questionPaperCode,
        questionsList :[],
        maximumMarks : 0,
    });


    const [answers,setAnswers]=useState([]);
    console.log(answers);

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
       // event.preventDefault();
        const dataToSend={
            studentEmail :props.location.state.email,
            classId : props.location.state.classId,
            testCode : props.location.state.testData.testCode,
            testName  :  props.location.state.testData.testName,
            questionPaperCode :props.location.state.testData.questionPaperCode, 
            response : answers,
        }
        await Axios.post('/Student/attempTest' , JSON.stringify(dataToSend), //{withCredentials: false},
        {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(data=>{
            console.log(data);
         });
    }

    return (
        <div className="classtest">
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
    )
}

export default ClassTest;
