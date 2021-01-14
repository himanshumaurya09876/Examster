import React  ,{useEffect, useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Type3.css';
import { Button, Input } from '@material-ui/core';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

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
  const [questionData, setQuestionData] = useState({
    questionStatement:"",
    points:0,
  });

  function handleChange(event){
    event.preventDefault();
    const {name,value}=event.target;

    setQuestionData((prevData) => {
        return {
            ...prevData,
            [name]:value
        }
    })
  }

  function handleAnswerChange(event){
      const answer = event.target.value;
      setAnswer(answer);
  }

  function crossClicked(){
    props.deleteQuestion(props.id);
  }

  useEffect(() => {
    props.addQuestionData(questionData,props.id);
  }, [questionData]);

  useEffect(() => {
    props.addAnswer(answer , props.id);
  }, [answer]);

  return (
    <div className="type3Teacher">
    <div className="mainBody3" >
      <div className="type1__question">
      <TextField
          id="standard-textarea"
          label="Question Statement"
          placeholder="Question Statement"
          multiline
          color = 'secondary'
          name = "questionStatement"
          value ={questionData.questionStatement}
          onChange ={handleChange}
          style={{width:"100%"}}
      />
      </div>
      <div className="type3__points">
      <Input
            id="standard-textarea"
            label="Points"
            placeholder="Points"
            color = 'secondary'
            type="number"
            name ="points"
            value={questionData.points}
            onChange ={handleChange}
            style={{width:"70px" , marginTop:"10px"}}
      />
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
    <div className="crossBtn">
            <Button
            onClick={crossClicked}
            >
                <CancelOutlinedIcon
                    style={{fontSize:40, color:"red"}}
                />
            </Button>
        </div>
    </div>
  );
}

