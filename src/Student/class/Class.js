import { Button, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import React , {useEffect , useState} from 'react';
import Footer from '../General/Footer';
import Header from '../General/Header';
import "./Class.css";
import Axios from '../../Axios';
import {Link} from 'react-router-dom';
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
    const [classData , setClassData] = useState({
        _id: "",
        classBranch: '',
        classSection: '',
        classSubjectName: '',
        classSubjectCode: '',
        oldTests: [],
        scheduledTest: [] ,
        startTime: ""
    });
    const listStyle = listItemStyle();
    const {email , classId} = props.location.state;

    function startTest(id){

    }

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
            setClassData(data.data);
            console.log("class data ",data);

        });
    }
    console.log(classData);


    return (
        <div className="class__list__block">
            <img  src="../Images/Student/head.png"/>
            { classData.scheduledTest && 
                <List component="nav" aria-label="secondary mailbox folder" >

                <h2>Scheduled Tests / Running Test</h2>

                {classData.scheduledTest.map((test) => {
                 
                 return (

                        <ListItem
                        style={listStyle}
                        // onClick={(event) => handleListItemClick(event, 2)}
                        >
                        <ListItemText primary={test.testName + " : ( "+test.date+" -- "+ test.startTime+" ) "} />
                        <ListItemSecondaryAction>
                        <Link to={{
                            pathname: "/student/attemptTest",
                            state: { email: email , 
                                     classId : classData._id,
                                     testData : test,
                                     classSubjectName: classData.classSubjectName,
                                     classSubjectCode: classData.classSubjectCode
                                     }}}>                                 
                                <Button
                                    style={{
                                        width:"100px" , 
                                        backgroundColor:"cyan"
                                    }}
                                >Start</Button>
                            </Link>
                        
                        </ListItemSecondaryAction>
                    </ListItem> 
               )
            })
        }
        </List>      
          
    } 
            <h2>Completed Tests</h2> 
            
            {classData.oldTests &&
            <List component="nav" aria-label="secondary mailbox folder" >
                {
                    classData.oldTests.map((test)=>{
                    return (
                        <div>
                            <ListItem
                                style={listStyle}
                                // onClick={(event) => handleListItemClick(event, 2)}
                                >
                                <ListItemText primary={test.testName + " : ( "+test.date +" -- "+ test.startTime+" ) "} />
                                <ListItemSecondaryAction
                                    style={{
                                        fontSize:"20px",
                                        fontWeight:"bold",
                                        paddingRight:"4%"
                                    }}
                                >
                                {test.marksObtained }
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
