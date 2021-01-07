import { FormControl, Input , FormHelperText, InputLabel, MenuItem, Select, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React ,{useState} from 'react'
import Header from './Header';
import Footer from './Footer';
import './Teacher_class.css';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(1.4),
      fontSize: "16px",
      width:'250px'
      
    },
  }));
const defaultUser= {
    email : null ,
    password : null,
    userType : null
};

function Login() {
    const [user, setUser] = useState({...defaultUser})

    const classes = useStyles();

    
    function handleChange(event){
        const {name , value} = event.target;
        setUser( ( prev)=>{
            return {
                  ...prev ,
                  [name] : value
            };
        })
    }
    function onSubmit(event){
        event.preventDefault();
        console.log(user);
        setUser( ( prev)=>{
            return {
                  ...prev ,
                  email : "",
                  password:""
            };
        })
        console.log(user);

    }
    return (
        <div>
        <Header/>
        <div className="login">
            <div className="login__body">
                <h2>Login</h2>
                <FormControl required className={classes.formControl}>
                    <InputLabel id="demo-simple-select-required-label">User Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-required-label"
                        id="demo-simple-select-required"
                        value={user.userType}
                        onChange={handleChange}
                        name="userType"
                        className={classes.selectEmpty}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem  value={"Teacher"}>Teacher</MenuItem>
                    <MenuItem value={"Student"}>Student</MenuItem>
                    </Select>
                </FormControl>

                    <Input 
                        placeholder="Email"
                        type="text"
                        className={classes.selectEmpty}
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                    <Input 
                        placeholder="Password"
                        type="password"    
                        className={classes.selectEmpty}
                        name = "password"
                        value={user.password}                        
                        onChange={handleChange}
                    />
                    <Button
                        className={classes.selectEmpty}
                        onClick={onSubmit}
                     >Submit</Button>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default Login;
