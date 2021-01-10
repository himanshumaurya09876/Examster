import React from 'react';
import Header from './General/Header';
import Footer from './General/Footer';
import TeacherClass from './EnrolledClasses/ClassList';
import TestList from "./classTest/TestList";
import Dashboard from './Dashboard/Dashboard';
import MarksList from './testMarks/MarksList';
import PapersList from './questionPapers/PapersList';
import CreatePaper from './createPaper/Papers';

function Teacher() {
    
    return (
        <div>
           {/* <Header/>
           <Dashboard />
           <Footer/>
           <Header/>
           <TeacherClass />
           <Footer/>
           <Header/>
           <TestList />
           <Footer/>
           <Header/>
           <MarksList />
           <Footer/>
           <Header/>
           <PapersList />
           <Footer/> */}
           <Header/>
           <CreatePaper />
           <Footer/>
        </div>
    )
}

export default Teacher
