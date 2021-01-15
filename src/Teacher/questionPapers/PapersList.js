import React, { useEffect, useState } from 'react';
import PList from './PList';
import {Button} from '@material-ui/core'
import Axios from '../../Axios';

import './PapersList.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

// const papersList =[
//     {
//         paperName : "ClassTest-1",
//         paperCode : "CT1-CO326",
//     },
//     {
//         paperName : "SurpriseTest-1",
//         paperCode : "ST1-CO326",
//     },
//     {
//         paperName : "ClassTest-2",
//         paperCode : "CT2-CO326",
//     }
// ]

function PapersList(props) {
    const user  =  props.location.state.user;

    const [paperList,setPaperList]=useState([]);

    useEffect(() => {
        loadPaperList();
    }, [])

    const loadPaperList = async(event)=>{
        await Axios.get('/Teacher/paperList?'+"email="+user.email,//{withCredentials: true},
        {
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            //  "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
        })
        .then(data=>{
            console.log("PaperList" ,data.data);
            setPaperList(data.data);
            });
    }

    return (
        <div className="papersList__body">

            {
                <PList
                    papersList ={paperList}
                    />
            }

            <div style={{
                        width : "fit-content",
                        margin:"20px auto"
                    }}>
                <Link to={{
                        pathname: "/teacher/createPaper",
                        state: { user: user }
                    }}>
                    <Button style={{
                                width : "200px",
                                height:"50px",
                                backgroundColor:"cyan",
                            }}>
                            Create Test
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default PapersList