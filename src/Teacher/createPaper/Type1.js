import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import React ,{useState} from 'react';
import './Type1.css';

function Type1() {
    const [option, setOption] = useState("");
    function handleChange(event){
        setOption(event.target.value);
    }
    return (
        <div className="type1">
            <div className="type1__question">
                <h2>What is your name ? </h2>
            </div>
            <div className="type1__points">
                    <TextField
                            id="standard-textarea"
                            label="Points"
                            placeholder="Points"
                            multiline
                            color = 'secondary'
                            onChange ={handleChange}
                        />
            </div>
            <div className="type1__body">
                <div className="type1__optionsBlock">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name="gender1" value={option} onChange={handleChange}>
                        <FormControlLabel value="0" control={<Radio />} label="Female" />
                        <FormControlLabel value="1" control={<Radio />} label="Male" />
                        <FormControlLabel value="2" control={<Radio />} label="Other" />
                        <FormControlLabel value="3" control={<Radio />} label="Yse" />
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
