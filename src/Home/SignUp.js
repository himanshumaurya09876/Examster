import { FormControl, Input , FormHelperText, InputLabel, MenuItem, Select, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import Header from './Header';
import Footer from './Footer';
import './SignUp.css';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(1),
      fontSize: "16px",
      width:'280px',
            
    },
  }));
  

function SignUp() {


    const classes = useStyles();
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    
    return (
        <div className="signUp">
        <Header/>
        <div className="login">
            <div className="login__header">
                <i class="fas fa-laptop-code"></i>
                <h1>Exam Master</h1>
            </div>
            <div className="login__body">
                <h2>Sign Up</h2>
                <div className="name">
                    <div className="input__field">
                        <Input 
                            placeholder="First Name"
                            type="text"    
                        />
                    </div>
                    <div className="input__field">
                        <Input 
                            placeholder="Last Name"
                            type="text"    
                        />
                    </div>
                </div>
                <div className="input__field">
                    <Input 
                        placeholder="Email"
                        type="text"
                        className={classes.selectEmpty}
                    />
                </div>
                <div className="input__field">
                    <Input 
                        placeholder="Password"
                        type="password"    
                        className={classes.selectEmpty}
                    />
                </div>
                <div className="input__field" style={{marginLeft:"-7px"}}>
                    <FormControl required className={classes.formControl}>

                        <InputLabel id="demo-simple-select-required-label">User Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            value={age}
                            onChange={handleChange}
                            
                            className={classes.selectEmpty}
                        >
                            
                            <MenuItem  value={1}>Teacher</MenuItem>
                            <MenuItem value={2}>Student</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="input__field">
                    <Input 
                        placeholder="Teacher / Student Id"
                        type="text"    
                        className={classes.selectEmpty}
                    />
                </div>
                <div className="input__field">
                    <Button
                        className={classes.selectEmpty}
                        style={{width:'100%' , backgroundColor:"lightBlue"}}
                     >Submit</Button>
                </div>

               
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default SignUp;
