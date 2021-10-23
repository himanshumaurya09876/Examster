import { FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup, TextField } from '@material-ui/core';
import React ,{useEffect, useState} from 'react';
import './Type1.css';

function Type1(props) {
  
    const [answer , setAnswer] = useState("");
    function handleAnswerChange(event){
        const answer = event.target.value;
        setAnswer(answer);
        props.addAnswer(answer , props.id);
    }
      useEffect(() => {
        props.addAnswer(answer , props.id);
      }, [answer]);

    return (
        <div className="type1">
            <div className="type1__question">
                <h2>{props.questionData.questionStatement}</h2>
            </div>
            <div className="type1__points">
                <p>*Points :{props.questionData.points}</p>
            </div>
            <div className="type1__body">
                <div className="type1__optionsBlock">
                <FormControl component="fieldset" style={{width:"100%"}}>
                    <RadioGroup aria-label="gender" style={{width:"100%"}} name="answer" value={answer} onChange={handleAnswerChange}>
                        <FormControlLabel value="1" control={<Radio />} label={props.questionData.option1} />
                        <FormControlLabel value="2" control={<Radio />} label={props.questionData.option2} />
                        <FormControlLabel value="3" control={<Radio />} label={props.questionData.option3} />
                        <FormControlLabel value="4" control={<Radio />} label={props.questionData.option4} />                     
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
