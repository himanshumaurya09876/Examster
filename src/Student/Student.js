import React ,{useState}from 'react';
import Header from './General/Header';
import Footer from './General/Footer';
import StudentClass from './EnrolledClasses/ClassList';
import Dashboard from './Dashboard/Dashboard';
import Class from './class/Class';
import ClassTest from './ClassTest/ClassTest';
function Student() {
    const [joinClass, setJoinClass] = useState(false);
   
    return (
        <div>
           <ClassTest />

           <Header/>
           <StudentClass />
           <Footer/>

           <Header/>
           <Dashboard />
           <Footer/>

           <Header/>
           <Class />
           <Footer/>
        </div>
    )
}

export default Student
