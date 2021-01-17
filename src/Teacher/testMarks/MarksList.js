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

            {
                <MList
                    marksList ={marksList}
                />
            }
        </div>
    );
}

export default MarksList