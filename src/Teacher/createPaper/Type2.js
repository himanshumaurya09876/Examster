import { Checkbox, FormControl, FormControlLabel, FormLabel, RadioGroup, TextField } from '@material-ui/core';
import React ,{useState} from 'react';
import './Type1.css';

function Type2(props) {
    const [option, setOption] = useState("");
    const [questionData, setQuestionData] = useState({
        questionStatement:"",
        points:"",
        option1:"",
        option2:"",
        option3:"",
        option4:""
    });


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
    console.log(option);

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
                    <TextField
                            id="standard-textarea"
                            label="Points"
                            placeholder="Points"
                            value={questionData.points}
                            multiline
                            name={"points"}
                            color = 'secondary'
                            onChange ={handleChange}
                            style={{width:"15%"}}
                        />
            </div>
            <div className="teachertype1__body">
                <div className="type1__optionsBlock">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name="ansOptions" value={option} onChange={handleChange}>
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
