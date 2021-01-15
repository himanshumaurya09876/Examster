import { IconButton, TextField ,Input, Button} from '@material-ui/core'
import { AttachFile } from '@material-ui/icons'
import React, {useEffect, useState} from 'react'
import AddIcon from '@material-ui/icons/Add';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

import './Type4.css'
function Type4(props) {
    const [questionData, setQuestionData] = useState({
        questionStatement:"",
        points:0,
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

    function crossClicked(){
        props.deleteQuestion(props.id);
    }

    useEffect(() => {
        props.addQuestionData(questionData,props.id);
      }, [questionData]);

    return (
        <div className="type4Teacher">
            <div className="mainBody4">
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
                    inputProps={{min:0}}
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
            <div className="crossBtn">
                <Button
                onClick={crossClicked}
                >
                    <CancelOutlinedIcon
                        style={{fontSize:40, color:"red"}}
                    />
                </Button>
            </div>
        </div>
    );
}

export default Type4
