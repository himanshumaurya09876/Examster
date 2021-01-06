import { Button } from '@material-ui/core'
import React from 'react'
import './List.css'

function List(props) {
    return (
        <div className="list__block">
            <div className="list__item">
                <div className="list__itemContent">
                    <p>{props.class.className +" - " +props.class.classCode}</p>
                </div>
                <div className="list__itemButton">
                    <Button
                        style={{
                            width:"100px" , 
                            backgroundColor:"cyan"
                        }}
                    >Open</Button>
                </div>
            </div>
         
            
        </div>
    )
}

export default List
