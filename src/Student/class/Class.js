import { Button } from '@material-ui/core';
import React from 'react';
import "./Class.css";
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



function Class() {
    return (
        <div className="list__block">
            { scheduledTest && 
                <div className="list__item">
                            <div className="list__itemContent">
                                <p>{scheduledTest.testName +"   -    "+scheduledTest.date+"  -  "+scheduledTest.time +" -   Max Marks :"+scheduledTest.maximumMarks}</p>
                            </div>
                            <div className="list__itemButton">
                            <Button
                                style={{
                                    width:"100px" , 
                                    backgroundColor:"cyan"
                                }}
                            >Start</Button>
                            </div>
                        </div>

            }
            {
                tests.map((test)=>{
                    return (
                        <div className="list__item">
                            <div className="list__itemContent">
                                <p>{test.testName +"     - "+test.date}</p>
                            </div>
                            <div className="list__itemButton">
                            <p>{test.marksObtained +"/"+test.maximumMarks}</p>

                            </div>
                        </div>
                    );
                })
            }
            
        </div>
    )
}

export default Class;
