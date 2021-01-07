import { Checkbox, FormControl, FormControlLabel, FormLabel, RadioGroup } from '@material-ui/core';
import React ,{useState} from 'react';
import './Type1.css';

function Type2() {
    const [option, setOption] = useState("");
    function handleChange(event){
        setOption(event.target.value);
    }
    return (
        <div className="type1">
            <div className="type1__question">
                <h2>What is your name ? </h2>
            </div>
            <div className="type1__body">
                <div className="type1__optionsBlock">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name="gender1" value={option} onChange={handleChange}>
                        <FormControlLabel value="0" control={<Checkbox />} label="Female" />
                        <FormControlLabel value="1" control={<Checkbox />} label="Male" />
                        <FormControlLabel value="2" control={<Checkbox />} label="Other" />
                        <FormControlLabel value="3" control={<Checkbox />} label="Yse" />
                    </RadioGroup>
                </FormControl>
                </div>
                <div className="type1__marks">

                </div>
            </div>
            
        </div>
    )
}

export default Type2;
