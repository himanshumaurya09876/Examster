import React from 'react';
import MList from './PList';
import {Button} from '@material-ui/core'

import './PapersList.css';

const papersList =[
    {
        paperName : "ClassTest-1",
        paperCode : "CT1-CO326",
    },
    {
        paperName : "SurpriseTest-1",
        paperCode : "ST1-CO326",
    },
    {
        paperName : "ClassTest-2",
        paperCode : "CT2-CO326",
    }
]

function PapersList() {
   
    return (
        <div className="papersList__body">

            {
                <MList
                    papersList ={papersList}
                    />
            }

            <div style={{
                        width : "fit-content",
                        margin:"20px auto"
                    }}>
                <Button style={{
                            width : "200px",
                            height:"50px",
                            backgroundColor:"cyan",
                        }}>
                        Create Test
                </Button>
            </div>
        </div>
    );
}

export default PapersList