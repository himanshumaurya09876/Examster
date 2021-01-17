import { Button, Checkbox, Divider, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core'
import React from 'react'
import {Link } from "react-router-dom";
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
    const listType= props.listType;
    const currentClass=props.currentClass;
    const user=props.user;

    function deleteClicked(){

    }

    const listStyle = listItemStyle();
    return (
        <div className="teacher__list__block1">
            { testList &&
            <List component="nav" aria-label="secondary mailbox folder" >
                {testList.map((Atest)=>{
                    if(listType === "ScheduledList"){
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
                                            backgroundColor:"red",
                                            color:"white"
                                        }}

                                        onClick={deleteClicked}
                                    >Delete</Button>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            </div>
                            );
                    } else {
                        return (
                            <div>
                                <ListItem
                                    style={listStyle}
                                    Disable
                                    // onClick={(event) => handleListItemClick(event, 2)}
                                    >
                                    <ListItemText primary={Atest.testName + " ["+Atest.testCode+"] "+Atest.date + "  " + Atest.startTime} />
                                    <ListItemSecondaryAction>
                                    <Link to={{
                                        pathname: "/teacher/marksList",
                                        state: {
                                                user:user,
                                                testDetails:Atest, 
                                                currentClass: currentClass }
                                        }} replace>
                                        <Button
                                            style={{
                                                width:"120px" , 
                                                backgroundColor:"red",
                                                color:"white"
                                            }}
                                        >Show Marks</Button>
                                    </Link>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            </div>
                            );
                    }
                })
                }
            </List>
            }
        </div>      
    )
}



export default TList;