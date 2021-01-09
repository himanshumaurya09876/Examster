import { IconButton } from '@material-ui/core'
import { AttachFile } from '@material-ui/icons'
import React from 'react'
import AddIcon from '@material-ui/icons/Add';

import './Type4.css'
function Type4() {
    function addImage(){

    }
    return (
        <div className="type4">
             <div className="type1__question">
                <h2>What is your name ? </h2>
            </div>
            <div className="type1__points">
                <h6>{"*Points : 2"}</h6>
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
