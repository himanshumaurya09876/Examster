import { Checkbox, FormControl, FormControlLabel, FormLabel, FormGroup, TextField, Input } from '@material-ui/core';
import React ,{useEffect, useState} from 'react';
import './Type1.css';

function Type2(props) {
    const [questionData, setQuestionData] = useState({
        questionStatement:"",
        points:0,
        option1:"",
        option2:"",
        option3:"",
        option4:""
    });

    const [answer , setAnswer] = useState([0,0,0,0]);

    function handleAnswerChange(event){
        const optionSelected= event.target.value;
        setAnswer((prevAnswers) => {
            return prevAnswers.map((option,index) => {
                if(index == optionSelected){
                    return 1-option;
                } else {
                    return option;
                }
            })
        });
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
                            value={questionData.points}
                            name={"points"}
                            type="number"
                            color = 'secondary'
                            onChange ={handleChange}
                            style={{width:"70px" , marginTop:"10px"}}
                        />
            </div>
            <div className="teachertype1__body">
                <div className="type1__optionsBlock">
                <FormControl component="fieldset">
                    <FormGroup aria-label="gender" name="ansOptions" value={answer} onChange={handleAnswerChange}>
                        <FormControlLabel value="0" control={<Checkbox />} label={<TextField
                            id="standard-textarea"
                            placeholder="Option 1"
                            multiline
                            name="option1"
                            value={questionData.option1}
                            color = 'secondary'
                            onChange ={handleChange}
                        />} />
                        <FormControlLabel value="1" control={<Checkbox />} label={<TextField
                            id="standard-textarea"
                            placeholder="Option 2"
                            multiline
                            name="option2"
                            value={questionData.option2}
                            color = 'secondary'
                            onChange ={handleChange}
                        />} />
                        <FormControlLabel value="2" control={<Checkbox />} label={<TextField
                            id="standard-textarea"
                            placeholder="Option 3"
                            multiline
                            name="option3"
                            value={questionData.option3}
                            color = 'secondary'
                            onChange ={handleChange}
                        />} />
                        <FormControlLabel value="3" control={<Checkbox />} label={<TextField
                            id="standard-textarea"
                            placeholder="Option 4"
                            multiline
                            name="option4"
                            value={questionData.option4}
                            color = 'secondary'
                            onChange ={handleChange}
                        />} />
                    </FormGroup>
                </FormControl>
                </div>
                <div className="type1__marks">

                </div>
            </div>
            
        </div>
    )
}

export default Type2;
