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


const props = {
    subjectName : "",
    subjectCode : "",
    testName : "",
    questionPaper :{
    },
    minuteLimit : 0,
    maximumMarks : 0
}

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(1.4),
      fontSize: "16px",
      width:'250px'
      
    },
  }));

function Papers() {
     
    const [ minutes, setMinutes ] = useState(0);
    const [seconds, setSeconds ] =  useState(0);
    const classes = useStyles();
    function handleChange(){

    }

    const date = new Date();
    return (
        <div className="classtest">
            <div className="classtest__header">
                <div className="classtest__headerLeft">
                    <div className="classtest__headerSubjectName">
                        <TextField
                            id="standard-textarea"
                            label="Subject Name and Code"
                            placeholder="Subject Name and Code"
                            multiline
                            color = 'secondary'
                            onChange ={handleChange}
                        />
                    </div>
                    <br />
                    <div className="classtest__headerTestName">
                        <TextField
                            id="standard-textarea"
                            label="Test Name"
                            placeholder="Test Name"
                            multiline
                            color = 'secondary'
                            onChange ={handleChange}
                        />
                    </div>
                    <div className="classtest__headerMaxMarks">
                        <TextField
                            id="standard-textarea"
                            label="Maximum Marks"
                            placeholder="Maximum Marks"
                            multiline
                            color = 'secondary'
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
                            color = 'secondary'
                            onChange ={handleChange}
                        />
                </div>
            </div>
            <div className="classtest__body">
                 <Type1 />
                 <Type3 />
                 <Type4 />
                 <Type2 />
            </div>

            <div className="addQuestion">
                <div>Add Question</div>
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
                            <MenuItem  value={""}>Type 1</MenuItem>
                            <MenuItem value={""}>Type 2</MenuItem>
                            <MenuItem  value={""}>Type 3</MenuItem>
                            <MenuItem value={""}>Type 4</MenuItem>
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
