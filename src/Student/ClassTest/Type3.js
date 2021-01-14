import React  ,{useEffect, useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Type3.css';
import { Input } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: "10px auto",
      width:  "95%",
    },
  },
}));

export default function Type3(props) {
  const classes = useStyles();
  const [answer, setAnswer] = useState('');
  
  function handleAnswerChange(event){
    console.log(event.target.value);
    const answer = event.target.value;
    setAnswer(answer);
    props.addAnswer(answer , props.id); 
  }

  useEffect(() => {
    props.addAnswer(answer , props.id);
  }, [answer]);

  return (
    <div className="type3Teacher" >
       <div className="type1__question">
            <h2>{props.questionData.questionStatement}</h2>
        </div>
        <div className="type1__points">
            <p>*Points :{Number(props.questionData.points)}</p>
        </div>
      
      <form className={classes.root} noValidate autoComplete="off">
      <TextField
          id="standard-textarea"
          label="Answer"
          placeholder="Answer"
          multiline
          color = 'secondary'
          name ="answer"
          value={answer}
          onChange ={handleAnswerChange}
        />
      </form>
    </div>
  );
}

