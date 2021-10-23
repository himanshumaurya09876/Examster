import { Checkbox, FormControl, FormControlLabel, FormLabel, FormGroup, TextField, Input } from '@material-ui/core';
import React ,{useEffect, useState} from 'react';
import './Type1.css';

function Type2(props) {
    
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
                <FormControl component="fieldset">
                    <FormGroup aria-label="gender" name="ansOptions" value={answer} onChange={handleAnswerChange}>
                        <FormControlLabel value="0" control={<Checkbox />} label={props.questionData.option1} />
                        <FormControlLabel value="1" control={<Checkbox />} label={props.questionData.option2} />
                        <FormControlLabel value="2" control={<Checkbox />} label={props.questionData.option3} />
                        <FormControlLabel value="3" control={<Checkbox />} label={props.questionData.option4} />
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
