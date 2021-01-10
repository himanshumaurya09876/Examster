import React  ,{useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Type3.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: "10px auto",
      width:  "95%",
    },
  },
}));

export default function Type3() {
  const classes = useStyles();
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="type3" >
      <div className="type1__question">
          <h2>What is your name ? </h2>
      </div>
      <div className="type3__points">
      <TextField
            id="standard-textarea"
            label="Points"
            placeholder="Points"
            multiline
            color = 'secondary'
            onChange ={handleChange}
      />
      </div>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField
          id="standard-textarea"
          label="Answer"
          placeholder="Answer"
          multiline
          color = 'secondary'
          onChange ={handleChange}
        />
      </form>
    </div>
  );
}

