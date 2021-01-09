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
                {marksList.map((marks)=>{
                    return (
                        <div>
                            <ListItem
                                style={listStyle}
                                Disable
                                // onClick={(event) => handleListItemClick(event, 2)}
                                >
                                <ListItemText primary={marks.studentName + " ["+marks.studentRollNo+"]"} />
                                <ListItemSecondaryAction>
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