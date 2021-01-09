import React ,{useState}from 'react';
import CList from './CList';
import { Button } from '@material-ui/core';
import './ClassList.css';

const enrolledClasses =[
    {
        classBranch : "CO",
        classSection : "A1",
    },
    {
        classBranch : "CO",
        classSection : "A2",
    },
    {
        classBranch : "CO",
        classSection : "A3",
    }
]

function TeacherClass() {
    const [newClass, setNewClass] = useState(false);
   
    return (
        <div className="classList__body">

            {
                <CList
                    enrolledClasses ={enrolledClasses}
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
                                setNewClass((prev)=>{return !prev;});
                            }}
                        
                    >
                        New Class
                </Button>
            </div>

            {newClass &&
                <div className="teacher__newClass">
                    <input 
                        type="text" 
                        placeholder="Branch"
                        />
                    <input 
                        type="text" 
                        placeholder="Section"
                        />
                    <input 
                        type="text" 
                        placeholder="Subject Name"
                        />
                    <input 
                        type="text" 
                        placeholder="Subject Code"
                        />
                    <div style={{
                            width : "fit-content",
                            margin:"20px auto"
                        }}>
                        
                        <div className="teacher__createButton">
                            <Button style={{
                                        width : "200px",
                                        height:"50px",
                                        backgroundColor:"cyan",
                                    }}
                            >
                                    Create
                            </Button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default TeacherClass
