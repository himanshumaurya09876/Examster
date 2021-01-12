import './App.css';
import Home from './Home/Home';
import Login from './Home/Login';
import SignUp from './Home/SignUp';
import {BrowserRouter as Router ,  Route} from 'react-router-dom';
import StudentDashboard from './Student/Dashboard/Dashboard';
import StudentEnrolledClass from './Student/EnrolledClasses/ClassList';
import StudentClass from './Student/class/Class';

import TeacherDashboard from './Teacher/Dashboard/Dashboard';
import TeacherEnrolledClass from './Teacher/EnrolledClasses/ClassList';
import Teacher from './Teacher/Teacher';
import Student from './Student/Student';

function App() {
  return (
    <div className="App" >
        <Router>
          <Route path='/home' component={Home}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/signUp' component={SignUp}></Route>
          <Route path='/student' component={Student}></Route>
          <Route path='/teacher' component={Teacher}></Route>
        </Router>
    </div>
  );
}

export default App;