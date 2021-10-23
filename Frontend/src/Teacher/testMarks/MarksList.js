import React, { useEffect, useState } from 'react';
import MList from './MList';

import Axios from "../../Axios";

import './MarksList.css';

const qs = require('querystring')

function MarksList(props) {

    const currentClass=props.location.state.currentClass;
    const testDetails=props.location.state.testDetails;

    const [marksList,setMarksList]=useState([]);

    useEffect(() => {
        loadMarksList();
    }, [])

    const loadMarksList = async(event)=>{
        await Axios.post('/Teacher/getMarksList',JSON.stringify(testDetails),
        {
            headers: {
            'Content-Type': 'application/json',
            }
        })
        .then(data=>{
            console.log(data);
            setMarksList(data.data);
        });
    }
   
    return (
        <div className="marksList__body">
            <div style={{ backgroundImage : "url("+ "../Images/Student/head.png"+")" , height:"12rem"}}
                className="teacher__mlist__details">
                    <h3 className="teacher__testDetails">Class : {currentClass.classBranch +" - "+currentClass.classSection}</h3>
                    <h3 className="teacher__subjectDetails">Subject : {currentClass.classSubjectName +" - "+currentClass.classSubjectCode}</h3>
                    <h3 className="teacher__testDetails">Test : {testDetails.testName+" - "+testDetails.testCode}</h3>

            </div>
            {
                <MList
                    marksList ={marksList}
                />
            }
        </div>
    );
}

export default MarksList