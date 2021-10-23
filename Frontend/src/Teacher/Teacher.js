import React from 'react';
import Header from './General/Header';
import Footer from './General/Footer';
import ClassList from './EnrolledClasses/ClassList';
import TestList from "./classTest/TestList";
import Dashboard from './Dashboard/Dashboard';
import MarksList from './testMarks/MarksList';
import QuestionPapersList from './questionPapers/PapersList';
import CreatePaper from './createPaper/Papers';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

function Teacher(props) {
    const user = props.location.state.user;
    return (
        <div>
            <Header
                user = {user}
            />            
            <Route path="/teacher/dashboard" component={Dashboard}></Route>
            <Route path='/teacher/classList' component={ClassList}></Route>
            <Route path='/teacher/class' component={TestList}></Route>
            <Route path='/teacher/paper' component={QuestionPapersList}></Route>
            <Route path='/teacher/marksList' component={MarksList}></Route>
            <Route path='/teacher/createPaper' component={CreatePaper}></Route>
            <Footer />
        </div>
    )
}

export default Teacher
