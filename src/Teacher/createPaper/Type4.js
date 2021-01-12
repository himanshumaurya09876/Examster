import { IconButton, TextField ,Input} from '@material-ui/core'
import { AttachFile } from '@material-ui/icons'
import React, {useState} from 'react'
import AddIcon from '@material-ui/icons/Add';

import './Type4.css'
function Type4(props) {
    const [questionData, setQuestionData] = useState({
        questionStatement:"",
        points:"",
      });
    function addImage(){

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

    return (
        <div className="type4Teacher">
             <div className="type1__question">
             <TextField
                id="standard-textarea"
                label="Question Statement"
                placeholder="Question Statement"
                multiline
                name = "questionStatement"
                value ={questionData.questionStatement}
                onChange ={handleChange}
                style={{width:"100%"}}
                color = 'secondary'
            />
            </div>
            <div className="type1__points">
            <Input
                id="standard-textarea"
                label="Points"
                placeholder="Points"
                type="number"
                color = 'secondary'
                name ="points"
                value={questionData.points}
                onChange ={handleChange}
                style={{width:"70px" , marginTop:"10px"}}
            />
            </div>
            <div className="addFileIcon" >   
                <label htmlFor="file-upload" className="custom-file-upload"> 
                </label>
                <input id="file-upload"  type="file" onChange={addImage}/>
            </div> 
        </div>
    )
}

export default Type4
