import React from 'react';
import MList from './MList';

import './MarksList.css';

const marksList =[
    {
        studentName : "Vishu bhai 😉",
        studentRollNo : "2K18/CO/391",
        studentMarks: "100/100"
    },
    {
        studentName : "Vishu bhai 😉",
        studentRollNo : "2K18/CO/391",
        studentMarks: "100/100"
    },
    {
        studentName : "Vishu bhai 😉",
        studentRollNo : "2K18/CO/391",
        studentMarks: "100/100"
    }
]

function MarksList() {
   
    return (
        <div className="marksList__body">

            {
                <MList
                    marksList ={marksList}
                    />
            }
        </div>
    );
}

export default MarksList