import React ,{useState}from 'react';
import TList from './TList';
import { Button, TextField, makeStyles } from '@material-ui/core';

import './TestList.css';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      margin:"20px auto",
      outlineWidth: "0",
      border: "none",
      width: "80%",
      fontSize: "20px",
      backgroundColor: "white",
      borderRadius: "5px",
      textAlign: "center"
    },
}));

const testList =[
    {
        testName : "ClassTest-1",
        testCode : "CT1-CO326",
    },
    {
        testName : "ClassTest-2",
        testCode : "CT2-CO326",
    },
    {
        testName : "SurpriseTest-1",
        testCode : "ST1-CO326",
    }
]

function TestList() {
    const classes=useStyles();
    const date=new Date();
    const [newTest, setNewTest] = useState(false);
   
    return (
        <div className="testList__body">

            {
                <TList
                    testList ={testList}
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
                        }}
                        onClick={()=>{
                                setNewTest((prev)=>{return !prev;});
                            }}
                        
                    >
                        New Test
                </Button>
            </div>

            {newTest &&
                <div className="teacher__newTest">
                    <input 
                        type="text" 
                        placeholder="Test Name"
                        />
                    <input 
                        type="text" 
                        placeholder="Test Code"
                        />
                    <form className={classes.container} noValidate>
                        <TextField
                            id="datetime-local"
                            variant="filled"
                            label="Scheduled Date and Time"
                            type="datetime-local"
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    </form>
                    <input 
                        type="text" 
                        placeholder="Test Duration"
                        />
                    <input 
                        type="text" 
                        placeholder="Question Paper Code"
                        />
                    <div style={{
                            width : "fit-content",
                            margin:"20px auto"
                        }}>
                        
                        <div className="teacher__assignButton">
                            <Button style={{
                                        width : "200px",
                                        height:"50px",
                                        backgroundColor:"cyan",
                                    }}
                                    
                                >
                                    Assign
                            </Button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default TestList
