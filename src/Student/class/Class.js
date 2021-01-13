import { Button, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import React , {useEffect} from 'react';
import Footer from '../General/Footer';
import Header from '../General/Header';
import "./Class.css";
import Axios from '../../Axios';
const scheduledTest ={
    date : "26/12/2020",
    time : "18:00pm",
    testName : "Class Test 1",
    maximumMarks : 50,
}
const tests = [ 
        {    date : "26/12/2020",
            time : "18:00pm",
            testName : "Class Test 1",
            studentId : "2K18/CO/391",
            responses : [] ,
            marksObtained : 25 ,
            maximumMarks : 25 ,
        } ,
        {   date : "2/8/2020",
            time : "10:00pm",
            testName : "Class Test 2",
            studentId : "2K18/CO/391",
            responses : [] ,
            marksObtained : 50 ,
            maximumMarks : 50, 
        } 
    ]; 


function listItemStyle(){
    return {
        marginTop : "20px",
        border : "1px  solid black",
        borderRadius : "5px",
        padding: "15px",
        fontSize:"20px",

    }
}


function Class(props) {

    const listStyle = listItemStyle();
    const {email , classId} = props.location.state;

    useEffect(() => {
        loadClassData();
    }, [])
    const loadClassData = async(event)=>{
        await  Axios.get('/Student/classData?' +"email="+ email+"&classId="+classId,{withCredentials: true},
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                // "Access-Control-Allow-Origin": "*",
               "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
        })
        .then(data=>{
            console.log("class data ",data);
        });
    }



    return (
        <div className="class__list__block">
            <img  src="../Images/Student/head.png"/>
            { scheduledTest && 
                <List component="nav" aria-label="secondary mailbox folder" >
                
                <ListItem
                    style={listStyle}
                    // onClick={(event) => handleListItemClick(event, 2)}
                    >
                    <ListItemText primary={scheduledTest.testName + " : ( "+scheduledTest.date+" -- "+ scheduledTest.time+" ) "} />
                    <ListItemSecondaryAction>
                    <Button
                    style={{
                        width:"100px" , 
                        backgroundColor:"cyan"
                    }}
                >Start</Button>
                    </ListItemSecondaryAction>
                </ListItem> 
            </List>
            }     
            
             
            { tests &&
            <List component="nav" aria-label="secondary mailbox folder" >
                {tests.map((test)=>{
                    return (
                        <div>
                            <ListItem
                                style={listStyle}
                                // onClick={(event) => handleListItemClick(event, 2)}
                                >
                                <ListItemText primary={test.testName + " : ( "+test.date +" -- "+ test.time+" ) "} />
                                <ListItemSecondaryAction
                                    style={{
                                        fontSize:"20px",
                                        fontWeight:"bold",
                                        paddingRight:"4%"
                                    }}
                                >
                                {test.marksObtained +" /"+test.maximumMarks}
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

export default Class;
