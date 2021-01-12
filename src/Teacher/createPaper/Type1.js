import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import React ,{useState} from 'react';
import './Type1.css';

function Type1() {
    const [questionData, setQuestionData] = useState({
        questionStatement:"",
        points:"",
        options:[]
    });

    function handleChange(event){
        const {name,value}=event.target;

        setQuestionData((prevData) => {
            return {
                ...prevData,
                [name]:value
            }
        })
    }

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
            />
            </div>
            <div className="type1__points">
                    <TextField
                            id="standard-textarea"
                            label="Points"
                            placeholder="Points"
                            name="points"
                            value={questionData.points}
                            multiline
                            color = 'secondary'
                            onChange ={handleChange}
                        />
            </div>
            <div className="type1__body">
                <div className="type1__optionsBlock">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name="gender1" value={option} onChange={handleChange}>
                        <FormControlLabel value="0" control={<Radio />} label={<TextField
                            id="standard-textarea"
                            placeholder="Option 1"
                            multiline
                            color = 'secondary'
                            onChange ={handleChange}
                        />} />
                        <FormControlLabel value="1" control={<Radio />} label={<TextField
                            id="standard-textarea"
                            placeholder="Option 2"
                            multiline
                            color = 'secondary'
                            onChange ={handleChange}
                        />} />
                        <FormControlLabel value="2" control={<Radio />} label={<TextField
                            id="standard-textarea"
                            placeholder="Option 3"
                            multiline
                            color = 'secondary'
                            onChange ={handleChange}
                        />} />
                        <FormControlLabel value="3" control={<Radio />} label={<TextField
                            id="standard-textarea"
                            placeholder="Option 4"
                            multiline
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
