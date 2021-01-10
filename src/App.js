import './App.css';
import Home from './Home/Home';
import Login from './Home/Login';
import SignUp from './Home/SignUp';
import {BrowserRouter as Router ,  Route} from 'react-router-dom';
import StudentDashboard from './Student/Dashboard/Dashboard';
import StudentEnrolledClass from './Student/class/Class';
import TeacherDashboard from './Teacher/Dashboard/Dashboard';
import TeacherEnrolledClass from './Teacher/EnrolledClasses/ClassList';
import Teacher from './Teacher/Teacher';
import Student from './Student/Student';

function App() {
  return (
    <div className="App" >
        <Teacher />
        {/* <Router>
          <Route path='/home' component={Home}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/signUp' component={SignUp}></Route>
          <Route path='/student/dashboard' component={StudentDashboard}></Route>
          <Route path='/student/Class' component={StudentEnrolledClass}></Route>
          <Route path="/teacher/dashboard" component={TeacherDashboard}></Route>
          <Route path='/teacher/classList' component={TeacherEnrolledClass}></Route>
        </Router> */}
    </div>
  );
}

export default App;