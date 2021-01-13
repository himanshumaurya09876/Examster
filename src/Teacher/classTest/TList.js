import { Button, Checkbox, Divider, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core'
import React from 'react'
import './TList.css'
 function listItemStyle(){
     return {
         marginTop : "20px",
         border : "1px  solid black",
         borderRadius : "5px",
         padding: "10px",

     }
 }

function TList(props) {
    const testList = props.testList;

    const listStyle = listItemStyle();
    return (
        <div className="list__block1">
            { testList &&
            <List component="nav" aria-label="secondary mailbox folder" >
                {testList.map((Atest)=>{
                    return (
                        <div>
                            <ListItem
                                style={listStyle}
                                Disable
                                // onClick={(event) => handleListItemClick(event, 2)}
                                >
                                <ListItemText primary={Atest.testName + " ["+Atest.testCode+"] "+Atest.date + "  " + Atest.startTime} />
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



export default TList;