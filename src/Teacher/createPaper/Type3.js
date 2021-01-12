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

export default function Type3(props) {
  const classes = useStyles();
  const [answer, setAnswer] = useState('');
  const [questionData, setQuestionData] = useState({
    questionStatement:"",
    points:"",
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
    props.addQuestionData(questionData,props.id);
  }
  function handleAnswerChange(event){
      const answer = event.target.value;
      setAnswer(answer);
      props.addAnswer(answer , props.id);
  }
  return (
    <div className="type3Teacher" >
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
      <TextField
            id="standard-textarea"
            label="Points"
            placeholder="Points"
            multiline
            color = 'secondary'
            name ="points"
            value={questionData.points}
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
          name ="answer"
          value={answer}
          onChange ={handleAnswerChange}
        />
      </form>
    </div>
  );
}

