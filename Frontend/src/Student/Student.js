import React ,{useState}from 'react';
import Header from './General/Header';
import Footer from './General/Footer';
import StudentClass from './EnrolledClasses/ClassList';
import Dashboard from './Dashboard/Dashboard';
import Class from './class/Class';
import EnrolledClass from './EnrolledClasses/ClassList';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

function Student(props) {
    const user = props.location.state.user;
    
  
    return (
            <div>
               
                <div>
                    <Header
                        user = {user}
                    />
                    <Route path='/student/dashboard' component={Dashboard}></Route>
                    <Route path='/student/EnrolledClasses' component={EnrolledClass}></Route>
                    <Route path='/student/class' component={Class}></Route>
                    <Footer />
                </div>

            </div>
    );
}
export default Student