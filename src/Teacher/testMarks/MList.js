import { Button, Checkbox, Divider, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core'
import React from 'react'
import './MList.css'
 function listItemStyle(){
     return {
         marginTop : "20px",
         border : "1px  solid black",
         borderRadius : "5px",
         padding: "10px",

     }
 }

function MList(props) {
    const marksList = props.marksList;

    const listStyle = listItemStyle();
    return (
        <div className="list__block1">
            { marksList &&
            <List component="nav" aria-label="secondary mailbox folder" >
                <ListItem
                        className="mlist__header"
                        Disable
                        >
                    <ListItemText 
                        style={{fontWeight:"bolder"}}
                        primary={
                            <div className="teacher__mlist__body">
                                <div className="teacher__mlist__Name">
                                    {"Student Name"}
                                </div>
                                <div className="teacher__mlist__Roll">
                                    {"Roll no."}
                                </div>
                            </div>                    
                    } />
                    <ListItemSecondaryAction
                        style={{fontWeight:"bolder"}}
                    >
                        {"Student Marks"}
                    </ListItemSecondaryAction>
                </ListItem>
                {marksList.map((marks)=>{
                    return (
                        <div>
                            <ListItem
                                style={listStyle}
                                Disable
                                >
                                <ListItemText primary={
                                        <div className="teacher__mlist__body">
                                        <div className="teacher__mlist__Name">
                                            {marks.studentName }
                                        </div>
                                        <div className="teacher__mlist__Roll">
                                            {marks.studentID}
                                        </div>
                                    </div>
                                    } />  
                                <ListItemSecondaryAction
                                style={{fontWeight:"bolder"}}
                                >
                                {marks.studentMarks}
                                </ListItemSecondaryAction>
                            </ListItem>
                        </div>
                        );
                     })
                }
            </List>
            }
        </div>      
    )
}



export default MList;