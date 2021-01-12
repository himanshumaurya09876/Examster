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

function Papers() {
     
    const [paperData,setPaperData]=useState({
        testName : "",
        questionsList :[],
        timeLimit : "",
    })
    const classes = useStyles()

    function handleChange(event){
        const {name,value}=event.target;

        setPaperData((prevData) => {
            if(name === "questionType")
            {
                const question={
                    questionType:value,
                    questionStatement:"",
                    points: "",
                    options:[]
                }
                return {
                    ...prevData,
                    ["questionsList"]:[...prevData.questionsList,question]
                }
            } else {
                return {
                    ...prevData,
                    [name]:value
                }
            }
        })
    }

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
                        <TextField
                            id="standard-textarea"
                            label="Total Time (In Mins)"
                            placeholder="Total Time (In Mins)"
                            multiline
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
                         case "type1":return <Type1 />;
                         break;
                         case "type2":return <Type2 />;
                         break;
                         case "type3":return <Type3 />;
                         break;
                         case "type4":return <Type4 />;
                         break;
                     }
                 })}
            </div>

            <div className="addQuestion">
                <div className="addQueText"><h3>Add Question</h3></div>
                <div>
                    <FormControl required className={classes.formControl}>
                            <InputLabel id="demo-simple-select-required-label">Question Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                onChange={handleChange}
                                name="questionType"
                                className={classes.selectEmpty}
                            >
                            <MenuItem value={"type1"}>MCQ With Single Correct Option</MenuItem>
                            <MenuItem value={"type1"}>MCQ With Multiple Correct Option</MenuItem>
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
