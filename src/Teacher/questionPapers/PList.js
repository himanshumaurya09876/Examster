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
                {papersList.map((paper)=>{
                    return (
                        <div>
                            <ListItem
                                style={listStyle}
                                Disable
                                // onClick={(event) => handleListItemClick(event, 2)}
                                >
                                <ListItemText primary={paper.paperName + " "+paper.paperCode} />
                                <ListItemSecondaryAction>
                                <Button
                                    style={{
                                        width:"100px" , 
                                        backgroundColor:"lightSkyBlue"
                                    }}
                                >Open</Button>
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