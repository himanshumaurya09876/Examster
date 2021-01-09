import './App.css';
import Home from './Home/Home';
import Login from './Home/Login';
import SignUp from './Home/SignUp';
import {BrowserRouter as Router ,  Route} from 'react-router-dom';
import Dashboard from './Student/Dashboard/Dashboard';
import Class from './Student/class/Class';
import Teacher from './Teacher/Teacher';
import Student from './Student/Student';

function App() {
  return (
    <div className="App" >
        <Router>
          <Route path='/home' component={Home}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/signUp' component={SignUp}></Route>
          <Route path='/student/dashboard' component={Dashboard}></Route>
          <Route path='/student/Class' component={Class}></Route>
        </Router>
    </div>
  );
}

export default App;