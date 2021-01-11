import { IconButton, TextField } from '@material-ui/core'
import { AttachFile } from '@material-ui/icons'
import React from 'react'
import AddIcon from '@material-ui/icons/Add';

import './Type4.css'
function Type4() {
    function addImage(){

    }

    function handleChange(){
        
    }
    return (
        <div className="type4Teacher">
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
            <div className="addFileIcon" >   
                <label htmlFor="file-upload" className="custom-file-upload"> 
                </label>
                <input id="file-upload"  type="file" onChange={addImage}/>
            </div> 
        </div>
    )
}

export default Type4
