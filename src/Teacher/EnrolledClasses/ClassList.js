import React ,{useState}from 'react';
import CList from './CList';
import Header from '../General/Header';
import Footer from '../General/Footer';
import { Button } from '@material-ui/core';
import './ClassList.css';
import Axios from '../../Axios';

const qs = require('querystring')

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
    const [classFormData,setClassFormData]=useState({
        classBranch:"",
        classSection:"",
        classSubjectName:"",
        classSubjectCode:""
    })

    function changed(event){
        const {name,value}=event.target;

        setClassFormData((prevData) => {
            return ({
                ...prevData,
                [name]:value
            });
        })
    }

    const submitted = async(event)=>{
        event.preventDefault();
        
        console.log(classFormData);

        if( classFormData.classBranch ==="" ||  classFormData.classSection=== ""||  classFormData.classSubjectCode === "" || classFormData.classSubjectName === ""){
            alert("Fill all the fields");
            
        }else{ 
            await Axios.post('/Teacher/CreateClass' , qs.stringify(classFormData),{withCredentials: true},
            {
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                 "Access-Control-Allow-Origin": "http://localhost:3000",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                }
            })
            .then(data=>{
                console.log("CreateClass" ,data);
        });
        }
    }
   
    return (
        <div>
        <Header />
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
                        name="classBranch"
                        type="text" 
                        placeholder="Branch"
                        onChange={changed}
                        value={classFormData.classBranch}
                        />
                    <input 
                        name="classSection"
                        type="text" 
                        placeholder="Section"
                        onChange={changed}
                        value={classFormData.classSection}
                        />
                    <input 
                        type="text" 
                        name="classSubjectName"
                        placeholder="Subject Name"
                        onChange={changed}
                        value={classFormData.classSubjectName}
                        />
                    <input 
                        type="text" 
                        name="classSubjectCode"
                        placeholder="Subject Code"
                        onChange={changed}
                        value={classFormData.classSubjectCode}
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

                                    onClick={submitted}
                            >
                                    Create
                            </Button>
                        </div>
                    </div>
                </div>
            }
        </div>
        <Footer />
        </div>
    )
}

export default TeacherClass
