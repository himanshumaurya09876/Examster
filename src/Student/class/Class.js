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
function getTime(){
    var objToday = new Date(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate()  : objToday.getDate() ,
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = (objToday.getMonth()+1<10)? "0"+(objToday.getMonth()+1) : objToday.getMonth()+1  ,
	curYear = objToday.getFullYear(),
	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
	curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
    var today = curYear+"-"+curMonth+"-"+dayOfMonth+"T"+curHour+":"+curMinute;
    return today;

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
    const {user , classId} = props.location.state;

    function startTest(id){

    }

    useEffect(() => {
        loadClassData();
    }, [])
    const loadClassData = async(event)=>{
        await  Axios.get('/Student/classData?' +"email="+ user.email+"&classId="+classId,{withCredentials: true},
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                // "Access-Control-Allow-Origin": "*",
               "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
        })
        .then(data=>{
            setClassData(data.data);
        });
    }

     const today =getTime();
    return (
        <div className="class__list__block">
            <img  src="../Images/Student/head.png"/>
            <div>
                    <h2>{user.name}</h2>
                    <h3>{user.collegeId}</h3>
                    <h3>{classData.classBranch +" "+classData.classSection}</h3>
                    <h3>{classData.classSubjectName +" "+classData.classSubjectCodes}</h3>
                </div>
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
                        {today>=test.date+"T"+test.startTime &&
                            <Link to={{
                                    pathname: "/attemptTest",
                                    
                                    state: { user: user , 
                                            classId : classData._id,
                                            testData : test,
                                            classSubjectName: classData.classSubjectName,
                                            classSubjectCode: classData.classSubjectCode
                                            }}}
                                    replace >                                 
                                    <Button
                                        style={{
                                            width:"100px" , 
                                            backgroundColor:"cyan"
                                        }}
                                    >Start</Button>
                                </Link>
                        }
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
