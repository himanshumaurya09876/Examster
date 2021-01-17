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
        <div className="teacher__list__block1">
            { testList &&
            <List component="nav" aria-label="secondary mailbox folder" >
                <ListItem
                    className="tlist__header"
                    Disable
                    >
                    <ListItemText primary={
                        <div className="teacher__tlist__body">
                            <div className="teacher__tlist__testName">
                                {"Test Name"}
                            </div>
                            <div className="teacher__tlist__testCode">
                                {"Test Code"}
                            </div>
                            <div className="teacher__tlist__testTime">
                                {"Time"}
                            </div>
                        </div>                    
                    } />
                </ListItem>
                {testList.map((Atest)=>{
                    return (
                        <div>
                            <ListItem
                                style={listStyle}
                                Disable
                                // onClick={(event) => handleListItemClick(event, 2)}
                                >
                                <ListItemText primary={
                                    <div className="teacher__tlist__body">
                                        <div className="teacher__tlist__testName">
                                            {Atest.testName}
                                        </div>
                                        <div className="teacher__tlist__testCode">
                                            {Atest.testCode}
                                        </div>
                                        <div className="teacher__tlist__testTime">
                                            {Atest.date + "  " + Atest.startTime}
                                        </div>
                                    </div>
                                    } />
                                <ListItemSecondaryAction>
                                <Button
                                    style={{
                                        width:"100px" , 
                                        backgroundColor:"red",
                                        color:"white"
                                    }}
                                >Delete</Button>
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