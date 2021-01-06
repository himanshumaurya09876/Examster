import React ,{useState}from 'react';
import Header from './General/Header';
import Footer from './General/Footer';
import StudentClass from './EnrolledClasses/ClassList';
import Dashboard from './Dashboard/Dashboard';
import Class from './class/Class';

function Student() {
    const [joinClass, setJoinClass] = useState(false);
   
    return (
        <div>
           <Header/>
           <StudentClass />
           <Dashboard />
           <Footer/>
           <Class />
        </div>
    )
}

export default Student
