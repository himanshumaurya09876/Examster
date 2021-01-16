import React, { useState } from 'react';
import MList from './MList';

import './MarksList.css';

function MarksList() {

    const [marksList,setMarksList]=useState([]);

    const loadMarksList = async(event)=>{
        // await Axios.get('/Teacher/getMarksList/'+classFormData.email,{withCredentials: true},
        // {
        //     headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //     //  "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        //     }
        // })
        // .then(data=>{
        //     setMarksList(data.data);
        //     });
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