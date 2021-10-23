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
                            <div className="teacher__tlist__testName" style={{fontSize: "1.25rem", fontWeight:"bold"}}>
                                {"Test Name"}
                            </div>
                            <div className="teacher__tlist__testCode" style={{fontSize: "1.25rem", fontWeight:"bold"}}>
                                {"Test Code"}
                            </div>
                            <div className="teacher__tlist__testTime" style={{fontSize: "1.25rem", fontWeight:"bold"}}> 
                                {"Time"}
                            </div>
                        </div>                    
                    } />
                </ListItem>
                {testList.map((Atest)=>{

                    if(listType === "ScheduledList"){
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
                                            color:"white",
                                            textDecorationLine : "none",
                                        }}

                                        onClick={() => {
                                            return props.deleteTest(Atest._id);
                                        }}
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
                                } />                                    <ListItemSecondaryAction>
                                    <Link to={{
                                        pathname: "/teacher/marksList",
                                        state: {
                                                user:user,
                                                testDetails:Atest, 
                                                currentClass: currentClass }
                                        }} 
                                        replace
                                        style={{textDecorationLine : "none",}}
                                        >
                                        <Button
                                            style={{
                                                width:"120px" , 
                                                backgroundColor:"lightskyblue",
                                                color:"black",
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