import { Button, Checkbox, Divider, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core'
import React from 'react'
import './PList.css'
 function listItemStyle(){
     return {
         marginTop : "20px",
         border : "1px  solid black",
         borderRadius : "5px",
         padding: "10px",

     }
 }

function PList(props) {
    const papersList = props.papersList;

    const listStyle = listItemStyle();
    return (
        <div className="list__block1">

            { papersList &&
            <List component="nav" aria-label="secondary mailbox folder" >
                <ListItem
                    className="teacher__plist__header"
                    Disable
                    >
                    <ListItemText primary={
                        <div className="teacher__plist__body">
                            <div className="teacher__plist__code">
                                { "Paper Code"}
                            </div>
                            <div className="teacher__plist__name">
                                { "Paper Name"}
                            </div>   
                        </div>
                    } />
                </ListItem>
                {papersList.map((paper)=>{
                    return (
                        <div>
                            <ListItem
                                style={listStyle}
                                Disable
                                // onClick={(event) => handleListItemClick(event, 2)}
                                >
                                <ListItemText primary={
                                    <div className="teacher__plist__body">
                                        <div className="teacher__plist__code">
                                            { paper.paperCode}
                                        </div>
                                        <div className="teacher__plist__name">
                                            { paper.paperName}
                                        </div>   
                                    </div>
                                } />
                                <ListItemSecondaryAction>
                                <Button
                                    style={{
                                        width:"100px" , 
                                        backgroundColor:"lightSkyBlue"
                                    }}
                                >Update</Button>
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



export default PList;