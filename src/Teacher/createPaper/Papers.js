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
    const [paperData,setPaperData]=useState({
        testName : "",
        questionsList :[],
        timeLimit : "",
        answerList : [],
    })
    const classes = useStyles()

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
        setPaperData((prevData) => {
            return {
                ...prevData,
                questionsList:prevData.questionsList.map((ques,id) => {
                    if(id === index){
                        return {
                            ...data,
                            questionType:ques.questionType,
                        };
                    } else {
                        return ques;
                    }
                })
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

    console.log(paperData);

    const date = new Date();
    return (
        <div className="classtestTeacher">
            <div className="classtest__headerTeacher">
                <div className="classtest__headerLeft">
                    <div className="classtest__headerTestName">
                        <TextField
                            id="standard-textarea"
                            label="Test Name"
                            name="testName"
                            placeholder="Test Name"
                            multiline
                            color = 'secondary'
                            value={paperData.testName}
                            onChange ={handleChange}
                        />
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
                         case "type1":return <Type1 key={index} id={index} addQuestionData={addQuestionData} addAnswer={addAnswer}/>;
                         break;
                         case "type2":return <Type2 key={index} id={index} addQuestionData={addQuestionData} addAnswer={addAnswer} />;
                         break;
                         case "type3":return <Type3 key={index} id={index} addQuestionData={addQuestionData} addAnswer={addAnswer} />;
                         break;
                         case "type4":return <Type4 key={index} id={index} addQuestionData={addQuestionData} addAnswer={addAnswer} />;
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
                    >
                    Submit
                </Button>
            </div>
        </div>
    )
}

export default Papers;
