import { IconButton, TextField ,Input} from '@material-ui/core'
import { AttachFile } from '@material-ui/icons'
import React, {useEffect, useState} from 'react'
import AddIcon from '@material-ui/icons/Add';

import './Type4.css'
function Type4(props) {
   
    function addImage(){

    }

    return (
        <div className="type4Teacher">
            <div className="type1__question">
                <h2>{props.questionData.questionStatement}</h2>
            </div>
            <div className="type1__points">
                <p>*Points :{props.questionData.points}</p>
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
