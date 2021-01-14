import { FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup, TextField } from '@material-ui/core';
import React ,{useEffect, useState} from 'react';
import './Type1.css';

function Type1(props) {
    const [questionData, setQuestionData] = useState({
        questionStatement:"",
        points:0,
        option1:"",
        option2:"",
        option3:"",
        option4:""
    });
    const [answer , setAnswer] = useState("");
    function handleAnswerChange(event){
        console.log(event.target.value);
        const answer = event.target.value;
        setAnswer(answer);
        props.addAnswer(answer , props.id);
    }
    function handleChange(event){
        event.preventDefault();
        const {name,value}=event.target;

        setQuestionData((prevData) => {
            return {
                ...prevData,
                [name]:value
            }
        })
        props.addQuestionData(questionData,props.id);
    }

    useEffect(() => {
        props.addQuestionData(questionData,props.id);
      }, [questionData]);
    
      useEffect(() => {
        props.addAnswer(answer , props.id);
      }, [answer]);

    return (
        <div className="type1Teacher">
            <div className="type1__question">
            <TextField
                id="standard-textarea"
                label="Question Statement"
                placeholder="Question Statement"
                multiline
                name="questionStatement"
                value={questionData.questionStatement}
                color = 'secondary'
                onChange ={handleChange}
                style={{width:"100%"}}
            />
            </div>
            <div className="type1__points">
                    <Input
                            id="standard-textarea"
                            label="Points"
                            placeholder="Points"
                            name="points"
                            type="number"
                            value={Number(questionData.points)}
                            color = 'secondary'
                            onChange ={handleChange}
                            style={{width:"70px" , marginTop:"10px"}}
                        />
            </div>
            <div className="teachertype1__body">
                <div className="type1__optionsBlock">
                <FormControl component="fieldset" style={{width:"100%"}}>
                    <RadioGroup aria-label="gender" style={{width:"100%"}} name="answer" value={answer} onChange={handleAnswerChange}>
                        <FormControlLabel value="1" control={<Radio />} label={<TextField
                            id="standard-textarea"
                            placeholder="Option 1"
                            multiline
                            name="option1"
                            value={questionData.option1}
                            color = 'secondary'
                            onChange ={handleChange}
                            fullWidth="true"
                            style={{width:"100%"}}
                        />} />
                        <FormControlLabel value="2" control={<Radio />} label={<TextField
                            id="standard-textarea"
                            placeholder="Option 2"
                            multiline
                            name="option2"
                            value={questionData.option2}
                            color = 'secondary'
                            onChange ={handleChange}
                        />} />
                        <FormControlLabel value="3" control={<Radio />} label={<TextField
                            id="standard-textarea"
                            placeholder="Option 3"
                            multiline
                            name="option3"
                            value={questionData.option3}
                            color = 'secondary'
                            onChange ={handleChange}
                        />} />
                        <FormControlLabel value="4" control={<Radio />} label={<TextField
                            id="standard-textarea"
                            placeholder="Option 4"
                            multiline
                            name="option4"
                            value={questionData.option4}
                            color = 'secondary'
                            onChange ={handleChange}
                        />} />
                    </RadioGroup>
                </FormControl>
                </div>
                <div className="type1__marks">

                </div>
            </div>
            
        </div>
    )
}

export default Type1;
