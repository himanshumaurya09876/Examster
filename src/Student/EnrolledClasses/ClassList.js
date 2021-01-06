import React ,{useState}from 'react';
import List from './List';
import { Button } from '@material-ui/core';
import './ClassList.css';

const enrolledClasses =[
    {
        className : "Machine Learning",
        classCode : "CO326",
    },
    {
        className : "Computer Graphics",
        classCode : "CO305",
    },
]

function Student() {
    const [joinClass, setJoinClass] = useState(false);
   
    return (
        <div>
            {
                enrolledClasses.map( (Oneclass)=>{
                    return (<List 
                        class = {Oneclass}
                    />);
                })
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
                                setJoinClass((prev)=>{return !prev;});
                            }}
                        
                    >
                        Join Class
                </Button>
            </div>

            {joinClass &&
                <div className="student__joinClass">
                    <input 
                        type="text" 
                        placeholder="Class Code"
                        />
                    <div style={{
                            width : "fit-content",
                            margin:"20px auto"
                        }}>
                        
                        <div className="student__joinButton">
                            <Button style={{
                                        width : "200px",
                                        height:"50px",
                                        backgroundColor:"cyan",
                                    }}
                                    
                                >
                                    Join
                            </Button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Student
