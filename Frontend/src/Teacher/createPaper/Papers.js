import React ,{useState , useEffect} from 'react';
import PapersList from '../questionPapers/PapersList';
import TextField from '@material-ui/core/TextField';
import { FormControl, Input , FormHelperText, InputLabel, MenuItem, Select, Button } from '@material-ui/core'
import './Papers.css';
import { makeStyles } from '@material-ui/core/styles';
import Type1 from './Type1';
import Type2 from './Type2';
import Type3 from './Type3';
import Type4 from './Type4';
import Axios from '../../Axios';
import { Redirect } from 'react-router-dom';

const fetch = require('node-fetch');
const qs = require('querystring')

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(1.4),
      fontSize: "1rem",
      width:'150px'
      
    },
  }));

function Papers(props) {
    const [quesAdded,setQuesAdded]=useState("none");
    const user = props.location.state.user;
    const [paperData,setPaperData]=useState({
        paperCode:"",
        paperName : "",
        timeLimit : "",
        questionsList :[],
        answerList : [],
        studentResponse:[],
        email:user.email,
        maximumMarks: 0
    })
    const classes = useStyles()
    const [isSubmitted,setIsSubmitted]=useState(false);

    function handleChange(event){
        const {name,value}=event.target;

        if(value==="none"){
            return;
        }

        setPaperData((prevData) => {
            if(name === "questionType")
            {
                const question={
                    questionType:value,
                    questionStatement:"",
                    points: "",
                    option1:"",
                    option2:"",
                    option3:"",
                    option4:""
                }
                return {
                    ...prevData,
                    questionsList:[...prevData.questionsList,question] ,
                    answerList:[...prevData.answerList , -1],
                }
            } else {
                return {
                    ...prevData,
                    [name]:value
                }
            }
        })
        setQuesAdded("none");
    }

    function addQuestionData(data,index){
        
        let maxMarks=0;
        setPaperData((prevData) => {
            return {
                ...prevData,
                questionsList:prevData.questionsList.map((ques,id) => {
                    if(id === index){
                        maxMarks=maxMarks+Number(data.points);
                        return {
                            ...data,
                            questionType:ques.questionType,
                        };
                    } else {
                        maxMarks=maxMarks+Number(ques.points);
                        return ques;
                    }
                }),
                maximumMarks:maxMarks
            }
        })
    }

    function addAnswer(answer , index){
        setPaperData((prevData) => {
            return {
                ...prevData,
                answerList:prevData.answerList.map((ans,id) => {
                    if(id === index){
                        return answer;
                    } else {
                        return ans;
                    }
                })
            }
        })     
    }

    function deleteQuestion(index){
        console.log("Before ",paperData)
        setPaperData((prevData) => {
            return {
                ...prevData,
                questionsList : prevData.questionsList.filter((que,id) => {
                    return id !== index;
                }),
                answerList : prevData.answerList.filter((ans,id) => {
                    return id !== index;
                })
            }
        })
        console.log("After ",paperData)
    }



    const onSubmit = async(event)=>{
        event.preventDefault();

        if(paperData.paperCode === "" || paperData.paperName === "" || paperData.timeLimit === ""){
            alert("Please fill all the fields.....");
        } else if(paperData.questionsList.length === 0){
            alert("Please add some questions.....");
        } else {
            await Axios.post('/Teacher/createPaper' , JSON.stringify(paperData), //{withCredentials: false},
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(data=>{
                if(data.status === 201){
                    alert("Oh No! This Paper Code already exist. Please enter another Paper Code")
                } else {
                    setIsSubmitted(true);
                }
            });
        }
    }

    if(isSubmitted){
        return <Redirect to={{
            pathname: "/teacher/paper",
            state: { user: user }
          }}

         />
    }


    const date = new Date();
    return (
        <div className="classtestTeacher">
            <div className="classtest__headerTeacher">
                <div className="classtest__headerLeft">
                    <div className="classtest__headerpaperName">
                        <TextField
                            id="standard-textarea"
                            label="Paper Code"
                            name="paperCode"
                            placeholder="Paper Code"
                            color = 'secondary'
                            value={paperData.paperCode}
                            onChange ={handleChange}
                        />
                    </div>
                    <div className="classtest__headerpaperName">
                        <TextField
                            id="standard-textarea"
                            label="Paper Name"
                            name="paperName"
                            placeholder="Paper Name"
                            multiline
                            color = 'secondary'
                            value={paperData.paperName}
                            onChange ={handleChange}
                        />
                    </div>
                    <div className="classtest__headerpaperName">
                        <p>Maximum Marks: {paperData.maximumMarks}</p>
                    </div>
                </div>
                <div className="classtest__headerRemTime">
                        <Input
                            id="standard-textarea"
                            label="Total Time (In Mins)"
                            placeholder="Total Time (In Mins)"
                            type="number"
                            name="timeLimit"
                            value={paperData.timeLimit}
                            color = 'secondary'
                            onChange ={handleChange}
                        />
                </div>
            </div>
            <div className="classtest__body">
                 {paperData.questionsList.map((aQuestion,index) => {
                     switch(aQuestion.questionType){
                         case "type1":return <Type1 key={index} id={index} deleteQuestion={deleteQuestion} addQuestionData={addQuestionData} addAnswer={addAnswer}/>;
                         break;
                         case "type2":return <Type2 key={index} id={index} deleteQuestion={deleteQuestion} addQuestionData={addQuestionData} addAnswer={addAnswer} />;
                         break;
                         case "type3":return <Type3 key={index} id={index} deleteQuestion={deleteQuestion} addQuestionData={addQuestionData} addAnswer={addAnswer} />;
                         break;
                         case "type4":return <Type4 key={index} id={index} deleteQuestion={deleteQuestion} addQuestionData={addQuestionData} addAnswer={addAnswer} />;
                         break;
                     }
                 })}
            </div>

            <div className="addQuestion">
                <div className="addQueText"><h3>Add Question</h3></div>
                <div>
                    <FormControl required className={classes.formControl}>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                onChange={handleChange}
                                name="questionType"
                                value={quesAdded}
                                className={classes.selectEmpty}
                            >
                            <MenuItem value={"none"}><strong>Question Type</strong></MenuItem>
                            <MenuItem value={"type1"}>MCQ With Single Correct Option</MenuItem>
                            <MenuItem value={"type2"}>MCQ With Multiple Correct Option</MenuItem>
                            <MenuItem value={"type3"}>Subjective With Answer In Form Of Text</MenuItem>
                            <MenuItem value={"type4"}>Subjective With Answer Inside A File</MenuItem>
                            </Select>
                    </FormControl>
                </div>
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
                        onClick={onSubmit}
                    >
                    Submit
                </Button>
            </div>
        </div>
    )
}

export default Papers;
